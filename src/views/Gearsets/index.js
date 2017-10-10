import React, { Component } from 'react';
import { sortBy } from 'lodash';

import { getDefinition } from 'app/lib/manifestData';

import * as destiny from 'app/lib/destiny';
import Header from 'app/components/Header';
import Loading from 'app/views/Loading';
import LoginUpsell from 'app/components/LoginUpsell';
import ActivityList from 'app/components/ActivityList';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import {
  HUNTER,
  TITAN,
  WARLOCK,
} from 'app/views/DataExplorer/definitionSources';

import { fancySearch } from 'app/views/DataExplorer/filterItems';
import sortItemsIntoSections from 'app/views/DataExplorer/sortItemsIntoSections';

import styles from './styles.styl';

import newSets from '../sets.js';

const log = (msg, data) => {
  console.log(`%c${msg}:`, 'font-weight: bold', data);
};

function collectItemsFromKiosks(kiosks, itemDefs, vendorDefs) {
  const hashes = [];

  for (let vendorHash in kiosks) {
    const vendor = vendorDefs[vendorHash];
    const kiosk = kiosks[vendorHash];

    const kioskItems = kiosk.map(kioskEntry => {
      const vendorItem = vendor.itemList.find(
        i => i.vendorItemIndex === kioskEntry.index
      );
      const item = itemDefs[vendorItem.itemHash];

      if (kioskEntry.canAcquire) {
        return item.hash;
      }
    });

    hashes.push(...kioskItems);
  }

  return hashes;
}

class Gearsets extends Component {
  state = {
    loading: true,
    items: [],
    selectedItems: [],
    filter: {
      [TITAN]: true,
      [HUNTER]: true,
      [WARLOCK]: true,
    },
  };

  inventory = [];

  componentDidMount() {
    try {
      this.inventory = JSON.parse(localStorage.getItem('inventory'));
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

    let profileKioskItems;
    let charKioskItems;

    // TODO: clean this up, move to destiny.js?
    if (this.profile) {
      profileKioskItems = collectItemsFromKiosks(
        this.profile.profileKiosks.data.kioskItems,
        itemDefs,
        vendorDefs
      );

      charKioskItems = Object.values(
        this.profile.characterKiosks.data
      ).reduce((acc, charKiosk) => {
        const itemHashes = collectItemsFromKiosks(
          charKiosk.kioskItems,
          itemDefs,
          vendorDefs
        );

        acc.push(...itemHashes);

        return acc;
      }, []);

      log('Profile kiosk items', profileKioskItems);
      log('Character kiosk items', charKioskItems);
    }

    let inventory = [...(this.inventory || [])];
    profileKioskItems && inventory.push(...profileKioskItems);
    charKioskItems && inventory.push(...charKioskItems);

    localStorage.setItem('inventory', JSON.stringify(inventory));

    const itemList = hahses => {
      return hahses
        .map(itemHash => {
          const item = itemDefs[itemHash];

          if (!item) {
            console.warn('Unable to find item definition for ' + itemHash);
            return null;
          }

          return {
            $obtained: inventory.includes(item.hash),
            ...item,
          };
        })
        .filter(Boolean);
    };

    const groups = newSets.map(group => {
      const sets = group.sets.map(set => {
        const preSections = set.fancySearchTerm
          ? sortItemsIntoSections(fancySearch(set.fancySearchTerm, items))
          : set.sections;

        const sections = preSections.map(section => {
          const items = itemList(section.items);

          return {
            ...section,
            items,
          };
        });

        return {
          ...set,
          sections,
        };
      });

      return {
        ...group,
        sets,
      };
    });

    // fuck me, this is bad. filter all the items
    const finalGroups = groups.reduce((groupAcc, _group) => {
      const sets = _group.sets.reduce((setAcc, _set) => {
        const sections = _set.sections.reduce((sectionAcc, _section) => {
          const items = _section.items.filter(item => {
            if (item.classType === 3) {
              return true;
            }

            if (this.state.filter[HUNTER] && item.classType === HUNTER) {
              return true;
            }

            if (this.state.filter[TITAN] && item.classType === TITAN) {
              return true;
            }

            if (this.state.filter[WARLOCK] && item.classType === WARLOCK) {
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

    const emblem = itemDefs[this.emblemHash];
    let emblemBg;
    if (emblem) {
      emblemBg = emblem.secondarySpecial;
    }

    this.setState({
      groups: [
        ...finalGroups,
        // {
        //   name: 'raw',
        //   sets: rawSets,
        // },
      ],
      emblemBg,
      loading: false,
    });
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

  render() {
    const { loading, profile, profiles, groups, emblemBg } = this.state;

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

        {/*
        <div
          style={{
            margin: 50,
            padding: 0,
            background: '#20262d',
            display: 'inline-block',
            borderRadius: 3,
          }}
        >
          {groups && (
            <ItemTooltip item={groups[0].sets[0].sections[0].items[0]} />
          )}
        </div>

        <div
          style={{
            margin: 50,
            padding: 0,
            background: '#20262d',
            display: 'inline-block',
            borderRadius: 3,
          }}
        >
          {groups && (
            <ItemTooltip item={groups[1].sets[0].sections[0].items[0]} />
          )}
        </div>
        */}

        {(groups || []).map((group, index) => (
          <div key={index} id={`group_${index}`}>
            <ActivityList title={group.name} activities={group.sets || []} />
          </div>
        ))}
      </div>
    );
  }
}

export default DestinyAuthProvider(Gearsets);
