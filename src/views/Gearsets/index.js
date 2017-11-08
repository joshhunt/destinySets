import React, { Component } from 'react';
import { sortBy } from 'lodash';
import cx from 'classnames';
import copy from 'copy-text-to-clipboard';

import { getDefinition } from 'app/lib/manifestData';

import * as destiny from 'app/lib/destiny';
import * as ls from 'app/lib/ls';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import Loading from 'app/views/Loading';
import LoginUpsell from 'app/components/LoginUpsell';
import ActivityList from 'app/components/ActivityList';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import { mapItems /*, logItems */ } from './utils';

// import * as telemetry from 'app/lib/telemetry';

import {
  HUNTER,
  TITAN,
  WARLOCK,
  PLAYSTATION
} from 'app/views/DataExplorer/definitionSources';

import { fancySearch } from 'app/views/DataExplorer/filterItems';
import sortItemsIntoSections from 'app/views/DataExplorer/sortItemsIntoSections';

import styles from './styles.styl';

import setsSets from '../sets.js';
import allItemsSets from '../allItems.js';
import consoleExclusives from '../consoleExclusives.js';

const SHOW_PS4_EXCLUSIVES = -101;
const SHOW_COLLECTED = -102;

function merge(base, extra) {
  return { ...base, ...extra };
}

const VARIATIONS = {
  sets: setsSets,
  allItems: allItemsSets
};

const FILTERS = [
  [TITAN, 'Titan'],
  [HUNTER, 'Hunter'],
  [WARLOCK, 'Warlock'],
  [SHOW_COLLECTED, 'Collected'],
  [SHOW_PS4_EXCLUSIVES, 'PS4 exclusives']
];

const defaultFilter = {
  [TITAN]: true,
  [HUNTER]: true,
  [WARLOCK]: true,
  [SHOW_COLLECTED]: true
};

