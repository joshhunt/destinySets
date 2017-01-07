import queryString from 'query-string';
import { getDestiny } from 'app/lib/destiny';

function handleNewAuthData(data) {
  const authResponse = data;

  const accessTokenExpiry = new Date();
  const refreshTokenExpiry = new Date();

  accessTokenExpiry.setSeconds(accessTokenExpiry.getSeconds() + authResponse.accessToken.expires);
  refreshTokenExpiry.setSeconds(refreshTokenExpiry.getSeconds() + authResponse.refreshToken.expires);

  const authData = {
    accessToken: authResponse.accessToken.value,
    accessTokenExpiry: accessTokenExpiry,

    refreshToken: authResponse.refreshToken.value,
    refreshTokenExpiry: refreshTokenExpiry,
  }

  localStorage.setItem('authData', JSON.stringify(authData));
  window.AUTH_DATA = authData;

  return Promise.resolve();
}

export default function(cb) {
  const queryParams = queryString.parse(location.search);

  const prevAuthData = JSON.parse(localStorage.getItem('authData') || 'null');
  const accessTokenIsValid = prevAuthData && (Date.now() < new Date(prevAuthData.accessTokenExpiry));
  const refreshTokenIsValid = prevAuthData && (Date.now() < new Date(prevAuthData.refreshTokenExpiry));

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
    console.info('Do refresh logic here');

    getDestiny('https://www.bungie.net/Platform/App/GetAccessTokensFromRefreshToken/', {}, {
      refreshToken: prevAuthData.refreshToken,
    }).then(handleNewAuthData)
      .then(() => cb(null, true))
      .catch(cb);

  } else if (queryParams.code) {
    window.history.replaceState( {} , 'foo', '/' );
    console.info('Recieved auth code, getting access tokens');

    getDestiny('https://www.bungie.net/Platform/App/GetAccessTokensFromCode/', {}, {
      code: queryParams.code,
    }).then(handleNewAuthData)
      .then(() => cb(null, true))
      .catch(cb);

  } else {
    // console.info('Requesting authorization from Bungie');
    // const AUTH_URL = 'https://www.bungie.net/en/Application/Authorize/11145';
    // window.location.href = AUTH_URL;
    cb(null, false);
  }
}


export const authUrl = 'https://www.bungie.net/en/Application/Authorize/11145';
