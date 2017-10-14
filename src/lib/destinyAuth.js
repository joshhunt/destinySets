import queryString from 'query-string';
import { getDestiny } from 'app/lib/destiny';
import * as ls from 'app/lib/ls';

function handleNewAuthData(data) {
  const authResponse = data;

  const accessTokenExpiry = new Date();
  const refreshTokenExpiry = new Date();

  accessTokenExpiry.setSeconds(
    accessTokenExpiry.getSeconds() + authResponse.accessToken.expires
  );
  refreshTokenExpiry.setSeconds(
    refreshTokenExpiry.getSeconds() + authResponse.refreshToken.expires
  );

  const authData = {
    accessToken: authResponse.accessToken.value,
    accessTokenExpiry: accessTokenExpiry,

    refreshToken: authResponse.refreshToken.value,
    refreshTokenExpiry: refreshTokenExpiry,
  };

  ls.saveAuth(authData);

  window.AUTH_DATA = authData;

  return Promise.resolve();
}

function handleError(err, cb) {
  console.error('Auth error:');
  console.error(err);
  ls.removeAuth();
  cb(err);
}

export default function(cb) {
  const queryParams = queryString.parse(location.search);

  const prevAuthData = ls.getAuth();

  const accessTokenIsValid =
    prevAuthData && Date.now() < new Date(prevAuthData.accessTokenExpiry);
  const refreshTokenIsValid =
    prevAuthData && Date.now() < new Date(prevAuthData.refreshTokenExpiry);

  console.log({
    prevAuthData,
    accessTokenIsValid,
    refreshTokenIsValid,
  });

  if (accessTokenIsValid) {
    console.info('Access token is valid, running main()');
    window.AUTH_DATA = prevAuthData;
    cb(null, true);
  } else if (!accessTokenIsValid && refreshTokenIsValid) {
    console.info('Access token has expired, but refresh token is still valid.');
    console.info('Using refresh token to get a new access token');

    getDestiny(
      '/Platform/App/GetAccessTokensFromRefreshToken/',
      {},
      { refreshToken: prevAuthData.refreshToken }
    )
      .then(handleNewAuthData)
      .then(() => {
        console.info('Successfully gotten new access token');
        cb(null, true);
      })
      .catch(err => {
        console.info('Failed to get new access token');
        handleError(err, cb);
      });
  } else if (queryParams.code) {
    window.history.replaceState({}, 'foo', '/');
    console.info('Recieved auth code, getting access tokens');

    getDestiny(
      '/Platform/App/GetAccessTokensFromCode/',
      {},
      {
        code: queryParams.code,
      }
    )
      .then(handleNewAuthData)
      .then(() => cb(null, true))
      .catch(err => handleError(err, cb));
  } else {
    // console.info('Requesting authorization from Bungie');
    // const AUTH_URL = 'https://www.bungie.net/en/Application/Authorize/11145';
    // window.location.href = AUTH_URL;
    cb(null, false);
  }
}

export const authUrl = __DESTINY_AUTH_URL__;
