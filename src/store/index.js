import { createStore, combineReducers } from 'redux';

import reducer from './reducer';
import preloadStore from './preloadStore';

const rootReducer = combineReducers({
  app: reducer
});

const store = (window.__store = preloadStore(
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
));

export default store;
