import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scrollspy from 'react-scrollspy';

import {
  setProfiles,
  switchProfile,
  setCloudInventory,
  setVendorDefs,
  setItemDefs,
  setLanguage,
  setObjectiveDefs,
  setStatDefs,
  toggleFilterKey,
  removeTrackedItem
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
import { getDebugProfile } from 'app/lib/telemetry';

import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import LoginUpsell from 'app/components/LoginUpsell';
import Section from 'app/components/Section';
import Popper from 'app/components/Popper';
import FilterBar from 'app/components/NewFilterBar';
import ItemTooltip from 'app/components/ItemTooltip';
import ItemModal from 'app/components/ItemModal';

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
    popperElement: null
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
      cloudStorage.setInventory(newProps.inventory, newProps.profile);
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
    const { debugProfile } = props.location.query;

    if (debugProfile) {
      const debugPath = debugProfile.includes('console.firebase.google.com')
        ? debugProfile.split('destinysets-new/data/')[1]
        : debugProfile;

      log('Debug path', debugPath);

      return getDebugProfile(debugPath).then(data => {
        log('debug profile data', data);
        props.setProfiles({
          currentProfile: data,
          allProfiles: [data],
          isCached: false
        });
      });
    }

    return destiny.getCurrentProfiles().then(data => {
      log('got current profile', data);
      const profile = destiny.getLastProfile(data);

      props.setProfiles({
        currentProfile: profile,
        allProfiles: data.profiles,
        isCached: false
      });

      return profile;
    });
  }

  fetch = (props = this.props) => {
    this.fetchProfile(props).then(profile => {
      googleAuth(({ signedIn }) => {
        this.setState({
          googleAuthLoaded: true,
          googleAuthSignedIn: signedIn
        });

        this.itemDefsPromise.then(itemDefs => {
          signedIn &&
            cloudStorage
              .getInventory(profile, itemDefs)
              .then(props.setCloudInventory);
        });
      });
    });
  };

  fetchDefinitions({ code: lang }) {
    const {
      setVendorDefs,
      setStatDefs,
      setItemDefs,
      setObjectiveDefs
    } = this.props;

    getDefinition('DestinyVendorDefinition', lang).then(setVendorDefs);
    getDefinition('DestinyStatDefinition', lang).then(setStatDefs);
    getDefinition('DestinyObjectiveDefinition', lang).then(setObjectiveDefs);

    this.itemDefsPromise = getDefinition(
      'reducedCollectableInventoryItems',
      lang,
      false
    );
    this.itemDefsPromise.then(setItemDefs);
  }

  setPopper = (itemHash, element) =>
    this.setState({ itemTooltip: itemHash ? { itemHash, element } : null });

  setModal = itemHash => this.setState({ itemModal: itemHash });
  toggleFilter = key => this.props.toggleFilterKey(key);
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
      isAuthenticated,
      trackedItems
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

        <div>
          <Scrollspy
            offset={-60}
            items={['section-1', 'section-2', 'section-3']}
            className={styles.testNav}
            currentClassName={styles.testNavCurrent}
          >
            <li>
              <a href="#section-1">section 1</a>
            </li>
            <li>
              <a href="#section-2">section 2</a>
            </li>
            <li>
              <a href="#section-3">section 3</a>
            </li>
          </Scrollspy>

          <div>
            <section className={styles.testSection} id="section-1">
              section 1
            </section>
            <section className={styles.testSection} id="section-2">
              section 2
            </section>
            <section className={styles.testSection} id="section-3">
              section 3
            </section>
          </div>
        </div>

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
    trackedItems: state.app.trackedItems,
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
  setLanguage,
  removeTrackedItem
};

export default DestinyAuthProvider(
  connect(mapStateToProps, mapDispatchToActions)(Inventory)
);
