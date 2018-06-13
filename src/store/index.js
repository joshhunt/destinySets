import { createStore, combineReducers } from 'redux';

import app from './reducer';
import definitions, { SET_DEFINITIONS } from './definitions';
import auth from './auth';
import preloadStore from './preloadStore';

const rootReducer = combineReducers({
  app,
  auth,
  definitions
});

const store = (window.__store = preloadStore(
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({
        actionsBlacklist: [SET_DEFINITIONS]
      })
  )
));

export default store;
