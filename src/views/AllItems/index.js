import React, { Component } from 'react';

import * as destiny from 'app/lib/destiny';

import Item from 'app/components/Item';
import styles from './styles.styl';

const ARMOUR_DEFS_URL = 'https://destiny.plumbing/new/en/Armor.json';
const WEAPON_DEFS_URL = 'https://destiny.plumbing/new/en/Weapon.json';

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
        items: {
          ...armour,
          ...weapons,
        }
      });
    });
  }

  render() {
    return (
      <div>
        <h1>All Items</h1>
        <div className={styles.list}>
          {Object.values(this.state.items).map(item => (
            <div className={styles.item} key={item.itemHash}>
              <Item item={item} dev={true} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
