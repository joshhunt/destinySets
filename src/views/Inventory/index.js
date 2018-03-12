import React, { Component } from 'react';

import { connect } from 'react-redux';

import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';
import * as destiny from 'app/lib/destiny';
import { getDefinition } from 'app/lib/manifestData';

import {
  setProfile,
  setVendorDefs,
  setItemDefs,
  setObjectiveDefs
} from 'app/store/reducer';

import Section from 'app/components/NewSection';

import { inventorySelector } from './selectors';
import styles from './styles.styl';

const timeout = dur => result =>
  new Promise(resolve => setTimeout(() => resolve(result), dur));

class Inventory extends Component {
  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated) {
      this.fetch(newProps);
    }
  }

  fetch() {
    window.__CACHE_API = true;

    destiny
      .getCurrentProfiles()
      .then(({ profiles }) => this.props.setProfile(profiles[0]));

    getDefinition('DestinyVendorDefinition', 'en').then(
      this.props.setVendorDefs
    );

    getDefinition('reducedCollectableInventoryItems', 'en', false)
      .then(timeout(0))
      .then(this.props.setItemDefs);

    getDefinition('DestinyObjectiveDefinition', 'en').then(
      this.props.setObjectiveDefs
    );
  }

  render() {
    const { itemDefs, objectiveDefs, route: { setData } } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.debug}>
          <div className={itemDefs ? styles.green : styles.red}>
            itemDefs: {itemDefs ? 'Loaded' : 'Not Loaded'}
          </div>

          <div className={objectiveDefs ? styles.green : styles.red}>
            objectiveDefs: {objectiveDefs ? 'Loaded' : 'Not Loaded'}
          </div>
        </div>

        {setData.map(({ sets, name }, index) => (
          <Section key={index} name={name} sets={sets} />
        ))}

        {/*<hr />
        <h1>Profile</h1>
        <h2>Items</h2>
        <div className={styles.itemList}>
          {items &&
            Object.values(items).map((obj, index) => (
              <ItemHash
                key={index}
                hash={obj.itemHash}
                itemDefs={itemDefs}
                small={true}
              />
            ))}
        </div>

        <h2>objectives</h2>
        {objectives &&
          Object.values(objectives).map((objective, index) => (
            <Objective
              key={index}
              objective={objective}
              objectiveDefs={objectiveDefs}
            />
          ))}*/}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  ...inventorySelector(store),
  itemDefs: store.app.itemDefs,
  objectiveDefs: store.app.objectiveDefs
});

const mapDispatchToActions = {
  setProfile,
  setVendorDefs,
  setItemDefs,
  setObjectiveDefs
};

export default DestinyAuthProvider(
  connect(mapStateToProps, mapDispatchToActions)(Inventory)
);
