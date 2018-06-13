const INITIAL_STORE = {};

const SET_AUTH_STATUS = 'Auth - set status';

export default function authReducer(state = INITIAL_STORE, action) {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

export function setAuthStatus(authStatus) {
  return { type: SET_AUTH_STATUS, payload: authStatus };
}
