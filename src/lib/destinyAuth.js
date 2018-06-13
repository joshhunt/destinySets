import queryString from 'query-string';
import { getDestiny } from 'app/lib/destiny';
import { saveAuth, getAuth } from 'app/lib/ls';

const CLIENT_ID = process.env.REACT_APP_BUNGIE_CLIENT_ID;
const REAUTH_TIMEOUT = 5 * 1000;

const log = require('app/lib/log')('auth');
const logiFrame = require('app/lib/log')('auth:iframe');

const isAuthRefreshiFrame =
  window.self !== window.top && window.parent.__HIDDEN_IFRAME_REFRESH_AUTH;

if (isAuthRefreshiFrame && window.parent.__recieveNewCodeFromIframe) {
  logiFrame('In hidden auth iframe, checking location.search');
  const queryParams = queryString.parse(window.location.search);

  if (queryParams.code) {
    logiFrame('Authorisation code present in URL in iframe', queryParams.code);
    logiFrame('Passing to __recieveNewCodeFromIframe');
    window.parent.__recieveNewCodeFromIframe(queryParams.code);
  }
}

export function getTokenRequestUrl() {
  return `https://www.bungie.net/en/OAuth/Authorize?client_id=${CLIENT_ID}&response_type=code`;
}

export const authUrl = getTokenRequestUrl;

export function requestNewAccessToken(authCode) {
  return getDestiny(
    '/Platform/App/OAuth/Token/',
    { _noAuth: true },
    `client_id=${CLIENT_ID}&grant_type=authorization_code&code=${authCode}`
  );
}

let getEnsuredAccessTokenPromise;
export function getEnsuredAccessToken() {
  if (getEnsuredAccessTokenPromise) {
    return getEnsuredAccessTokenPromise;
  }

  getEnsuredAccessTokenPromise = _getEnsuredAccessToken();

  getEnsuredAccessTokenPromise.then(() => {
    getEnsuredAccessTokenPromise = null;
  });

  return getEnsuredAccessTokenPromise;
}

let attempts = 0;
export function _getEnsuredAccessToken() {
  return new Promise((resolve, reject) => {
    const prevAccessToken = getAccessToken();

    if (prevAccessToken) {
      return resolve(prevAccessToken);
    }

    log(
      'When trying to ensuree we have an access token, we found it was stale'
    );

    attempts += 1;

    if (attempts > 2) {
      reject(new Error('omg too many tries'));
      return;
    }

    log('Creating hiddeen iframe');
    window.__HIDDEN_IFRAME_REFRESH_AUTH = true;
    const iframe = document.createElement('iframe');
    iframe.src = getTokenRequestUrl();
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.top = '-100px';
    iframe.style.left = '-100px';
    document.body.appendChild(iframe);

    window.__recieveNewCodeFromIframe = newCode => {
      document.body.removeChild(iframe);
      log('Got new code from iFrame', newCode);
      log('Requesting new access token using above new code');

      // TODO: error handling
      requestNewAccessToken(newCode)
        .then(handleNewAuthData)
        .then(authData => {
          resolve(authData.access_token);
        });
    };
  });
}

export function getAccessToken() {
  const authData = getAuth();

  if (authData && new Date(authData.expiresDate) > Date.now()) {
    log('We already have valid stuff in LS');
    return authData.access_token;
  }

  return null;
}

function handleNewAuthData(authData) {
  log('Handling new auth data', authData);

  const expiry = new Date();
  expiry.setSeconds(expiry.getSeconds() + authData.expires_in);
  const betterAuthData = {
    ...authData,
    expiresDate: expiry
  };

  log('Expires on', expiry);
  saveAuth(betterAuthData);

  return authData;
}

export default function destinyAuth(_cb) {
  const queryParams = queryString.parse(window.location.search);
  log('Starting auth', queryParams);

  const cb = (err, result) => {
    log('callback called with', { err, result });
    _cb(err, result);
  };

  if (queryParams.code) {
    // TODO: replace the URL witout the code, rather than forcing /
    window.history.replaceState({}, 'foo', '/');
    log(
      'Authorisation code present in URL, requesting new acceess code',
      queryParams.code
    );

    requestNewAccessToken(queryParams.code)
      .then(handleNewAuthData)
      .then(authData => {
        log('Successfully requested new access code, calling cb');
        cb(null, { isAuthenticated: true, isFinal: true });
      })
      .catch(err => {
        log('Error requesting new access code, calling cb');
        cb(err, { isAuthenticated: false, isFinal: true });
      });

    return;
  }

  const prevAccessToken = getAccessToken();
  if (prevAccessToken) {
    log('Already authed from localStorage, calling cb');
    cb(null, { isAuthenticated: true, isFinal: true });
    return;
  }

  if (getAuth()) {
    // Okay so we have auth stuff, but it's stale. Lets use an iframe to request new deets
    let hasReturned = false;
    log('Have previous auth data, preemptively calling cb');
    cb(null, { isAuthenticated: true, isFinal: false });

    const timeoutID = setTimeout(() => {
      log('iFrame has timed out, calling cb');
      // This is a bit of a misnomer - it might not _actually_ be final, but we pretend it is anyway
      !hasReturned && cb(null, { isAuthenticated: false, isFinal: true });
    }, REAUTH_TIMEOUT);

    log('Ensuring we have a valid acccess token');
    getEnsuredAccessToken().then(token => {
      clearTimeout(timeoutID);
      hasReturned = true;
      log('Recieved valid acccess token, calling cb');
      cb(null, { isAuthenticated: !!token, isFinal: true });
    });
  } else {
    log('No previous auth data, calling cb');
    cb(null, { isAuthenticated: false, isFinal: true });
  }
}

window.__getTokenRequestUrl = getTokenRequestUrl;
window.__requestNewAccessToken = requestNewAccessToken;
window.__destinyAuth = destinyAuth;
