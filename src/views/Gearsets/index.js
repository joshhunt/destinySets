import React, { Component } from 'react';
import { partition } from 'lodash';

import { getDefinition } from 'app/lib/manifestData';

import Header from 'app/components/Header';
import Loading from 'app/views/Loading';
import ActivityList from 'app/components/ActivityList';
import styles from './styles.styl';

const CLASS_TYPE = {
  0: 'Titan',
  1: 'Hunter',
  2: 'Warlock',
};

export default class AllItems extends Component {
  state = {
    loading: true,
    items: [],
    selectedItems: [],
  };

  componentDidMount() {
    getDefinition('DestinyInventoryItemDefinition').then(this.processItems);
  }

  processItems = itemDefs => {
    const items = Object.values(itemDefs);
    const inventory = window.inventory || [];

    const asActivities = items
      .filter(item => item.gearset)
      .map(gearset => {
        return {
          displayProperties: gearset.displayProperties,
          pgcrImage: null,
          dropListID: gearset.hash,
          drops: gearset.gearset.itemList.map(itemHash => {
            const item = itemDefs[itemHash];

            const owned = inventory.includes(item.hash);

            return {
              itemName: item.displayProperties.name,
              icon: item.displayProperties.icon,
              itemHash: item.hash,
              itemTypeName: item.itemTypeDisplayName,
              dClass: CLASS_TYPE[item.classType] || 'noclass',
              owned,
            };
          }),
          sections: [],
        };
      })
      .sort((setA, setB) => {
        const sortValue = (setB.displayProperties.name || '')
          .localeCompare(setA.displayProperties.name);

        return sortValue;
      });

    const [engrams, gearsets] = partition(asActivities, set =>
      set.displayProperties.name.toLowerCase().includes('engram')
    );

    this.setState({ gearsets, engrams, loading: false });
  };

  render() {
    if (this.state.loading) {
      return <Loading>Loading...</Loading>;
    }

    return (
      <div className={styles.root}>
        <Header onFilterChange={() => {}} legacy={false} />

        <p className={styles.beta}>
          This page is in beta for your curiosity only. It does not yet record
          whether you have the item or not.
        </p>

        <ActivityList
          title="Gear sets"
          activities={this.state.gearsets || []}
        />

        <ActivityList title="Engrams" activities={this.state.engrams || []} />
      </div>
    );
  }
}
