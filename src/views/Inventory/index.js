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

import Section from 'app/components/NewSection';
import Popper from 'app/components/Popper';
import FilterBar from 'app/components/NewFilterBar';
import ItemTooltip from 'app/components/ItemTooltip';
import ItemModal from 'app/components/ItemModal';

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
    window.__CACHE_API = false;

    destiny.getCurrentProfilesWithCache((err, { profiles }) => {
      return props.setProfile(profiles[0]);
    });

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

  setPopper = (itemHash, element) => {
    itemHash
      ? this.setState({ itemTooltip: { itemHash, element } })
      : this.setState({ itemTooltip: null });
  };

  setModal = itemHash => {
    this.setState({ itemModal: itemHash });
  };

  render() {
    const { itemDefs, objectiveDefs, filters, filteredSetData } = this.props;
    const { itemTooltip, itemModal } = this.state;

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
            setModal={this.setModal}
          />
        ))}

        {itemTooltip && (
          <Popper key={itemTooltip.hash} element={itemTooltip.element}>
            <ItemTooltip itemHash={itemTooltip.itemHash} />
          </Popper>
        )}

        <ItemModal
          itemHash={itemModal}
          isOpen={!!itemModal}
          onRequestClose={() => this.setModal(null)}
        />
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
    filteredSetData: filteredSetDataSelector(state, ownProps)
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
