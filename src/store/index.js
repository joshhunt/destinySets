import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { mapValues } from 'lodash';

import app from './reducer';
import definitions, { SET_BULK_DEFINITIONS } from './definitions';
import auth from './auth';
import profile from './profile';
import xur from './xur';

import preloadStore from './preloadStore';

const rootReducer = combineReducers({
  app,
  auth,
  profile,
  xur,
  definitions
});

function sanitiseDefintionsState(defintionsState) {
  if (!defintionsState) {
    return defintionsState;
  }
  return mapValues(
    defintionsState,
    definitions =>
      `[${Object.keys(definitions || {}).length} definitions hidden]`
  );
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: [SET_BULK_DEFINITIONS],
        stateSanitizer: state => ({
          ...state,
          definitions: sanitiseDefintionsState(state.definitions)
        })
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = preloadStore(createStore(rootReducer, enhancer));
window.__store = store;

export default store;
