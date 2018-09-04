import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import {
  setBulkDefinitions,
  definitionsStatus,
  definitionsError
} from 'app/store/definitions';
import { trackError } from 'app/lib/telemetry';
import { REQUIRED_DEFINITIONS } from 'app/store/preloadStore';
import { fasterGetDefinitions } from 'app/lib/definitions';

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

  componentDidMount() {
    this.potentiallyScheduleFetchProfile();
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
    this.intervalId = null;
  }

  componentDidUpdate(oldProps) {
    const { filters, language, trackedItems } = this.props;

    if (filters !== oldProps.filters) {
      ls.saveFilters(filters);
    }

    if (language !== oldProps.language) {
      this.fetchDefinitions(language);
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
        props.fetchProfile();
      }, FETCH_INTERVAL);
    }
  };

  fetchDefinitions({ code: lang }) {
    fasterGetDefinitions(
      lang,
      REQUIRED_DEFINITIONS,
      data => {
        this.props.definitionsStatus(data);
      },
      (err, data) => {
        if (err) {
          trackError(err);
          this.props.definitionsError(err);
          return;
        }

        if (data && data.definitions) {
          this.props.definitionsStatus({ status: null });
          this.props.setBulkDefinitions(data.definitions);
        }
      }
    );
  }

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

        {route.showCollectionsPromo && (
          <div className={styles.promo}>
            <p>
              Check out the experimental Collections page for a preview of the
              items have been marked off for the upcoming Collections in
              Forsaken
            </p>

            <p>
              <Link className={styles.button} to="/collections">
                Visit Collections
              </Link>
            </p>
          </div>
        )}

        {route.isCollections && (
          <div className={styles.promo}>
            <p>
              This is an experimental preview of the items that will be marked
              off in Collections when Forsaken drops. Some items, like S3
              Faction Rally, Iron Banner, and Solstice of Heroes gear may not
              appear in the list or as collected, but they will be counted when
              Forsaken drops. For more info,{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Bungie-net/api/issues/559#issuecomment-407541681"
              >
                see this thread
              </a>.
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
    language: state.app.language,
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

export default connect(mapStateToProps, mapDispatchToActions)(Inventory);
