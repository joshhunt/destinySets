import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {
  setBulkDefinitions,
  definitionsStatus,
  definitionsError
} from 'app/store/definitions';

import {
  setFilterItem,
  removeTrackedItem,
  setBulkHiddenItemSet,
  setSearchValue
} from 'app/store/reducer';
import { fetchProfile } from 'app/store/profile';

import * as ls from 'app/lib/ls';

import Footer from 'app/components/Footer';
import Section from 'app/components/Section';
import Popper from 'app/components/Popper';
import ItemTooltip from 'app/components/ItemTooltip';
import ItemModal from 'app/components/ItemModal';
import SectionList from 'app/components/SectionList';

import { filteredSetDataSelector } from './selectors';
import styles from './styles.styl';

const FETCH_INTERVAL = 30 * 1000;

class Inventory extends Component {
  state = {
    popperItemHash: null,
    popperElement: null,
    unexpectedError: false
  };

  componentDidUpdate(oldProps) {
    const { filters, trackedItems } = this.props;

    if (filters !== oldProps.filters) {
      ls.saveFilters(filters);
    }

    if (trackedItems !== oldProps.trackedItems) {
      this.potentiallyScheduleFetchProfile(this.props);
    }
  }

  potentiallyScheduleFetchProfile = (props = this.props) => {
    if (this.intervalId) {
      return;
    }

    if (props.route.refreshOnInterval || props.trackedItems.length > 0) {
      this.intervalId = window.setInterval(() => {
        console.log('calling props.fetchProfile()');
        props.fetchProfile();
      }, FETCH_INTERVAL);
    }
  };

  setPopper = (itemHash, element) =>
    this.setState({ itemTooltip: itemHash ? { itemHash, element } : null });

  setItemModal = itemHash => this.setState({ itemModal: itemHash });
  removeTrackedItem = item => this.props.removeTrackedItem(item.hash);

  setFilterItem = (...args) => {
    ls.clearTempFilterItemWhitelist();
    this.props.setFilterItem(...args);
  };

  unhideAllSets = () => {
    ls.saveBulkHiddenItemSets({});
    this.props.setBulkHiddenItemSet({});
  };

  onSearchChange = ev => {
    this.props.setSearchValue(ev.target.value);
  };

  render() {
    const {
      filters,
      filteredSetData,
      trackedItems,
      route,
      searchValue
    } = this.props;
    const { itemTooltip, itemModal } = this.state;
    const noUi = (filteredSetData[0] || {}).noUi;

    const numberOfHiddenSets = Object.values(this.props.hiddenSets).reduce(
      (acc, value) => {
        return value ? acc + 1 : acc;
      },
      0
    );

    return (
      <div className={styles.root}>
        {!noUi && (
          <SectionList
            setData={filteredSetData}
            filters={filters}
            setFilterItem={this.setFilterItem}
            searchValue={searchValue}
            onSearchChange={this.onSearchChange}
          />
        )}

        {route.isCollections && (
          <div className={styles.promo}>
            <p>
              This was an experimental preview of the items that will be marked
              off in Collections when Forsaken dropped, and may be retired soon
              by Bungie in an upcomming update.
            </p>
            <p>
              Official Collections support is now built into DestinySets.com.
            </p>
          </div>
        )}

        {filteredSetData.map(({ sets, noUi, slug, name }, index) => (
          <Section
            key={index}
            name={name}
            noUi={noUi}
            sets={sets}
            slug={slug}
            setPopper={this.setPopper}
            setModal={this.setItemModal}
            extendedItems={searchValue && searchValue.length > 2}
          />
        ))}

        {numberOfHiddenSets > 0 && (
          <p className={styles.hiddenSets}>
            {numberOfHiddenSets} sets hidden.{' '}
            <button
              className={styles.unhideSetsButton}
              onClick={this.unhideAllSets}
            >
              Unhide all
            </button>
          </p>
        )}

        <Footer />

        {itemTooltip && (
          <Popper key={itemTooltip.hash} element={itemTooltip.element}>
            <ItemTooltip itemHash={itemTooltip.itemHash} />
          </Popper>
        )}

        {trackedItems.length > 0 && (
          <div className={styles.trackedItems}>
            {trackedItems.map(hash => (
              <div
                key={hash}
                className={styles.trackedItem}
                data-global-hack-tracked-item
              >
                <ItemTooltip
                  itemHash={hash}
                  small={true}
                  dismiss={this.removeTrackedItem}
                />
              </div>
            ))}
          </div>
        )}

        <ItemModal
          itemHash={itemModal}
          isOpen={!!itemModal}
          onRequestClose={() => this.setItemModal(null)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    hiddenSets: state.app.hiddenSets,
    filters: state.app.filters,
    trackedItems: state.app.trackedItems,
    vendors: state.profile.profile && state.profile.profile.$vendors,
    filteredSetData: filteredSetDataSelector(state, ownProps),
    searchValue: state.app.searchValue
  };
};

const mapDispatchToActions = {
  fetchProfile,
  setFilterItem,
  removeTrackedItem,
  setBulkHiddenItemSet,
  setBulkDefinitions,
  definitionsStatus,
  definitionsError,
  setSearchValue
};

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(Inventory);
