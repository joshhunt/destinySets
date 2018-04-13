import queryString from 'query-string';
import { getDestiny } from 'app/lib/destiny';
import { saveAuth, getAuth } from 'app/lib/ls';

const CLIENT_ID = process.env.REACT_APP_BUNGIE_CLIENT_ID;

const log = require('app/lib/log')('auth');

export function getTokenRequestUrl() {
  return `https://www.bungie.net/en/OAuth/Authorize?client_id=${
    CLIENT_ID
  }&response_type=code`;
}

export function requestNewAccessToken(authCode) {
  return getDestiny(
    '/Platform/App/OAuth/Token/',
    {},
    `client_id=${CLIENT_ID}&grant_type=authorization_code&code=${authCode}`
  );
}

export function getAccessToken(requestIfStale) {
  const authData = getAuth();

  if (authData && new Date(authData.expiresDate) > Date.now()) {
    log('We already have valid stuff in LS');
    return authData.access_token;
  } else if (requestIfStale) {
    console.log(
      'Here is wheere we would request a new token, because it is stale'
    );
  }

  return null;
}

function handleNewAuthData(authData) {
  log('Successfully got auth data', authData);

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

export default function destinyAuth(cb) {
  const queryParams = queryString.parse(window.location.search);
  log('Starting auth, with query params', queryParams);

  if (queryParams.code) {
    log('Authorisation code present in URL', queryParams.code);

    requestNewAccessToken(queryParams.code)
      .then(handleNewAuthData)
      .then(authData => cb(null, true))
      .catch(err => cb(err, false));

    return;
  }

  const prevAccessToken = getAccessToken();
  if (prevAccessToken) {
    log('Already authed from localStorage');
    cb(null, true);
  }

  cb(null, false);
}

window.__getTokenRequestUrl = getTokenRequestUrl;
window.__requestNewAccessToken = requestNewAccessToken;
window.__destinyAuth = destinyAuth;
