import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {
  setProfile,
  setVendorDefs,
  setItemDefs,
  setObjectiveDefs,
  setStatDefs,
  toggleFilterKey
} from 'app/store/reducer';

import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';
import * as destiny from 'app/lib/destiny';
import { getDefinition } from 'app/lib/manifestData';
import { objectivesSelector } from 'app/components/ItemSet/selectors';

import Section from 'app/components/NewSection';
import Popper from 'app/components/Popper';
import FilterBar from 'app/components/NewFilterBar';
import ItemTooltip from 'app/components/ItemTooltip';

import { filteredSetDataSelector } from './selectors';
import styles from './styles.styl';

// eslint-disable-next-line
const timeout = dur => result =>
  new Promise(resolve => setTimeout(() => resolve(result), dur));

class Inventory extends Component {
  state = {
    popperItemHash: null,
    popperElement: null
  };

  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated) {
      this.fetch(newProps);
    }
  }

  fetch(props = this.props) {
    window.__CACHE_API = true;

    destiny
      .getCurrentProfiles()
      .then(({ profiles }) => props.setProfile(profiles[0]));

    getDefinition('DestinyVendorDefinition', 'en').then(props.setVendorDefs);

    getDefinition('DestinyStatDefinition', 'en').then(props.setStatDefs);

    // getDefinition('reducedCollectableInventoryItems', 'en', false)
    getDefinition('DestinyInventoryItemDefinition', 'en')
      // .then(timeout(2 * 1000))
      .then(props.setItemDefs);

    getDefinition('DestinyObjectiveDefinition', 'en').then(
      props.setObjectiveDefs
    );
  }

  clearCache = () => {
    Object.keys(window.localStorage).forEach(lsKey => {
      if (lsKey.includes('apiCache|')) {
        window.localStorage.removeItem(lsKey);
      }
    });
    this.fetch(this.props);
  };

  setPopper = (hash, item, inventoryEntry, element) => {
    if (!hash) {
      this.setState({ popper: null });
    } else {
      this.setState({ popper: { hash, item, inventoryEntry, element } });
    }
  };

  render() {
    const {
      itemDefs,
      objectiveDefs,
      filters,
      filteredSetData,
      objectives
    } = this.props;
    const { popper } = this.state;

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
          <Section
            key={index}
            name={name}
            sets={sets}
            setPopper={this.setPopper}
          />
        ))}

        {popper &&
          objectives && (
            <Popper key={popper.hash} element={popper.element}>
              <ItemTooltip
                itemHash={popper.item.hash}
                item={popper.item}
                objectives={objectives}
                objectiveDefs={objectiveDefs}
              />
            </Popper>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    itemDefs: state.app.itemDefs,
    filters: state.app.filters,
    objectiveDefs: state.app.objectiveDefs,
    // TODO: this uses props, so we need to 'make' a selector like in ItemSet
    filteredSetData: filteredSetDataSelector(state, ownProps),
    objectives: objectivesSelector(state)
  };
};

const mapDispatchToActions = {
  setProfile,
  setVendorDefs,
  setItemDefs,
  setObjectiveDefs,
  setStatDefs,
  toggleFilterKey
};

export default DestinyAuthProvider(
  connect(mapStateToProps, mapDispatchToActions)(Inventory)
);
