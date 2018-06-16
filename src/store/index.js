import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import app from './reducer';
import definitions, { SET_DEFINITIONS } from './definitions';
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

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: [SET_DEFINITIONS]
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = preloadStore(createStore(rootReducer, enhancer));
window.__store = store;

export default store;
