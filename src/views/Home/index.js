/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';
import cx from 'classnames';

import Loading from 'app/views/Loading';
import * as destiny from 'app/lib/destiny';

import styles from './styles.styl';

// const inventoryDefsUrl = require('!file-loader!../../../data/raw/DestinyInventoryItemDefinition.json');
// const setsUrl = require('!file-loader!../../../setData.json');

const ITEM_TYPE_SORT_VALUE = {
  "Helmet": 1,
  "Gauntlets": 2,
  "Chest Armor": 3,
  "Leg Armor": 4,

  "Hunter Cloak": 5,
  "Warlock Bond": 5,
  "Titan Mark": 5,

  "Ghost Shell": 6,

  "Hunter Artifact": 7,
  "Warlock Artifact": 7,
  "Titan Artifact": 7,
  "Artifact": 7,

  "Mask": 8,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterclass0: JSON.parse(localStorage.getItem('filterclass0') || 'true'),
      filterclass1: JSON.parse(localStorage.getItem('filterclass1') || 'true'),
      filterclass2: JSON.parse(localStorage.getItem('filterclass2') || 'true'),
    };
  }

  componentDidMount() {
    const promise = [
      destiny.get(inventoryDefsUrl),
      destiny.get(setsUrl),
      destiny.getAllInventoryItems()
    ]

    Promise.all(promise)
      .then(([itemDefs, sets, inventoryItems]) => {

        sets.forEach((set) => {
          set.groups.forEach((group) => {
            group.items = group.items.map(({ hash, source }) => {
              const item = itemDefs[hash] || {};
              const subType = item.itemSubType || ITEM_TYPE_SORT_VALUE[item.itemTypeName] || 0
              const sortKey = (item.classType * 100) + (subType);

              return {
                ...item,
                sortKey,
                source,
                owned: inventoryItems.includes(hash),
              };
            }).sort((itemA, itemB) => itemA.sortKey - itemB.sortKey);
          });
        });

        console.log(sets);

        this.setState({ sets });
      });
  }

  onFilterChange = ({ target }) => {
    const key = 'filter' + target.name;
    localStorage.setItem(key, target.checked);

    this.setState({
      [key]: target.checked,
    })
  }

  render() {
    if (!this.state.sets) {
      return <Loading>Loading items...</Loading>
    }

    const { sets, filterclass0, filterclass1, filterclass2 } = this.state;
    const filterClasses = {
      [styles.filterclass0]: filterclass0,
      [styles.filterclass1]: filterclass1,
      [styles.filterclass2]: filterclass2
    };

    return (
      <div className={styles.root}>
        <h1 className={styles.pageTitle}>Destiny Sets</h1>

        <div>
          <input
            type="checkbox"
            className='class-check-0'
            name="class0"
            id="ClassCheck0"
            checked={filterclass0}
            onChange={this.onFilterChange}
          />
          <label htmlFor="ClassCheck0">Titan</label>

          <input
            type="checkbox"
            className='class-check-1'
            name="class1"
            id="ClassCheck1"
            checked={filterclass1}
            onChange={this.onFilterChange}
          />
          <label htmlFor="ClassCheck1">Hunter</label>

          <input
            type="checkbox"
            className='class-check-2'
            name="class2"
            id="ClassCheck2"
            checked={filterclass2}
            onChange={this.onFilterChange}
          />
          <label htmlFor="ClassCheck2">Warlock</label>

          <br />
          <br />
        </div>

        <div className={cx(styles.sets, filterClasses)}>
          {sets.map(( set ) => (
            <div className={styles.set} key={set.name}>
              <h2 className={styles.sectionTitle}>{set.name}</h2>

              <div className={styles.groups}>
                {set.groups.map(group => (
                  <div className={styles.group} key={group.name}>
                    <h3 className={styles.groupTitle}>{group.name}</h3>
                    <div className={styles.items}>
                      {group.items.map(item => (
                        <div className={cx(styles.item, styles['targetfilterclass' + item.classType], {[styles.owned]: item.owned})} key={item.itemHash}>
                          <div className={styles.media}>
                            <img className={styles.itemImage} role="presentation" src={'https://bungie.net' + item.icon} />
                          </div>

                          <div className={styles.content}>
                            <div className={styles.itemTitle}>{item.itemName}</div>
                            <div className={styles.itemSubtitle}>{item.source}</div>
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    );
  }
}

export default App;