class Gearsets extends Component {
  inventory = [];

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items: [],
      selectedItems: [],
      displayFilters: false,
      filter: ls.getFilters() || defaultFilter
    };
  }

  componentDidMount() {
    this.inventory = ls.getInventory();

    this.dataPromise = Promise.all([
      getDefinition('DestinyInventoryItemDefinition'),
      getDefinition('DestinyVendorDefinition')
    ]);

    this.dataPromise.then(result => {
      this.processSets(...result);
    });
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated) {
      this.fetchCharacters(newProps);
    }

    if (this.props.route !== newProps.route) {
      this.dataPromise.then(result => {
        this.processSets(...result);
      });
    }
  }

  processSets = (itemDefs, vendorDefs) => {
    const sets = VARIATIONS[this.props.route.variation];

    const allItems = Object.values(itemDefs);

    const kioskItems = this.profile
      ? destiny.collectItemsFromKiosks(this.profile, itemDefs, vendorDefs)
      : [];

    const inventory = [...this.inventory, ...kioskItems];

    // this.profile && itemDefs && logItems(this.profile, itemDefs);

    // this.profile && telemetry.saveInventory(this.profile, inventory);

    ls.saveInventory(inventory);

    this.rawGroups = sets.map(group => {
      const sets = group.sets.map(set => {
        const preSections = set.fancySearchTerm
          ? sortItemsIntoSections(fancySearch(set.fancySearchTerm, allItems))
          : set.sections;

        const sections = preSections.map(section => {
          const preItems =
            section.items ||
            fancySearch(section.fancySearchTerm, allItems).map(i => i.hash);
          const items = mapItems(preItems, itemDefs, inventory);

          return merge(section, { items });
        });

        return merge(set, { sections });
      });

      return merge(group, { sets });
    });

    const filteredGroups = this.filterGroups(this.rawGroups);

    const emblem = itemDefs[this.emblemHash];

    this.setState({
      emblemBg: emblem && emblem.secondarySpecial,
      loading: false,
      groups: filteredGroups
    });
  };

  filterGroups = (rawGroups, _filter) => {
    const filter = _filter || this.state.filter;

    // fuck me, this is bad. filter all the items
    const finalGroups = rawGroups.reduce((groupAcc, _group) => {
      const sets = _group.sets.reduce((setAcc, _set) => {
        const sections = _set.sections.reduce((sectionAcc, _section) => {
          const items = _section.items.filter(item => {
            // Exclude the 'Legend of Acrius' exotic quest item
            if (item.hash === 1744115122) {
              return false;
            }

            if (
              !filter[SHOW_PS4_EXCLUSIVES] &&
              consoleExclusives.ps4.includes(item.hash)
            ) {
              return false;
            }

            if (!filter[SHOW_COLLECTED] && item.$obtained) {
              return false;
            }

            if (item.classType === 3) {
              return true;
            }

            if (filter[HUNTER] && item.classType === HUNTER) {
              return true;
            }

            if (filter[TITAN] && item.classType === TITAN) {
              return true;
            }

            if (filter[WARLOCK] && item.classType === WARLOCK) {
              return true;
            }

            return false;
          });

          if (items.length > 0) {
            sectionAcc.push({
              ..._section,
              items
            });
          }

          return sectionAcc;
        }, []);

        if (sections.length > 0) {
          setAcc.push({
            ..._set,
            sections
          });
        }

        return setAcc;
      }, []);

      if (sets.length > 0) {
        groupAcc.push({
          ..._group,
          sets: sets
        });
      }

      return groupAcc;
    }, []);

    return finalGroups;
  };

  fetchCharacters = (props = this.props) => {
    if (!props.isAuthenticated) {
      return;
    }

    destiny.getCurrentProfiles().then(profiles => {
      this.setState({ profiles });

      const { id, type } = ls.getPreviousAccount();

      if (!(id && type)) {
        return this.switchProfile(profiles[0]);
      }

      const prevProfile = profiles.find(profile => {
        return (
          profile.profile.data.userInfo.membershipId === id &&
          profile.profile.data.userInfo.membershipType === type
        );
      });

      this.switchProfile(prevProfile || profiles[0]);
    });
  };

  logout() {
    this.profile = undefined;
    ls.removePreviousAccount();
    ls.removeAuth();
    ls.removeInventory();
    location.reload();
  }

  switchProfile = profile => {
    if (profile && profile.logout) {
      return this.logout();
    }

    const { membershipId, membershipType } = profile.profile.data.userInfo;
    ls.savePreviousAccount(membershipId, membershipType);

    this.profile = profile;
    this.inventory = destiny.collectItemsFromProfile(profile);

    const recentCharacter = sortBy(
      Object.values(profile.characters.data),
      character => {
        return new Date(character.dateLastPlayed).getTime();
      }
    ).reverse()[0];
    this.emblemHash = recentCharacter.emblemHash;

    this.setState({
      profile,
      filter: {
        ...this.state.filter,
        [SHOW_PS4_EXCLUSIVES]: membershipType === PLAYSTATION
      }
    });

    this.dataPromise.then(result => {
      this.processSets(...result);
    });
  };

  toggleFilter = () => {
    this.setState({ displayFilters: !this.state.displayFilters });
  };

  toggleFilterValue = filterValue => {
    const newFilter = {
      ...this.state.filter,
      [filterValue]: !this.state.filter[filterValue]
    };
    const filteredGroups = this.filterGroups(this.rawGroups, newFilter);

    ls.saveFilters(newFilter);

    this.setState({
      groups: filteredGroups,
      filter: newFilter
    });
  };

  copyDebug = () => {
    const { itemComponents, ...debugProfile } = this.profile;
    copy(JSON.stringify(debugProfile));
  };

  render() {
    const {
      loading,
      profile,
      profiles,
      groups,
      emblemBg,
      displayFilters
    } = this.state;

    if (loading) {
      return <Loading>Loading...</Loading>;
    }

    return (
      <div className={styles.root}>
        <Header
          bg={emblemBg}
          profile={profile}
          profiles={profiles}
          onChangeProfile={this.switchProfile}
        />

        {!this.props.isAuthenticated && (
          <LoginUpsell>
            Log in to use your inventory to automatically check off items you've
            obtained
          </LoginUpsell>
        )}

        <div className={styles.poll}>
          <p>
            Hey - I'm looking into how I could recoup (at least some of) the
            costs of running this site and I would love your opionion.{' '}
            <a
              href="https://twitter.com/joshhunt/status/928348993561726977"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch on Twitter
            </a>{' '}
            and tell me what you think!
          </p>

          <a
            className={styles.voteOnTwitter}
            href="https://twitter.com/joshhunt/status/928348993561726977"
            target="_blank"
          >
            Vote on Twitter
          </a>
        </div>

        <div className={styles.subnav}>
          <div className={styles.navsections}>
            {(groups || []).map((group, index) => (
              <a
                className={styles.subnavItem}
                key={index}
                href={`#group_${index}`}
              >
                {group.name}
              </a>
            ))}
          </div>

          <div
            className={cx(
              styles.toggleFilters,
              displayFilters && styles.filtersActive
            )}
            onClick={this.toggleFilter}
          >
            Filters <i className="fa fa-caret-down" aria-hidden="true" />
          </div>

          {displayFilters && (
            <div className={styles.filters}>
              <div className={styles.filterInner}>
                <div className={styles.neg}>
                  {FILTERS.map(([filterId, filterLabel]) => (
                    <label className={styles.filterOpt}>
                      <input
                        type="checkbox"
                        checked={this.state.filter[filterId]}
                        onChange={() => this.toggleFilterValue(filterId)}
                      />{' '}
                      {filterLabel}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {(groups || []).map((group, index) => (
          <div key={index} id={`group_${index}`}>
            <ActivityList title={group.name} activities={group.sets || []} />
          </div>
        ))}

        <div className={styles.debug}>
          <button onClick={this.copyDebug}>Copy debug info</button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default DestinyAuthProvider(Gearsets);
