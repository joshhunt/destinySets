import React, { Component } from 'react';
import Loading from 'app/views/Loading';

import Item from 'app/components/Item';
import Header from 'app/components/Header';

import fancySearch from 'app/lib/fancySearch';

import styles from './styles.styl';

const type = (label, items) => ({ label, items });

export default class Diff extends Component {
  state = {
    loading: true,
    newItems: [],
    unclassifiedItems: []
  };

  componentDidMount() {
    const p = Promise.all([
      fetch(
        'https://destiny.plumbing/en/diff/DestinyInventoryItemDefinition/friendly.json'
      ).then(res => res.json()),

      fetch(
        'https://destiny.plumbing/en/raw/DestinyInventoryItemDefinition.json'
      ).then(res => res.json()),

      fetch('https://destiny.plumbing').then(res => res.json())
    ]);

    p.then(([diff, itemDefs, manifestIndex]) => {
      const newItems = diff.new.map(hash => itemDefs[hash]);
      const unclassifiedItems = diff.unclassified.map(hash => itemDefs[hash]);

      this.newItems = newItems;
      this.setState({
        lastUpdated: new Date(manifestIndex.lastUpdated),
        loading: false,
        newItems,
        unclassifiedItems
      });
    });
  }

  doByType = () => {
    const { newItems } = this;

    if (this.state.newItems.length) {
      this.setState({
        newItems: [],
        newItemsByType: [
          type('Weapons', fancySearch('is:weapon', { item: newItems })),
          type('Armor', fancySearch('is:armor', { item: newItems })),
          type('Ornaments', fancySearch('is:ornament', { item: newItems }))
        ]
      });
    } else {
      this.setState({
        newItemsByType: null,
        newItems
      });
    }
  };

  render() {
    const {
      loading,
      newItems,
      unclassifiedItems,
      lastUpdated,
      newItemsByType
    } = this.state;

    if (loading) {
      return <Loading>Loading...</Loading>;
    }

    return (
      <div className={styles.root}>
        <Header />

        <div className={styles.preable}>
          Last Updated {lastUpdated.toLocaleString()}
        </div>

        <button onClick={this.doByType}>Sort by type</button>

        {!newItems.length && !unclassifiedItems.length && !newItemsByType ? (
          <p>Nothing of interest changed.</p>
        ) : null}

        {newItemsByType &&
          newItemsByType.map((foo, index) => (
            <div key={index}>
              <h2>{foo.label}</h2>
              {foo.items.map((item, index) => (
                <Item
                  className={styles.item}
                  key={index}
                  item={item}
                  linkToData
                />
              ))}
            </div>
          ))}

        {newItems.length ? (
          <div>
            <h2>New items</h2>
            <div className={styles.itemList}>
              {newItems.map((item, index) => (
                <Item
                  className={styles.item}
                  key={index}
                  item={item}
                  linkToData
                />
              ))}
            </div>
          </div>
        ) : null}

        {unclassifiedItems.length ? (
          <div>
            <h2>Unclassified</h2>
            <div className={styles.itemList}>
              {unclassifiedItems.map((item, index) => (
                <Item className={styles.item} key={index} item={item} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
