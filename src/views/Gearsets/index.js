import React, { Component } from 'react';
import { groupBy } from 'lodash';

import { getDefinition } from 'app/lib/manifestData';

import * as destiny from 'app/lib/destiny';
import Header from 'app/components/Header';
import Loading from 'app/views/Loading';
import LoginUpsell from 'app/components/LoginUpsell';
import ActivityList from 'app/components/ActivityList';
import ProfileSwitcher from 'app/components/MembershipSelector';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import {
  HUNTER,
  TITAN,
  WARLOCK,
  WEAPON,
  ARMOR,
} from 'app/views/DataExplorer/definitionSources';

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

    // const rawSets = items
    //   .filter(item => item.gearset)
    //   .map(item => {
    //     return {
    //       name: item.displayProperties.name,
    //       description: item.hash + ' - ' + item.displayProperties.description,
    //       sections: [
    //         {
    //           title: 'Drops',
    //           items: itemList(item.gearset.itemList),
    //         },
    //       ],
    //     };
    //   })
    //   .sort((setA, setB) => {
    //     return setB.name.localeCompare(setA.name);
    //   });

    const exotics = items
      .filter(item => {
        return (
          item.inventory.tierTypeName === 'Exotic' &&
          item.itemCategoryHashes.length > 1 &&
          (item.itemCategoryHashes.includes(WEAPON) ||
            item.itemCategoryHashes.includes(ARMOR))
        );
      })
      .map(item => {
        return {
          ...item,
          $obtained: inventory.includes(item.hash),
        };
      });

    const exoticsByType = groupBy(exotics, item => {
      if (item.itemCategoryHashes.includes(WEAPON)) {
        return 'weapon';
      } else if (item.itemCategoryHashes.includes(ARMOR)) {
        return item.classType;
      } else {
        return 'lolidk';
      }
    });

    const exoticSet = {
      name: 'Exotics',
      sections: [
        { title: 'Weapons', items: exoticsByType.weapon },
        { title: 'Hunter armor', items: exoticsByType[HUNTER] },
        { title: 'Titan armor', items: exoticsByType[TITAN] },
        { title: 'Warlock armor', items: exoticsByType[WARLOCK] },
      ],
    };

    const groups = newSets.map(group => {
      const sets = group.sets.map(set => {
        let maxItems = 0;
        const sections = set.sections.map(section => {
          const items = itemList(section.items);
          if (items.length > maxItems) {
            maxItems = items.length;
          }

          return {
            ...section,
            items,
          };
        });

        return {
          ...set,
          maxItems,
          sections,
        };
      });

      return {
        ...group,
        sets,
      };
    });

    // assuming 0th group is the 'featured' on
    groups[0].sets.unshift(exoticSet);

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

    this.setState({
      groups: [
        ...finalGroups,
        // {
        //   name: 'raw',
        //   sets: rawSets,
        // },
      ],
      loading: false,
    });
  };

  fetchCharacters = (props = this.props) => {
    if (!props.isAuthenticated) {
      return;
    }

    destiny.getCurrentProfiles().then(profiles => {
      log('Profiles', profiles);
      this.setState({ accountLoading: false });

      if (profiles.length > 1) {
        this.setState({
          selectProfile: true,
          profiles,
        });
      } else {
        this.switchProfile(profiles[0]);
      }
    });
  };

  switchProfile = profile => {
    log('Active Profile', profile);

    // TODO: don't put profile on here for kisosks
    this.profile = profile;
    this.inventory = destiny.collectItemsFromProfile(profile);

    log('Inventory', this.inventory);

    this.dataPromise.then(result => {
      this.processSets(...result);
    });

    this.setState({
      accountSelected: true,
      profile,
    });
  };

  render() {
    const { loading, selectProfile, profiles, groups } = this.state;

    if (loading) {
      return <Loading>Loading...</Loading>;
    }

    return (
      <div className={styles.root}>
        <Header onFilterChange={() => {}} legacy={false} />

        {selectProfile && (
          <ProfileSwitcher profiles={profiles} onSelect={this.switchProfile} />
        )}

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
