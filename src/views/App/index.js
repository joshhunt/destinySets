import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ls from 'app/lib/ls';
import * as destiny from 'app/lib/destiny';
import destinyAuth from 'app/lib/destinyAuth';
import Header from 'app/components/Header';
import LoginUpsell from 'app/components/LoginUpsell';

import { setProfiles } from 'app/store/reducer';
import { setAuthStatus } from 'app/store/auth';

import styles from './styles.styl';

const log = require('app/lib/log')('<App />');

class App extends Component {
  state = {};
  alreadyFetched = false;

  componentDidMount() {
    log('Mounted');

    destinyAuth(this.authDidUpdate);
  }

  authDidUpdate = (err, { isAuthenticated, isFinal }) => {
    log('Auth state update', { err, isAuthenticated, isFinal });

    if (err) {
      throw err;
    }

    if (isAuthenticated && isFinal && !this.alreadyFetched) {
      this.alreadyFetched = true;
      this.fetch();
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

  fetch = () => {
    this.fetchProfile().then(profile => {
      // googleAuth(({ signedIn }) => {
      //   this.props.setGoogleAuth({ loaded: true, signedIn });
      //   this.itemDefsPromise.then(itemDefs => {
      //     signedIn &&
      //       cloudStorage
      //         .getInventory(profile, itemDefs)
      //         .then(props.setCloudInventory);
      //   });
      // });
    });
  };

  switchProfile = () => {
    log('TODO: switchProfile');
  };

  setLanguage = () => {
    log('TODO: setLanguage');
  };

  logout = () => {
    ls.clearAll();

    this.props.setProfiles({
      currentProfile: null,
      allProfiles: null,
      isCached: false
    });

    this.props.setAuthStatus({ isAuthed: false, isLoaded: true });
    // this.props.setCloudInventory(null); // TODO
  };

  render() {
    const {
      auth,
      children,
      profile,
      allProfiles,
      googleAuth,
      language,
      profileCached
    } = this.props;

    return (
      <div className={styles.root}>
        <Header
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

        {/*<Header
          googleSignIn={googleSignIn}
          googleSignOut={this.googleSignOut}
          xurHasNewItems={xurHasNewItems}
          openXurModal={this.setXurModal}
          displayXur={!!xur.items.length}
          googleAuth={googleAuth}
          displayGoogleAuthButton={
            googleAuth.loaded && isAuthenticated && !googleAuth.signedIn
          }
        />*/}

        <div>{children}</div>

        {!auth.isAuthed && (
          <div className={styles.auth}>
            <LoginUpsell>
              {profile
                ? 'Login has expired.'
                : 'You need to log in for the first time'}
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
    allProfiles: state.app.allProfiles,
    googleAuth: state.app.googleAuth,
    language: state.app.language
  };
};

const mapDispatchToActions = { setAuthStatus, setProfiles };

export default connect(mapStateToProps, mapDispatchToActions)(App);
