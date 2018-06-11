import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  setProfiles,
  switchProfile,
  setCloudInventory,
  setLanguage,
  setFilterItem,
  setXurData,
  removeTrackedItem,
  setGoogleAuth
} from 'app/store/reducer';

import {
  setVendorDefs,
  setItemDefs,
  setObjectiveDefs,
  setStatDefs
} from 'app/store/definitions';

import {
  inventorySelector,
  xurHasNewItemsSelector,
  xurItemsSelector
} from 'app/store/selectors';

import * as ls from 'app/lib/ls';
import * as destiny from 'app/lib/destiny';
import * as cloudStorage from 'app/lib/cloudStorage';
import { getDefinition } from 'app/lib/manifestData';
import { getDebugProfile } from 'app/lib/telemetry';

import Footer from 'app/components/Footer';
import Section from 'app/components/Section';
import Popper from 'app/components/Popper';
import ItemTooltip from 'app/components/ItemTooltip';
import ItemModal from 'app/components/ItemModal';
import XurModal from 'app/components/XurModal';
import SectionList from 'app/components/SectionList';

import { filteredSetDataSelector } from './selectors';
import styles from './styles.styl';

const log = require('app/lib/log')('<Inventory />');

const FETCH_INTERVAL = 30 * 1000;

// eslint-disable-next-line
const timeout = dur => result =>
  new Promise(resolve => setTimeout(() => resolve(result), dur));

class Inventory extends Component {
  state = {
    popperItemHash: null,
    popperElement: null,
    unexpectedError: false
  };

  componentDidMount() {
    this.fetchDefinitions(this.props.language);
    this.potentiallyScheduleFetchProfile();
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
    this.intervalId = null;
  }

  componentWillReceiveProps(newProps) {
    if (this.props.filters !== newProps.filters) {
      ls.saveFilters(newProps.filters);
    }

    if (this.props.language !== newProps.language) {
      this.fetchDefinitions(newProps.language);
    }

    if (this.props.trackedItems !== newProps.trackedItems) {
      this.potentiallyScheduleFetchProfile(newProps);
    }

    const inventoryHasChanged =
      this.props.isCached !== newProps.isCached ||
      this.props.haveCloudInventory !== newProps.haveCloudInventory;

    if (inventoryHasChanged) {
      log('Inventory has changed, in some way!', newProps);
    }

    if (
      inventoryHasChanged &&
      !newProps.isCached &&
      newProps.haveCloudInventory &&
      newProps.inventory
    ) {
      log(
        'Have final inventory, apparently. Saving new cloudInventory',
        newProps
      );
      cloudStorage.setInventory(
        {
          inventory: newProps.inventory,
          manualInventory: newProps.manualInventory
        },
        newProps.profile
      );
    } else if (
      this.props.manualInventory !== newProps.manualInventory ||
      this.props.cloudInventory !== newProps.cloudInventory
    ) {
      log('Manual inventory has changed, saving it');
      cloudStorage.setInventory(
        {
          inventory: newProps.inventory,
          manualInventory: newProps.manualInventory
        },
        newProps.profile
      );
    }
  }

  potentiallyScheduleFetchProfile = (props = this.props) => {
    if (!this.intervalId && props.trackedItems.length > 0) {
      this.intervalId = window.setInterval(() => {
        this.fetchProfile();
      }, FETCH_INTERVAL);
    }
  };

  fetchProfile(props = this.props) {
    return destiny
      .getCurrentProfiles()
      .then(data => {
        const profile = destiny.getLastProfile(data);

        props.setProfiles({
          currentProfile: profile,
          allProfiles: data.profiles,
          isCached: false
        });

        return profile;
      })
      .catch(err => {
        console.error('Error fetching current profiles');
        console.error(err);
      });
  }

  fetchDefinitions({ code: lang }) {
    const {
      setVendorDefs,
      setStatDefs,
      setItemDefs,
      setObjectiveDefs,
      setXurData
    } = this.props;

    destiny.xur().then(setXurData);
    getDefinition('DestinyVendorDefinition', lang).then(setVendorDefs);
    getDefinition('DestinyStatDefinition', lang).then(setStatDefs);
    getDefinition('DestinyObjectiveDefinition', lang).then(setObjectiveDefs);

    const items = 'reducedCollectableInventoryItems';
    this.itemDefsPromise = getDefinition(items, lang, false);
    this.itemDefsPromise.then(setItemDefs);
  }

  setPopper = (itemHash, element) =>
    this.setState({ itemTooltip: itemHash ? { itemHash, element } : null });

  setItemModal = itemHash => this.setState({ itemModal: itemHash });
  setXurModal = isOpen => this.setState({ xurModal: isOpen });
  removeTrackedItem = item => this.props.removeTrackedItem(item.hash);

  switchProfile = profile => {
    const { membershipId, membershipType } = profile.profile.data.userInfo;
    ls.savePreviousAccount(membershipId, membershipType);
    this.props.switchProfile(profile);
  };

  logout = () => {
    ls.clearAll();
    this.props.setProfiles({
      currentProfile: null,
      allProfiles: null,
      isCached: false
    });
    this.props.setCloudInventory(null);
  };

  render() {
    const { filters, filteredSetData, trackedItems } = this.props;
    const { itemTooltip, itemModal, xurModal } = this.state;

    return (
      <div className={styles.root}>
        <SectionList
          setData={filteredSetData}
          filters={filters}
          setFilterItem={this.props.setFilterItem}
        />

        {filteredSetData.map(({ sets, slug, name }, index) => (
          <Section
            key={index}
            name={name}
            sets={sets}
            slug={slug}
            setPopper={this.setPopper}
            setModal={this.setItemModal}
          />
        ))}

        <Footer />

        {itemTooltip && (
          <Popper key={itemTooltip.hash} element={itemTooltip.element}>
            <ItemTooltip itemHash={itemTooltip.itemHash} />
          </Popper>
        )}

        {trackedItems.length > 0 && (
          <div className={styles.trackedItems}>
            {trackedItems.map(hash => (
              <ItemTooltip
                key={hash}
                itemHash={hash}
                small={true}
                dismiss={this.removeTrackedItem}
              />
            ))}
          </div>
        )}

        <ItemModal
          itemHash={itemModal}
          isOpen={!!itemModal}
          onRequestClose={() => this.setItemModal(null)}
        />

        <XurModal
          isOpen={xurModal}
          onRequestClose={() => this.setXurModal(false)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filters: state.app.filters,
    profile: state.app.profile,
    isCached: state.app.isCached,
    allProfiles: state.app.allProfiles,
    language: state.app.language,
    itemDefs: state.definitions.itemDefs,
    trackedItems: state.app.trackedItems,
    xur: state.app.xur,
    manualInventory: state.app.manualInventory,
    // TODO: this uses props, so we need to 'make' a selector like in ItemSet
    filteredSetData: filteredSetDataSelector(state, ownProps),
    inventory: inventorySelector(state),
    haveCloudInventory: !!state.app.cloudInventory,
    cloudInventory: state.app.cloudInventory,
    xurHasNewItems: xurHasNewItemsSelector(state),
    xurItems: xurItemsSelector(state)
  };
};

const mapDispatchToActions = {
  setProfiles,
  switchProfile,
  setCloudInventory,
  setVendorDefs,
  setItemDefs,
  setObjectiveDefs,
  setStatDefs,
  setFilterItem,
  removeTrackedItem,
  setXurData
};

export default connect(mapStateToProps, mapDispatchToActions)(Inventory);
