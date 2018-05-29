import { createStore, combineReducers } from 'redux';

import reducer, { SET_DEFINITIONS } from './reducer';
import auth from './auth';
import preloadStore from './preloadStore';

const rootReducer = combineReducers({
  app: reducer,
  auth
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
