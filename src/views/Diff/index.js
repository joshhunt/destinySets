import React, { Component } from 'react';
import Loading from 'app/views/Loading';

import Item from 'app/components/Item';
import Header from 'app/components/NewHeader';

import styles from './styles.styl';

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

      this.setState({
        lastUpdated: new Date(manifestIndex.lastUpdated),
        loading: false,
        newItems,
        unclassifiedItems
      });
    });
  }

  render() {
    const { loading, newItems, unclassifiedItems, lastUpdated } = this.state;

    if (loading) {
      return <Loading>Loading...</Loading>;
    }

    return (
      <div className={styles.root}>
        <Header />

        <div className={styles.preable}>
          Last Updated {lastUpdated.toLocaleString()}
        </div>

        {!newItems.length && !unclassifiedItems.length ? (
          <p>Nothing of interest changed.</p>
        ) : null}

        {newItems.length ? (
          <div>
            <h2>New items</h2>
            <div className={styles.itemList}>
              {newItems.map((item, index) => (
                <Item className={styles.item} key={index} item={item} />
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
