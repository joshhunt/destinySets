import { trackEvent } from 'app/lib/analytics';

const gapi = window.gapi;

const GOOGLE_CLIENT_ID =
  '266833101247-14o0m6ir2fj8vede3r6gdd0pu3itm6vd.apps.googleusercontent.com';
const GOOGLE_SCOPE = 'https://www.googleapis.com/auth/drive.appdata';

let googleApiClient;

const readyDfd = {};

readyDfd.promise = new Promise((resolve, reject) => {
  readyDfd.resolve = resolve;
  readyDfd.reject = reject;
});

export const ready = readyDfd.promise;

function checkGapi() {
  if (!window.gapi) {
    window.alert(
      'Unable to communicate to Google Drive - perhaps an adblocker is interfering?'
    );
    return true;
  }

  return false;
}

export default function handleClientLoad(cb) {
  if (checkGapi()) {
    return;
  }

  gapi.load('client:auth2', () => initClient(cb));
}

function initClient(cb) {
  if (checkGapi()) {
    return;
  }

  // Initialize the client with API key and People API, and initialize OAuth with an
  // OAuth 2.0 client ID and scopes (space delimited string) to request access.
  if (!googleApiClient) {
    googleApiClient = gapi.client.init({
      discoveryDocs: [
        'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
      ],
      clientId: GOOGLE_CLIENT_ID,
      scope: GOOGLE_SCOPE
    });
  }

  googleApiClient.then(function() {
    readyDfd.resolve();

    const signInState = gapi.auth2.getAuthInstance().isSignedIn.get();

    cb({ signedIn: signInState });

    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(_signedInState => {
      trackEvent('googleAuth', 'sign-in-status-changed', _signedInState);
      cb({ signedIn: _signedInState });
    });
  });
}

export function signIn(event) {
  if (checkGapi()) {
    return;
  }

  trackEvent('googleAuth', 'sign-in');
  // Ideally the button should only show up after gapi.client.init finishes, so that this
  // handler won't be called before OAuth is initialized.
  gapi.auth2.getAuthInstance().signIn();
}

export function signOut(event) {
  if (checkGapi()) {
    return;
  }

  trackEvent('googleAuth', 'sign-out');
  gapi.auth2.getAuthInstance().signOut();
}
