import React, { Component } from 'react';
import ReactList from 'react-list';
import cx from 'classnames';
import { debounce, throttle, remove } from 'lodash';

import * as destiny from 'app/lib/destiny';

import Item from 'app/components/Item';
import Loading from 'app/views/Loading';
import styles from './styles.styl';

const ARMOUR_DEFS_URL = 'https://destiny.plumbing/en/items/Armor.json';
const WEAPON_DEFS_URL = 'https://destiny.plumbing/en/items/Weapon.json';

export default class AllItems extends Component {
  state = {
    loading: true,
    items: [],
    selectedItems: [],
  }

  constructor(props) {
    super(props);
    this.updateFilter = debounce(this.updateFilter.bind(this), 200);
  }

  componentDidMount() {
    Promise.all([
      destiny.get(ARMOUR_DEFS_URL),
      destiny.get(WEAPON_DEFS_URL),
    ]).then(([ armour, weapons ]) => {
      this.allItems = Object.values({
        ...armour,
        ...weapons,
      });

      this.setState({
        loading: false,
        items: this.allItems
      });
    });
  }

  onItemClick(item, ev) {
    ev.preventDefault();

    const selectedItems = item.selected
      ? this.state.selectedItems.filter(i => i.itemHash !== item.itemHash)
      : this.state.selectedItems.concat([item]);

    item.selected = !item.selected;

    this.setState({ selectedItems }, () => {
      this.selectionListRef.scrollTop = this.selectionListRef.scrollHeight;
    });
  }

  eventListeners = {};

  onFilterChange = (ev) => {
    this.updateFilter(ev.target.value);
  };

  updateFilter(text) {
    console.log(text);

    this.setState({
      items: this.allItems.filter(item => item.itemName.toLowerCase().includes(text.toLowerCase())),
    });
  }

  copy = () => {
    var copyTextarea = document.querySelector(`.${styles.copytextarea}`);
    copyTextarea.value = JSON.stringify(this.state.selectedItems, null, 2);

    copyTextarea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  }

  renderItem = (index, key) => {
    const item = this.state.items[index];

    let onClick;

    if (this.eventListeners[item.itemHash]) {
      onClick = this.eventListeners[item.itemHash];
    } else {
      onClick = this.onItemClick.bind(this, item);
      this.eventListeners[item.itemHash] = onClick;
    }

    return (
      <div className={cx(styles.item, item.selected && styles.selected)} key={key} onClick={onClick}>
        <Item item={item} dev={true} />
      </div>
    )
  };

  render() {
    if (this.state.loading) {
      return <Loading>Loading...</Loading>
    }

    return (
      <div className={styles.root}>
        <textarea className={styles.copytextarea} />

        <div className={styles.top}>
          <h1 className={styles.heading}>All Items</h1>

          <div className={styles.searchBox}>
            Search
            <input type="text" className={styles.filter} onChange={this.onFilterChange} />
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.itemList}>
            <ReactList
              threshold={500}
              itemRenderer={this.renderItem}
              length={this.state.items.length}
              type='uniform'
            />
          </div>

          <div className={styles.selectionPanel}>
            <div className={styles.selectionItems} ref={d => this.selectionListRef = d}>
              {this.state.selectedItems.map(item => (
                <div key={item.itemHash} className={styles.item}><Item item={item} dev={true} /></div>
              ))}
            </div>

            <div className={styles.selectionFooter}>
              {this.state.selectedItems.length > 0 && <button className={styles.copyButton} onClick={this.copy}>Copy to clipboard</button>}
            </div>

          </div>
        </div>
      </div>
    );
  }
}
