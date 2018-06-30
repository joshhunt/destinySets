import React, { Fragment, Component } from 'react';
import { Link } from 'react-router';
import { get } from 'lodash';
import fp from 'lodash/fp';
import formatRelative from 'date-fns/formatRelative';

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
import BungieImage from 'app/components/BungieImage';

import styles from './styles.styl';

const bool = b => (b ? 'true' : 'false');

const deferred = () => {
  const dfd = {};

  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });

  return dfd;
};

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
    cloudStorageRevisions: [],
    cloudStorageAppDataFiles: []
  };

  componentDidMount() {
    this.profileDfd = deferred();
    this.itemDefsDfd = deferred();

    saveDebugId(getDebugId());

    this.fallbackDebugId = getDebugId();
    this.fetchDefinitions(this.props.language);
    this.queueLib = import('async/queue');

    googleAuth(({ signedIn }) => {
      const fileId = getGoogleDriveInventoryFileId();
      console.log('googleAuth', { signedIn, fileId });

      if (signedIn) {
        const listFilesPromise = cloudStorage.listAppDataFiles().then(files => {
          this.setState({ cloudStorageAppDataFiles: files });
          return files;
        });

        let profile;
        this.profileDfd.promise
          .then(_profile => {
            profile = _profile;
            return cloudStorage.getFileId(profile);
          })
          .then(fileId => {
            this.setState({ cloudStorageFileId: fileId });

            listFilesPromise.then(files => {
              this.setState({
                cloudStorageAppDataFiles: files.map(f => ({
                  ...f,
                  __active: f.id === fileId
                }))
              });
            });

            return cloudStorage.listVersions(profile);
          })
          .then(revisions => {
            const onePerDay = fp.flow(
              fp.groupBy(rev => rev.modifiedTime.split('T')[0]),
              fp.map(rev => ({
                ...rev[0],
                date: new Date(rev[0].modifiedTime)
              }))
            )(revisions);

            onePerDay.reverse();

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
    return getDefinition(defName, 'en').then(defs => {
      this.setState({
        defs: {
          ...this.state.defs,
          [defName]: `Loaded, ${Object.keys(defs).length} items`
        }
      });

      return defs;
    });
  }

  fetchDefinitions(language) {
    this.loadDef('DestinyVendorDefinition');
    this.loadDef('DestinyStatDefinition');
    this.loadDef('DestinyObjectiveDefinition');

    this.loadDef('DestinyInventoryItemDefinition').then(defs => {
      this.itemDefsDfd.resolve(defs);
    });
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
        this.profileDfd.resolve(destiny.getLastProfile(data));
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

    let _result;
    this.profileDfd.promise
      .then(profile => {
        return cloudStorage.getRevision(rev.id, profile);
      })
      .then(result => {
        _result = result;
        rev.__data = result;
        rev.__dataString = JSON.stringify(result);

        this.forceUpdate();

        return this.itemDefsDfd.promise;
      })
      .then(itemDefs => {
        rev.__inventory = Object.values(_result.inventory).map(
          dismantledItem => {
            return {
              ...dismantledItem,
              def: itemDefs[dismantledItem.itemHash]
            };
          }
        );

        this.forceUpdate();
      });
  };

  displayCloudRevisionInventory = rev => {
    rev.__displayInventory = !rev.__displayInventory;
    this.forceUpdate();
  };

  cloudStorageRevertTo = data => {
    if (
      window.confirm(
        "Warning: Only do this if you're absolutely sure you know what you're doing. There's a chance you will loose data if you continue!"
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
        <em>
          Google Drive automatically keeps a revision history of your inventory.
          Only one revision is shown per day
        </em>
        {this.state.cloudStorageFileId && (
          <p>
            <strong>File ID: </strong>
            <code>{this.state.cloudStorageFileId}</code>
          </p>
        )}
        <ul>
          {this.state.cloudStorageRevisions.map(rev => (
            <li
              className={styles.cursorPointer}
              key={rev.id}
              onClick={() =>
                !rev.__data && this.expandCloudStorageRevision(rev)
              }
            >
              {formatRelative(rev.modifiedTime, new Date())}
              {' - '}
              <code className={styles.code}>{rev.id}</code>

              {rev.__data && (
                <div className={styles.reversionMoreInfo}>
                  <p>
                    <strong>
                      {Object.values(rev.__data.inventory).length} items tracked
                    </strong>,{' '}
                    <strong>
                      version: {rev.__data.version || 'no version'}
                    </strong>
                  </p>

                  <div>
                    <textarea value={rev.__dataString} readOnly />
                  </div>

                  <div>
                    <button
                      onClick={() => this.displayCloudRevisionInventory(rev)}
                    >
                      Display inventory
                    </button>
                    <button
                      onClick={() => this.cloudStorageRevertTo(rev.__data)}
                    >
                      Revert to this
                    </button>
                  </div>

                  {rev.__displayInventory && (
                    <div className={styles.inventoryList}>
                      {rev.__inventory &&
                        rev.__inventory.map((item, index) => (
                          <div key={index} className={styles.item}>
                            {item.def ? (
                              <div className={styles.itemInner}>
                                {item.def.displayProperties.hasIcon && (
                                  <BungieImage
                                    className={styles.itemImage}
                                    src={item.def.displayProperties.icon}
                                  />
                                )}

                                <div>
                                  <div>{item.def.displayProperties.name}</div>
                                  <div className={styles.small}>
                                    {item.dismantled && 'dismantled'}{' '}
                                    {item.obtained && 'obtained'}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              item.itemHash
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        <h2>Google Drive inventory files</h2>
        <em>Lists the files in your hidden Destiny Sets app data folder</em>
        <ul>
          {this.state.cloudStorageAppDataFiles.map(file => (
            <li key={file.id}>
              {file.name} - <code>{file.id}</code>{' '}
              {file.__active && <span>- [active]</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DestinyAuthProvider(DebugView);
