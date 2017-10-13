import React, { Component } from 'react';
import { sortBy, cloneDeep } from 'lodash';
import cx from 'classnames';
import copy from 'copy-text-to-clipboard';

import { getDefinition } from 'app/lib/manifestData';

import * as destiny from 'app/lib/destiny';
import Header from 'app/components/Header';
import Loading from 'app/views/Loading';
import LoginUpsell from 'app/components/LoginUpsell';
import ActivityList from 'app/components/ActivityList';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import { mapItems, logItems } from './items';

import * as telemetry from 'app/lib/telemetry';

import {
  HUNTER,
  TITAN,
  WARLOCK,
} from 'app/views/DataExplorer/definitionSources';

import { fancySearch } from 'app/views/DataExplorer/filterItems';
import sortItemsIntoSections from 'app/views/DataExplorer/sortItemsIntoSections';

import styles from './styles.styl';

import newSets from '../sets.js';
import consoleExclusives from '../consoleExclusives.js';

const HIDE_COLLECTED = -100;
const HIDE_PS4_EXCLUSIVES = -101;

const log = (msg, data) => {
  console.log(`%c${msg}:`, 'font-weight: bold', data);
};

function merge(base, extra) {
  return {
    ...base,
    ...extra,
  };
}

const defaultFilter = {
  [TITAN]: true,
  [HUNTER]: true,
  [WARLOCK]: true,
  [HIDE_COLLECTED]: false,
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
    };

    try {
      this.state.filter =
        JSON.parse(localStorage.getItem('filters')) || defaultFilter;
    } catch (e) {
      console.log(e);
      this.state.filter = defaultFilter;
    }
  }

  componentDidMount() {
    try {
      this.inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    } catch (e) {}

    const itemDefPromise = getDefinition('DestinyInventoryItemDefinition');
    const vendorDefPromise = getDefinition('DestinyVendorDefinition');

    this.dataPromise = Promise.all([itemDefPromise, vendorDefPromise]);

    this.dataPromise.then(result => {
      this.processSets(...result);
    });
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated) {
      this.fetchCharacters(newProps);
    }
  }

  processSets = (itemDefs, vendorDefs) => {
    const items = Object.values(itemDefs);

    const kioskItems = this.profile
      ? destiny.collectItemsFromKiosks(this.profile, itemDefs, vendorDefs)
      : [];

    const inventory = [...this.inventory, ...kioskItems];

    // this.profile && itemDefs && logItems(this.profile, itemDefs);

    this.profile && telemetry.saveInventory(this.profile, inventory);

    localStorage.setItem('inventory', JSON.stringify(inventory));

    this.rawGroups = newSets.map(group => {
      const sets = group.sets.map(set => {
        const preSections = set.fancySearchTerm
          ? sortItemsIntoSections(fancySearch(set.fancySearchTerm, items))
          : set.sections;

        const sections = preSections.map(section => {
          const items = mapItems(section.items, itemDefs, inventory);

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
      groups: filteredGroups,
    });
  };

  filterGroups = (rawGroups, filter = this.state.filter) => {
    // fuck me, this is bad. filter all the items
    const finalGroups = rawGroups.reduce((groupAcc, _group) => {
      const sets = _group.sets.reduce((setAcc, _set) => {
        const sections = _set.sections.reduce((sectionAcc, _section) => {
          const items = _section.items.filter(item => {
            // if (
            //   filter[HIDE_PS4_EXCLUSIVES] &&
            //   consoleExclusives.ps4.includes(item.hash)
            // ) {
            //   return false;
            // }

            if (filter[HIDE_COLLECTED] && item.$obtained) {
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
              items,
            });
          }

          return sectionAcc;
        }, []);

        if (sections.length > 0) {
          setAcc.push({
            ..._set,
            sections,
          });
        }

        return setAcc;
      }, []);

      if (sets.length > 0) {
        groupAcc.push({
          ..._group,
          sets: sets,
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
      log('Profiles', profiles);
      this.setState({ profiles, accountLoading: false });
      window.profiles = profiles;

      const lsValue = localStorage.getItem('selectedAccount') || '';
      const [membershipId, membershipType] = lsValue.split('|');

      if (membershipId && membershipType) {
        const prevProfile = profiles.find(profile => {
          return (
            profile.profile.data.userInfo.membershipId.toString() ===
              membershipId &&
            profile.profile.data.userInfo.membershipType.toString() ===
              membershipType
          );
        });

        this.switchProfile(prevProfile);
      } else {
        this.switchProfile(profiles[0]);
      }
    });
  };

  switchProfile = profile => {
    log('Active Profile', profile);

    const token = `${profile.profile.data.userInfo.membershipId}|${profile
      .profile.data.userInfo.membershipType}`;

    localStorage.setItem('selectedAccount', token);

    // TODO: don't put profile on here for kisosks
    this.profile = profile;
    this.inventory = destiny.collectItemsFromProfile(profile);

    log('Inventory', this.inventory);

    this.dataPromise.then(result => {
      this.processSets(...result);
    });

    const recentCharacter = sortBy(
      Object.values(profile.characters.data),
      character => {
        return new Date(character.dateLastPlayed).getTime();
      }
    ).reverse()[0];
    this.emblemHash = recentCharacter.emblemHash;

    this.setState({
      accountSelected: true,
      profile,
    });
  };

  toggleFilter = () => {
    this.setState({ displayFilters: !this.state.displayFilters });
  };

  toggleFilterValue = filterValue => {
    const newFilter = {
      ...this.state.filter,
      [filterValue]: !this.state.filter[filterValue],
    };
    const filteredGroups = this.filterGroups(this.rawGroups, newFilter);

    localStorage.setItem('filters', JSON.stringify(newFilter));

    this.setState({
      groups: filteredGroups,
      filter: newFilter,
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
      displayFilters,
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
                  <label className={styles.filterOpt}>
                    <input
                      type="checkbox"
                      checked={this.state.filter[HUNTER]}
                      onChange={() => this.toggleFilterValue(HUNTER)}
                    />{' '}
                    Hunter
                  </label>

                  <label className={styles.filterOpt}>
                    <input
                      type="checkbox"
                      checked={this.state.filter[TITAN]}
                      onChange={() => this.toggleFilterValue(TITAN)}
                    />{' '}
                    Titan
                  </label>

                  <label className={styles.filterOpt}>
                    <input
                      type="checkbox"
                      checked={this.state.filter[WARLOCK]}
                      onChange={() => this.toggleFilterValue(WARLOCK)}
                    />{' '}
                    Warlock
                  </label>

                  <label className={styles.filterOpt}>
                    <input
                      type="checkbox"
                      checked={this.state.filter[HIDE_COLLECTED]}
                      onChange={() => this.toggleFilterValue(HIDE_COLLECTED)}
                    />{' '}
                    Hide collected
                  </label>
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
      </div>
    );
  }
}

export default DestinyAuthProvider(Gearsets);
