import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import {
  setProfiles,
  switchProfile,
  setCloudInventory,
  setVendorDefs,
  setItemDefs,
  setLanguage,
  setObjectiveDefs,
  setStatDefs,
  toggleFilterKey
} from 'app/store/reducer';
import { inventorySelector } from 'app/store/selectors';

import googleAuth, {
  signIn as googleSignIn,
  signOut as googleSignOut
} from 'app/lib/googleDriveAuth';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';
import * as ls from 'app/lib/ls';
import * as destiny from 'app/lib/destiny';
import * as cloudStorage from 'app/lib/cloudStorage';
import { getDefinition } from 'app/lib/manifestData';

import Header from 'app/components/NewHeader';
import LoginUpsell from 'app/components/LoginUpsell';
import Section from 'app/components/NewSection';
import Popper from 'app/components/Popper';
import FilterBar from 'app/components/NewFilterBar';
import ItemTooltip from 'app/components/ItemTooltip';
import ItemModal from 'app/components/ItemModal';

import { filteredSetDataSelector } from './selectors';
import styles from './styles.styl';

const log = require('app/lib/log')('<Inventory />');

// eslint-disable-next-line
const timeout = dur => result =>
  new Promise(resolve => setTimeout(() => resolve(result), dur));

class Inventory extends Component {
  state = {
    popperItemHash: null,
    popperElement: null
  };

  componentDidMount() {
    this.fetchDefinitions(this.props.language);
  }

  componentWillReceiveProps(newProps) {
    const { isAuthenticated, authLoaded } = newProps;

    const authChanged =
      isAuthenticated !== this.props.isAuthenticated ||
      authLoaded !== this.props.authLoaded;

    if (authChanged) {
      log('Auth has changed', { isAuthenticated, authLoaded });
      if (!isAuthenticated && authLoaded) {
        ls.removeAuth();
      }

      if (isAuthenticated && authLoaded) {
        if (!this.alreadyFetched) {
          this.alreadyFetched = true;
          this.fetch(newProps);
        }
      }

      if (!isAuthenticated && authLoaded) {
        ls.clearAll();
        this.props.setProfiles({
          currentProfile: null,
          allProfiles: null,
          isCached: false
        });
      }
    }

    if (this.props.filters !== newProps.filters) {
      ls.saveFilters(newProps.filters);
    }

    if (this.props.language !== newProps.language) {
      this.fetchDefinitions(newProps.language);
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
      cloudStorage.setInventory(newProps.inventory, newProps.profile);
    }
  }

  fetch(props = this.props) {
    window.__CACHE_API = false;

    destiny.getCurrentProfiles().then(data => {
      log('got current profile', data);
      const profile = destiny.getLastProfile(data);

      googleAuth(({ signedIn }) => {
        this.setState({
          googleAuthLoaded: true,
          googleAuthSignedIn: signedIn
        });

        signedIn &&
          cloudStorage
            .getInventory(profile, this.props.itemDefs)
            .then(cloudInventory => {
              window.__cloudInventory = cloudInventory;
              props.setCloudInventory(cloudInventory);
            });
      });

      return props.setProfiles({
        currentProfile: profile,
        allProfiles: data.profiles,
        isCached: false
      });
    });
  }

  fetchDefinitions(language) {
    const {
      setVendorDefs,
      setStatDefs,
      setItemDefs,
      setObjectiveDefs
    } = this.props;

    getDefinition('DestinyVendorDefinition', language.code).then(setVendorDefs);

    getDefinition('DestinyStatDefinition', language.code).then(setStatDefs);

    // getDefinition('reducedCollectableInventoryItems', language.code, false)
    getDefinition('DestinyInventoryItemDefinition', language.code)
      // .then(timeout(2 * 1000))
      .then(setItemDefs);

    getDefinition('DestinyObjectiveDefinition', language.code).then(
      setObjectiveDefs
    );
  }

  setPopper = (itemHash, element) => {
    this.setState({ itemTooltip: itemHash ? { itemHash, element } : null });
  };

  setModal = itemHash => {
    this.setState({ itemModal: itemHash });
  };

  toggleFilter = key => {
    this.props.toggleFilterKey(key);
  };

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

  googleSignOut = () => {
    googleSignOut();
    this.props.setCloudInventory(null);
  };

  setLanguage = language => {
    ls.saveLanguage(language);
    this.props.setLanguage(language);
  };

  render() {
    const {
      filters,
      filteredSetData,
      profile,
      allProfiles,
      language,
      isCached,
      isAuthenticated
    } = this.props;

    const {
      itemTooltip,
      itemModal,
      googleAuthLoaded,
      googleAuthSignedIn
    } = this.state;

    return (
      <div className={styles.root}>
        <Header
          isCached={isCached}
          currentProfile={profile}
          allProfiles={allProfiles}
          switchProfile={this.switchProfile}
          language={language}
          setLanguage={this.setLanguage}
          logout={this.logout}
          googleSignIn={googleSignIn}
          googleSignOut={this.googleSignOut}
          googleAuthSignedIn={googleAuthSignedIn}
          displayGoogleAuthButton={
            googleAuthLoaded && isAuthenticated && !googleAuthSignedIn
          }
        />

        {!isAuthenticated && (
          <LoginUpsell>
            Connect your Bungie.net acccount to automatically track items you've
            collected and dismantled.
          </LoginUpsell>
        )}

        <FilterBar filters={filters} toggleFilter={this.toggleFilter} />

        {filteredSetData.map(({ sets, name }, index) => (
          <Section
            key={index}
            name={name}
            sets={sets}
            setPopper={this.setPopper}
            setModal={this.setModal}
          />
        ))}

        <p>
          <Link to="/debug">Debug</Link>
        </p>

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
    filters: state.app.filters,
    profile: state.app.profile,
    isCached: state.app.isCached,
    allProfiles: state.app.allProfiles,
    language: state.app.language,
    itemDefs: state.app.itemDefs,
    // TODO: this uses props, so we need to 'make' a selector like in ItemSet
    filteredSetData: filteredSetDataSelector(state, ownProps),
    inventory: inventorySelector(state),
    haveCloudInventory: !!state.app.cloudInventory
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
  toggleFilterKey,
  setLanguage
};

export default DestinyAuthProvider(
  connect(mapStateToProps, mapDispatchToActions)(Inventory)
);
