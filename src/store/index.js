import { createStore, combineReducers } from 'redux';
import * as ls from 'app/lib/ls';
import { setBulkFilters, setLanguage } from 'app/store/reducer';

import reducer from './reducer';

const rootReducer = combineReducers({
  app: reducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.__store = store;

const prevFilters = ls.getFilters();
if (prevFilters) {
  console.log('restore filters:', prevFilters);
  store.dispatch(setBulkFilters(prevFilters));
}

store.dispatch(setLanguage(ls.getLanguage()));

export default store;
