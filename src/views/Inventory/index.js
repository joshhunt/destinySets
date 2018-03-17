import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import {
  setProfile,
  setVendorDefs,
  setItemDefs,
  setObjectiveDefs,
  toggleFilterKey
} from 'app/store/reducer';

import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';
import * as destiny from 'app/lib/destiny';
import { getDefinition } from 'app/lib/manifestData';

import Section from 'app/components/NewSection';
import FilterBar from 'app/components/NewFilterBar';

import { filteredSetDataSelector } from './selectors';
import styles from './styles.styl';

// eslint-disable-next-line
const timeout = dur => result =>
  new Promise(resolve => setTimeout(() => resolve(result), dur));

class Inventory extends Component {
  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated) {
      this.fetch(newProps);
    }
  }

  fetch(props = this.props, useCache = true) {
    window.__CACHE_API = useCache;

    destiny
      .getCurrentProfiles()
      .then(({ profiles }) => props.setProfile(profiles[0]));

    getDefinition('DestinyVendorDefinition', 'en').then(props.setVendorDefs);

    getDefinition('reducedCollectableInventoryItems', 'en', false)
      // .then(timeout(2 * 1000))
      .then(props.setItemDefs);

    getDefinition('DestinyObjectiveDefinition', 'en').then(
      props.setObjectiveDefs
    );
  }

  clearCache = () => {
    this.fetch(this.props, false);
  };

  render() {
    const { itemDefs, objectiveDefs, filters, filteredSetData } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.nav}>
          <Link className={styles.nav} to="/new/">
            Base
          </Link>
          <Link className={styles.nav} to="/new/curse-of-osiris">
            Season 2
          </Link>
          <Link className={styles.nav} to="/new/all-items">
            All Items
          </Link>
        </div>

        <div className={styles.debug} onClick={this.clearCache}>
          <div className={itemDefs ? styles.green : styles.red}>
            itemDefs: {itemDefs ? 'Loaded' : 'Not Loaded'}
          </div>

          <div className={objectiveDefs ? styles.green : styles.red}>
            objectiveDefs: {objectiveDefs ? 'Loaded' : 'Not Loaded'}
          </div>
        </div>

        <FilterBar
          filters={filters}
          toggleFilter={this.props.toggleFilterKey}
        />

        {filteredSetData.map(({ sets, name }, index) => (
          <Section key={index} name={name} sets={sets} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    itemDefs: state.app.itemDefs,
    filters: state.app.filters,
    objectiveDefs: state.app.objectiveDefs,
    filteredSetData: filteredSetDataSelector(state, ownProps)
  };
};

const mapDispatchToActions = {
  setProfile,
  setVendorDefs,
  setItemDefs,
  setObjectiveDefs,
  toggleFilterKey
};

export default DestinyAuthProvider(
  connect(mapStateToProps, mapDispatchToActions)(Inventory)
);
