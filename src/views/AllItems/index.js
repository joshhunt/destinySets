import React, { Component } from 'react';
import ReactList from 'react-list';

import * as destiny from 'app/lib/destiny';

import Item from 'app/components/Item';
import styles from './styles.styl';

const ARMOUR_DEFS_URL = 'https://destiny.plumbing/en/items/Armor.json';
const WEAPON_DEFS_URL = 'https://destiny.plumbing/en/items/Weapon.json';

export default class AllItems extends Component {
  state = {
    items: [],
  }

  componentDidMount() {
    Promise.all([
      destiny.get(ARMOUR_DEFS_URL),
      destiny.get(WEAPON_DEFS_URL),
    ]).then(([ armour, weapons ]) => {
      this.setState({
        items: Object.values({
          ...armour,
          ...weapons,
        })
      });
    });
  }

  renderItem = (index, key) => {
    const item = this.state.items[index];

    return (
      <div className={styles.item} key={key}>
        <Item item={item} dev={true} />
      </div>
    )
  }

  render() {
    if (this.state.items.length < 1) {
      return <h1>Loading</h1>
    }

    return (
      <div>
        <h1>All Items</h1>
        <div className={styles.list} style={{maxHeight: '90vh', overflow: 'auto'}}>
          <ReactList
            threshold={500}
            itemRenderer={this.renderItem}
            length={this.state.items.length}
            type='uniform'
          />
        </div>
      </div>
    );
  }
}
