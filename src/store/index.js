import { createStore, combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  app: reducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
