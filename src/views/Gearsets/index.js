import React, { Component } from 'react';
import { partition, groupBy } from 'lodash';

import { getDefinition } from 'app/lib/manifestData';

import * as destiny from 'app/lib/destiny';
import Header from 'app/components/Header';
import Loading from 'app/views/Loading';
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

const CLASS_TYPE = {
  [TITAN]: 'Titan',
  [HUNTER]: 'Hunter',
  [WARLOCK]: 'Warlock',
};

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
        const sections = set.sections.map(section => {
          const items = section.items
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

    this.setState({
      groups: [
        {
          name: 'Exotics',
          sets: [exoticSet],
        },
        ...groups,
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

        {/*<div className={styles.subnav}>
          {(groups || [])
            .map(group => (
              <div className={styles.subnavItem}>{group.name}</div>
            ))}
        </div>*/}

        {(groups || [])
          .map(group => (
            <ActivityList title={group.name} activities={group.sets || []} />
          ))}
      </div>
    );
  }
}

export default DestinyAuthProvider(Gearsets);
