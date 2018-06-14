const INITIAL_STORE = {};

const SET_PROFILES = 'Set profiles';
const PROFILE_LOADING_START = 'Loading profile - start';

export default function profileReducer(state = INITIAL_STORE, action) {
  switch (action.type) {
    case SET_PROFILES:
      return {
        ...state,
        ...action.payload
      };

    case PROFILE_LOADING_START: {
      return {
        ...state,
        profileLoading: action.payload
      };
    }

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

