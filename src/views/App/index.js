import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import * as ls from 'app/lib/ls';
import * as destiny from 'app/lib/destiny';
import * as cloudStorage from 'app/lib/cloudStorage';
import { sendProfileStats } from 'app/lib/telemetry';
import googleAuth from 'app/lib/googleDriveAuth';
import destinyAuth from 'app/lib/destinyAuth';

import { inventorySelector } from 'app/store/selectors';

import {
  setProfiles,
  switchProfile,
  setProfileLoading,
  setCloudInventory,
  setGoogleAuth,
  setLanguage
} from 'app/store/reducer';
import { setAuthStatus } from 'app/store/auth';

import Header from 'app/components/Header';
import LoginUpsell from 'app/components/LoginUpsell';

import styles from './styles.styl';

const log = require('app/lib/log')('<App />');

class App extends Component {
  state = {};
  alreadyFetched = false;

  constructor(props) {
    super(props);

    let _resolve;
    this.itemDefsPromise = new Promise(resolve => {
      _resolve = resolve;
    });

    this.itemDefsPromise.resolve = _resolve;
  }

  componentDidMount() {
    destinyAuth(this.authDidUpdate);
  }

  componentDidUpdate(prevProps) {
    const { props } = this;
    const propChanged = key => props[key] !== prevProps[key];

    const inventoryChanged =
      propChanged('isCached') ||
      propChanged('cloudInventory') ||
      propChanged('manualInventory');

    if (propChanged('itemDefs')) {
      this.itemDefsPromise.resolve(this.props.itemDefs);
    }

    if (inventoryChanged && !props.isCached && props.cloudInventory) {
      log('Inventory has changed, saving new cloudInventory');

      cloudStorage.saveInventory(
        pick(props, ['inventory', 'manualInventory']),
        props.profile
      );
    }
  }

  authDidUpdate = (err, { isAuthenticated, isFinal }) => {
    log('Auth state update', { err, isAuthenticated, isFinal });

    if (err) {
      throw err;
    }

    if (isAuthenticated && isFinal && !this.alreadyFetched) {
      this.alreadyFetched = true;
      this.fetch();
      sendProfileStats();
    }

    this.props.setAuthStatus({
      isAuthed: isAuthenticated,
      isLoaded: isFinal
    });
  };

  fetchProfile() {
    return destiny
      .getCurrentProfiles()
      .then(data => {
        log('got current profile', data);
        const profile = destiny.getLastProfile(data);

        this.props.setProfiles({
          currentProfile: profile,
          allProfiles: data.profiles,
          isCached: false,
          profileLoading: false
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

  fetch = () => {
    const profilePromise = this.fetchProfile();

    // Create a promise that will resolve immediately with the
    // pre-cached profile, or with the call to fetch the profile
    const withProfile = this.props.profile
      ? Promise.resolve(this.props.profile)
      : profilePromise;

    this.props.setProfileLoading(true);

    googleAuth(({ signedIn }) => {
      // If they log out
      if (this.props.googleAuth.signedIn && !signedIn) {
        this.props.setCloudInventory(null);
      }

      this.props.setGoogleAuth({ loaded: true, signedIn });

      Promise.all([withProfile, this.itemDefsPromise]).then(
        ([profile, itemDefs]) => {
          signedIn &&
            cloudStorage
              .getInventory(profile, itemDefs)
              .then(this.props.setCloudInventory);
        }
      );
    });
  };

  switchProfile = profile => {
    const { membershipId, membershipType } = profile.profile.data.userInfo;
    ls.savePreviousAccount(membershipId, membershipType);
    this.props.switchProfile(profile);
  };

  setLanguage = language => {
    ls.saveLanguage(language);
    this.props.setLanguage(language);
  };

  logout = () => {
    ls.clearAll();

    this.props.setProfiles({
      currentProfile: null,
      allProfiles: null,
      isCached: false
    });

    this.props.setAuthStatus({ isAuthed: false, isLoaded: true });
    this.props.setCloudInventory(null); // TODO
  };

  render() {
    const {
      auth,
      children,
      profile,
      allProfiles,
      googleAuth,
      language,
      profileCached,
      profileLoading
    } = this.props;

    return (
      <div className={styles.root}>
        <Header
          profileLoading={profileLoading}
          profileCached={profileCached}
          authExpired={!auth.isAuthed && profile}
          currentProfile={profile}
          allProfiles={allProfiles}
          googleAuth={googleAuth}
          language={language}
          switchProfile={this.switchProfile}
          setLanguage={this.setLanguage}
          logout={this.logout}
        />

        <div>{children}</div>

        {!auth.isAuthed && (
          <div className={styles.auth}>
            <LoginUpsell>
              {profile
                ? 'The connection with Bungie has expired. Please reconnect to update your inventory.'
                : `Connect your Bungie.net acccount to automatically track items you've collected and dismantled.`}
            </LoginUpsell>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    profileCached: state.app.isCached,
    profile: state.app.profile,
    profileLoading: state.app.profileLoading,
    allProfiles: state.app.allProfiles,
    googleAuth: state.app.googleAuth,
    language: state.app.language,
    cloudInventory: state.app.cloudInventory,
    itemDefs: state.definitions.itemDefs,
    inventory: inventorySelector(state),
    manualInventory: state.app.manualInventory
  };
};

const mapDispatchToActions = {
  setAuthStatus,
  setProfiles,
  switchProfile,
  setProfileLoading,
  setCloudInventory,
  setGoogleAuth,
  setLanguage
};

export default connect(mapStateToProps, mapDispatchToActions)(App);
