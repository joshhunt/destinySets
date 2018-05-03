import * as ls from 'app/lib/ls';

const log = require('app/lib/log')('telemetry');

function getNameFromBungieProfile(bungieNetProfile) {
  const { psnDisplayName, xboxDisplayName, uniqueName } = bungieNetProfile;

  const nameArr = [
    psnDisplayName && `psn:${psnDisplayName}`,
    xboxDisplayName && `xbox:${psnDisplayName}`
  ].filter(Boolean);

  if (!nameArr.length) {
    nameArr.push(uniqueName);
  }

  const name = nameArr.join(' ');

  return name;
}

let db;
function getFirebaseDb() {
  if (db) {
    return Promise.resolve(db);
  }

  const importPromise = Promise.all([
    import(/* webpackChunkName: "firebase" */ 'firebase/app'),
    import(/* webpackChunkName: "firebase" */ 'firebase/database')
  ]);

  importPromise.catch(err => {
    console.error('Error importing firebase', err);
    console.error(err);
  });

  return importPromise.then(([firebase]) => {
    firebase.initializeApp({
      apiKey: 'AIzaSyDA_n6Ix4o6K2vW4zlFFmWk2XCzqPesDZo',
      authDomain: 'destinysets.firebaseapp.com',
      databaseURL: 'https://destinysets-new.firebaseio.com',
      projectId: 'destinysets',
      storageBucket: 'destinysets.appspot.com',
      messagingSenderId: '621939283066'
    });

    db = firebase.database();

    window.__db = db;

    return db;
  });
}

export function getDebugProfile(path) {
  return getFirebaseDb()
    .then(db => {
      const ref = db.ref(path);
      return ref.once('value');
    })
    .then(snapshot => snapshot.val())
    .then(data => JSON.parse(data));
}

export function saveDebugInfo(debugData, pathPrefix = 'debug') {
  log('Saving debug info', debugData);
  return getFirebaseDb()
    .then(db => {
      const key = `${pathPrefix}/${debugData.debugId}`;
      console.log('telem with', { key, debugData });
      return db.ref(key).set(debugData);
    })
    .catch(err => {
      console.error('Unable to saveDebugInfo', err);
      console.error(err);
    });
}

export function setUser(bungieNetProfile) {
  const { membershipId } = bungieNetProfile;
  const { ga, Raven } = window;

  ls.saveUID(membershipId);

  const uid = ls.getUID();
  const name = getNameFromBungieProfile(bungieNetProfile);

  ga && ga('set', '&uid', uid);
  ga && ga('set', 'userId', uid);

  Raven &&
    Raven.setUserContext({
      id: uid,
      username: name
    });
}

export function trackError(err) {
  const { Raven } = window;

  if (!Raven) {
    return null;
  }

  Raven.captureException(err);
}

export function trackBreadcrumb(data) {
  const { Raven } = window;

  if (!Raven) {
    return null;
  }

  Raven.captureBreadcrumb(data);
}

export function errorPrompt(ev) {
  if (ev && ev.preventDefault) {
    ev.preventDefault();
  }

  const { Raven } = window;

  if (!Raven) {
    window.alert(
      'Unable to load error library. Maybe an adblocker interferred?'
    );
    return null;
  }

  Raven.showReportDialog();
}
