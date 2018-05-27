import React, { Component } from 'react';
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
  setFilterItem,
  setXurData,
  removeTrackedItem,
  setGoogleAuth
} from 'app/store/reducer';
import {
  inventorySelector,
  xurHasNewItemsSelector,
  xurItemsSelector
} from 'app/store/selectors';

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
    const { debugProfile } = props.location.query;

    if (debugProfile) {
      const debugPath = debugProfile.includes('console.firebase.google.com')
        ? debugProfile.split('destinysets-new/data/')[1]
        : debugProfile;

      log('Debug path', debugPath);

      return getDebugProfile(debugPath).then(data => {
        let currentProfile = data;
        let allProfiles = [data];

        log('debug profile data', data);

        if (data.profiles && data.bungieNetUser) {
          currentProfile = data.profiles[0];
          allProfiles = data.profiles;
        }

        log({ currentProfile, allProfiles });

        props.setProfiles({
          currentProfile,
          allProfiles,
          isCached: false
        });
      });
    }

    return destiny
      .getCurrentProfiles()
      .then(data => {
        log('got current profile', data);
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

        if (err.data && err.data.ErrorCode === 1618) {
          this.setState({ unexpectedError: true });
        }
      });
  }

  fetch = (props = this.props) => {
    this.fetchProfile(props).then(profile => {
      googleAuth(({ signedIn }) => {
        // this.setState({
        //   googleAuthLoaded: true,
        //   googleAuthSignedIn: signedIn
        // });

        this.props.setGoogleAuth({ loaded: true, signedIn });

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
      trackedItems,
      xur,
      xurHasNewItems,
      googleAuth
    } = this.props;

    const {
      itemTooltip,
      itemModal,
      xurModal,
      // googleAuthLoaded,
      // googleAuthSignedIn,
      unexpectedError
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
          xurHasNewItems={xurHasNewItems}
          openXurModal={this.setXurModal}
          displayXur={!!xur.items.length}
          googleAuth={googleAuth}
          displayGoogleAuthButton={
            googleAuth.loaded && isAuthenticated && !googleAuth.signedIn
          }
        />

        <SectionList
          setData={filteredSetData}
          filters={filters}
          setFilterItem={this.props.setFilterItem}
        />

        {!isAuthenticated && (
          <LoginUpsell>
            Connect your Bungie.net acccount to automatically track items you've
            collected and dismantled.
          </LoginUpsell>
        )}

        {unexpectedError && (
          <div className={styles.errorInfo}>
            An unexpected error occurred while requesting your profile. This is
            a known issue with Bungie's API and until resolved, players may
            workaround the issue by signing into all characters, on all
            platforms.{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/BungieHelp/status/994643009214955521"
            >
              Read more from @BungieHelp
            </a>.
          </div>
        )}

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
    itemDefs: state.app.itemDefs,
    trackedItems: state.app.trackedItems,
    xur: state.app.xur,
    googleAuth: state.app.googleAuth,
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
  setLanguage,
  removeTrackedItem,
  setXurData,
  setGoogleAuth
};

export default DestinyAuthProvider(
  connect(mapStateToProps, mapDispatchToActions)(Inventory)
);
