import React, { Component } from 'react';
import { groupBy } from 'lodash';

import { getDefinition } from 'app/lib/manifestData';

import * as destiny from 'app/lib/destiny';
import Header from 'app/components/Header';
import Loading from 'app/views/Loading';
import LoginUpsell from 'app/components/LoginUpsell';
import ItemTooltip from 'app/components/ItemTooltip';
import ActivityList from 'app/components/ActivityList';
import ProfileSwitcher from 'app/components/MembershipSelector';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import styles from './styles.styl';

import newSets from '../sets.json';

const WEAPON = 1;
const ARMOR = 20;

const TITAN = 0;
const HUNTER = 1;
const WARLOCK = 2;

const log = (msg, data) => {
  console.log(`%c${msg}:`, 'font-weight: bold', data);
};

class Gearsets extends Component {
  state = {
    loading: true,
    items: [],
    selectedItems: [],
  };

  componentDidMount() {
    this.dataPromise = getDefinition('DestinyInventoryItemDefinition');

    this.dataPromise.then(data => {
      this.processSets(data);
    });

    if (this.props.isAuthenticated) {
      this.fetchCharacters();
    }
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated) {
      this.fetchCharacters(newProps);
    }
  }

  processSets = itemDefs => {
    const items = Object.values(itemDefs);

    const itemList = hahses => {
      return hahses
        .map(itemHash => {
          const item = itemDefs[itemHash];

          if (!item) {
            console.warn('Unable to find item definition for ' + itemHash);
            return null;
          }

          return {
            $obtained: (this.inventory || []).includes(item.hash),
            ...item,
          };
        })
        .filter(Boolean);
    };

    const rawSets = items
      .filter(item => item.gearset)
      .map(item => {
        return {
          name: item.displayProperties.name,
          description: item.displayProperties.description,
          sections: [
            {
              title: 'Drops',
              items: itemList(item.gearset.itemList),
            },
          ],
        };
      })
      .sort((setA, setB) => {
        return setB.name.localeCompare(setA.name);
      });

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
          $obtained: (this.inventory || []).includes(item.hash),
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

    this.setState({
      groups: [
        ...groups,
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

    this.inventory = destiny.collectItemsFromProfile(profile);

    log('Inventory', this.inventory);

    this.dataPromise.then(data => {
      this.processSets(data);
    });

    this.setState({ accountSelected: true });
  };

  getTooltipContent = (...args) => {
    console.log('getTooltipContent', args);
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
          <LoginUpsell>See the items you've already collected.</LoginUpsell>
        )}

        {/*<div className={styles.subnav}>
          {(groups || [])
            .map(group => (
              <div className={styles.subnavItem}>{group.name}</div>
            ))}
        </div>*/}

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

        {(groups || [])
          .map(group => (
            <ActivityList title={group.name} activities={group.sets || []} />
          ))}
      </div>
    );
  }
}

export default DestinyAuthProvider(Gearsets);
