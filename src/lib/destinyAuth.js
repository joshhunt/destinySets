import queryString from 'query-string';
import { getDestiny } from 'app/lib/destiny';
import { saveAuth, getAuth, getLastPage } from 'app/lib/ls';
import { browserHistory } from 'react-router';

const CLIENT_ID = process.env.REACT_APP_BUNGIE_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_BUNGIE_CLIENT_SECRET;

const AUTH_HEADER = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

const log = require('app/lib/log')('auth');

export function getTokenRequestUrl() {
  return `https://www.bungie.net/en/OAuth/Authorize?client_id=${CLIENT_ID}&response_type=code`;
}

export const authUrl = getTokenRequestUrl;

export function requestNewAccessToken(authCode) {
  return getDestiny(
    '/Platform/App/OAuth/Token/',
    {
      _noAuth: true,
      headers: {
        Authorization: `Basic ${AUTH_HEADER}`
      }
    },
    `client_id=${CLIENT_ID}&grant_type=authorization_code&code=${authCode}`
  );
}

export function refreshAccessToken(refreshToken) {
  return getDestiny(
    '/Platform/App/OAuth/Token/',
    {
      _noAuth: true,
      headers: {
        Authorization: `Basic ${AUTH_HEADER}`
      }
    },
    `client_id=${CLIENT_ID}&grant_type=refresh_token&refresh_token=${refreshToken}`
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

export function _getEnsuredAccessToken() {
  return new Promise((resolve, reject) => {
    reauth((err, { isAuthenticated, isFinal, authData }) => {
      if (err) {
        return reject(err);
      }

      if (isFinal && isAuthenticated && authData) {
        resolve(authData.access_token);
      }
    });
  });
}

function handleNewAuthData(authData) {
  log('Handling new auth data', authData);

  const accessTokenExpiry = new Date();
  accessTokenExpiry.setSeconds(
    accessTokenExpiry.getSeconds() + authData.expires_in
  );

  const refreshTokenExpiry = new Date();
  refreshTokenExpiry.setSeconds(
    refreshTokenExpiry.getSeconds() + authData.refresh_expires_in
  );

  const betterAuthData = {
    ...authData,
    accessTokenExpiry,
    refreshTokenExpiry
  };

  log('better auth data', betterAuthData);
  saveAuth(betterAuthData);

  return authData;
}

// This function ensures the user is logged in, refreshing access token
// if need be, and returns the auth data
function reauth(cb) {
  const authData = getAuth();
  const now = Date.now();

  if (
    !authData ||
    !authData.refreshTokenExpiry ||
    authData.refreshTokenExpiry < now
  ) {
    log('No previous auth data, or the refresh token is invalid, calling cb');
    cb(null, { isAuthenticated: false, isFinal: true });
    return;
  }

  if (authData.accessTokenExpiry > now) {
    log('Have valid access token, calling cb');
    cb(null, { isAuthenticated: true, isFinal: true, authData });
    return;
  }

  if (authData.refreshTokenExpiry > now) {
    log('Have invalid access token, but valid refresh token. calling cb.');
    cb(null, { isAuthenticated: true, isFinal: false });

    refreshAccessToken(authData.refresh_token)
      .then(handleNewAuthData)
      .then(authData => {
        log('Successfully refreshed access token, calling cb');
        cb(null, { isAuthenticated: true, isFinal: true, authData });
      })
      .catch(err => {
        log('Error refreshing access token, calling cb');
        cb(err, { isAuthenticated: false, isFinal: true });
      });

    return;
  }

  const err = new Error('Reached invalid state in reauth');
  log('Reached invalid state in reauth');
  cb(err, { isAuthenticated: false, isFinal: true });
}

function exchangeCodeForAccessToken(cb, code) {
  const navigateTo = getLastPage();
  browserHistory.replace(navigateTo || '/');
  log('Authorisation code present in URL, requesting new acceess code', code);

  requestNewAccessToken(code)
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

export default function destinyAuth(_cb) {
  const queryParams = queryString.parse(window.location.search);
  log('Starting auth', queryParams);

  const cb = (err, result) => {
    log('callback called with', { err, result });
    _cb(err, result);
  };

  if (queryParams.code) {
    return exchangeCodeForAccessToken(cb, queryParams.code);
  }

  reauth(cb);
}
