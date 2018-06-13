import React, { Fragment, Component } from 'react';
import { Link } from 'react-router';
import { get } from 'lodash';
import fp from 'lodash/fp';

import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';
import { getDefinition } from 'app/lib/manifestData';
import * as destiny from 'app/lib/destiny';
import { PLATFORMS } from 'app/lib/destinyEnums';
import {
  getDebugId,
  saveDebugId,
  getGoogleDriveInventoryFileId,
  clearAll
} from 'app/lib/ls';
import { saveDebugInfo } from 'app/lib/telemetry';

import googleAuth from 'app/lib/googleDriveAuth';
import * as cloudStorage from 'app/lib/cloudStorage';

import styles from './styles.styl';

const bool = b => (b ? 'true' : 'false');

function debugQueueWorker(debugData, cb) {
  saveDebugInfo(debugData)
    .then(() => {
      cb();
    })
    .catch(err => {
      cb(err);
    });
}

class DebugView extends Component {
  state = {
    auth: {},
    defs: {},
    cloudStorageRevisions: []
  };

  componentDidMount() {
    saveDebugId(getDebugId());

    this.fallbackDebugId = getDebugId();
    this.fetchDefinitions(this.props.language);
    this.queueLib = import('async/queue');

    googleAuth(({ signedIn }) => {
      if (signedIn && getGoogleDriveInventoryFileId()) {
        cloudStorage.listVersions().then(revisions => {
          const onePerDay = fp.flow(
            fp.groupBy(rev => rev.modifiedTime.split('T')[0]),
            fp.map(rev => ({ ...rev[0], date: new Date(rev[0].modifiedTime) }))
          )(revisions);

          this.setState({ cloudStorageRevisions: onePerDay });
        });
      }
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      this.pushSaveDebugData(nextState);
    }
  }

  componentWillReceiveProps(newProps) {
    const { isAuthenticated, authLoaded } = newProps;

    const authChanged =
      isAuthenticated !== this.props.isAuthenticated ||
      authLoaded !== this.props.authLoaded;

    if (authChanged) {
      this.setState({
        auth: {
          isAuthenticated,
          authLoaded
        }
      });

      if (isAuthenticated && authLoaded) {
        this.fetchData();
      }
    }
  }

  setDef(defName) {
    return defs => {
      this.setState({
        defs: {
          ...this.state.defs,
          [defName]: defs
        }
      });
    };
  }

  loadDef(defName) {
    getDefinition(defName, 'en').then(defs => {
      this.setState({
        defs: {
          ...this.state.defs,
          [defName]: `Loaded, ${Object.keys(defs).length} items`
        }
      });
    });
  }

  fetchDefinitions(language) {
    this.loadDef('DestinyVendorDefinition');
    this.loadDef('DestinyStatDefinition');
    this.loadDef('DestinyInventoryItemDefinition');
    this.loadDef('DestinyObjectiveDefinition');
  }

  fetchData() {
    this.setState({
      profile: {
        status: 'loading'
      }
    });

    destiny
      .getCurrentProfiles()
      .then(data => {
        this.setState({
          profile: {
            data: data,
            status: 'loaded'
          }
        });
      })
      .catch(err => {
        this.setState({
          profile: {
            ...(this.state.profile || {}),
            status: `error, ${err.message || err.toString()}`
          }
        });
      });
  }

  getDebugID(state = this.state) {
    return get(
      state,
      'profile.data.bungieNetUser.membershipId',
      this.fallbackDebugId
    );
  }

  getDebugIDDisplay(state = this.state) {
    const realID = get(state, 'profile.data.bungieNetUser.membershipId');

    if (realID) {
      return `${realID}|${this.fallbackDebugId}`;
    }

    return this.fallbackDebugId;
  }

  pushSaveDebugData(state) {
    const debugData = {
      ...state,
      profile: {
        ...(state.profile || {}),
        data: JSON.stringify((state.profile || {}).data || {})
      },
      timestamp: new Date(),
      debugId: this.getDebugID(state)
    };

    this.queueLib.then(queueLib => {
      if (!this.debugDataQueue) {
        this.debugDataQueue = queueLib(debugQueueWorker, 1);
      }

      this.debugDataQueue.push(debugData);
    });
  }

  clearAll() {
    clearAll();
    window.alert('Cleared all local data. Refresh for changes');
  }

  expandCloudStorageRevision = rev => {
    console.log('clicked revision', rev);

    cloudStorage.getRevision(rev.id).then(result => {
      rev.__data = result;
      rev.__dataString = JSON.stringify(result);
      this.forceUpdate();
    });
  };

  cloudStorageRevertTo = data => {
    if (
      window.confirm(
        "Warning: Only do this if you're absolutely sure you know what you're doing. You will probably loose data if you continue"
      )
    ) {
      cloudStorage.saveInventory(data, {}, true);
    }
  };

  render() {
    return (
      <div className={styles.root}>
        <h1>Debug</h1>

        <p>
          <Link to="/">Return to homepage</Link>
        </p>

        {this.state.hasError && <div>There was an error!</div>}

        {
          <button onClick={this.clearAll}>
            Clear all local DestinySets data
          </button>
        }

        <p>
          Your debug ID is <code>{this.getDebugIDDisplay(this.state)}</code>,
          which gives read-only access to your Destiny inventory and profile
          data. Provide this when getting help.
        </p>

        <h2>Auth</h2>
        <ul>
          {!this.state.auth.isAuthenticated && (
            <li>
              <strong>
                <em>
                  If you're not logged in, you'll need to do it on the main page
                  first and then return back here
                </em>
              </strong>
            </li>
          )}

          <li>isAuthenticated: {bool(this.state.auth.isAuthenticated)}</li>
          <li>authLoaded: {bool(this.state.auth.authLoaded)}</li>
        </ul>

        {this.state.profile && (
          <div>
            <h2>Profile</h2>
            <ul>
              <li>status: {this.state.profile.status}</li>
              {this.state.profile.data && (
                <Fragment>
                  <li>
                    bungie.net:{' '}
                    {this.state.profile.data.bungieNetUser.uniqueName} [{
                      this.state.profile.data.bungieNetUser.membershipId
                    }]
                  </li>
                  <li>
                    Profiles:{' '}
                    <ul>
                      {this.state.profile.data.profiles.map((profile, i) => (
                        <li key={i}>
                          {profile.profile.data
                            ? `${PLATFORMS[
                                profile.profile.data.userInfo.membershipType
                              ] || 'unknown platform'}, ${
                                profile.profile.data.characterIds.length
                              } characters
                            [${profile.profile.data.userInfo.membershipId}] `
                            : 'missing'}
                        </li>
                      ))}
                    </ul>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        )}

        <h2>Defs</h2>
        <ul>
          <li>vendors: {this.state.defs.DestinyVendorDefinition}</li>
          <li>stats: {this.state.defs.DestinyStatDefinition}</li>
          <li>items: {this.state.defs.DestinyInventoryItemDefinition}</li>
          <li>objectives: {this.state.defs.DestinyObjectiveDefinition}</li>
        </ul>

        <h2>Google Drive inventory revisions</h2>
        <ul>
          {this.state.cloudStorageRevisions.map(rev => (
            <li
              key={rev.id}
              onClick={() =>
                !rev.__data && this.expandCloudStorageRevision(rev)
              }
            >
              {rev.modifiedTime} [{rev.id}]
              {rev.__data &&
                rev.__data.version && (
                  <code>version: {rev.__data.version}</code>
                )}
              {rev.__data && (
                <div>
                  <textarea value={rev.__dataString} readOnly />
                  <button onClick={() => this.cloudStorageRevertTo(rev.__data)}>
                    Revert to this
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DestinyAuthProvider(DebugView);
