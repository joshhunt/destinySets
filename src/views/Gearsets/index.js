import React, { Component } from 'react';
import ReactList from 'react-list';
import cx from 'classnames';
import { debounce, partition } from 'lodash';

import * as destiny from 'app/lib/destinyLegacy';

import Item from 'app/components/Item';
import Header from 'app/components/Header';
import Loading from 'app/views/Loading';
import ActivityList from 'app/components/ActivityList';
import styles from './styles.styl';

const CLASS_TYPE = {
  0: 'Titan',
  1: 'Hunter',
  2: 'Warlock',
};

const ITEM_URLS = ['https://destiny.plumbing/2/en/items/All.json'];

export default class AllItems extends Component {
  state = {
    loading: true,
    items: [],
    selectedItems: [],
  };

  componentDidMount() {
    const prom = ITEM_URLS.map(u => destiny.get(u));

    Promise.all(prom).then(data => {
      const allItems = data.reduce((acc, items) => {
        return acc.concat(Object.values(items));
      }, []);

      this.processItems(allItems);
    });
  }

  processItems(_items) {
    const items = _items.reduce((acc, item) => {
      return {
        ...acc,
        [item.hash]: item,
      };
    }, {});

    const inventory = window.inventory || [];
    console.log('sets inventory', inventory);

    const asActivities = _items.filter(item => item.gearset).map(gearset => {
      return {
        displayProperties: gearset.displayProperties,
        pgcrImage: null,
        dropListID: gearset.hash,
        drops: gearset.gearset.itemList.map(itemHash => {
          const item = items[itemHash];

          const owned = inventory.includes(item.hash);

          console.log(
            'is',
            item.hash,
            'in inventory of',
            inventory.length,
            'items?'
          );

          if (owned) {
            console.log(
              `%cOwned: ${item.displayProperties.name}`,
              'font-weight: bold; color: green',
              item
            );
          }

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
    });

    const [engrams, gearsets] = partition(asActivities, set =>
      set.displayProperties.name.toLowerCase().includes('engram')
    );

    console.log('asActivities:', asActivities);

    this.setState({ gearsets, engrams, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loading>Loading...</Loading>;
    }

    return (
      <div className={styles.root}>
        <Header onFilterChange={() => {}} legacy={false} />

        <p className={styles.beta}>
          This page is in preview for your curiosity only. It does not yet
          record whether you have the item or not.
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
