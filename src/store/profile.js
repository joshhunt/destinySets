import * as destiny from 'app/lib/destiny';

const INITIAL_STORE = {};

const SET_PROFILES = 'Set profiles';
const PROFILE_LOADING_START = 'Loading profile - start';
const PROFILE_ERROR = 'Profile error';

export default function profileReducer(
  state = INITIAL_STORE,
  { type, payload }
) {
  switch (type) {
    case SET_PROFILES:
      return {
        ...state,
        ...payload,
        error: undefined
      };

    case PROFILE_LOADING_START:
      return {
        ...state,
        profileLoading: payload
      };

    case PROFILE_ERROR:
      return {
        err: payload
      };

    default:
      return state;
  }
}

export function setProfiles({
  currentProfile,
  allProfiles,
  profileLoading,
  isCached
}) {
  return {
    type: SET_PROFILES,
    payload: {
      profile: currentProfile,
      allProfiles,
      profileLoading,
      isCached
    }
  };
}

export function switchProfile(newProfile) {
  return {
    type: SET_PROFILES,
    payload: {
      profile: newProfile
    }
  };
}

export function setProfileLoading(payload = true) {
  return { type: PROFILE_LOADING_START, payload };
}

function setError(payload) {
  return { type: PROFILE_ERROR, payload };
}

export function fetchProfile() {
  return dispatch => {
    dispatch(setProfileLoading(true));

    return destiny
      .getCurrentProfiles()
      .then(data => {
        const profile = destiny.getLastProfile(data);

        dispatch(
          setProfiles({
            currentProfile: profile,
            allProfiles: data.profiles,
            isCached: false,
            profileLoading: false
          })
        );

        return profile;
      })
      .catch(err => {
        console.error('Error fetching current profiles');
        console.error(err);

        dispatch(setError(err));
      });
  };
}
