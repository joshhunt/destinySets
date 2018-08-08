import * as ls from 'app/lib/ls';
import {
  setBulkFilters,
  setLanguage,
  trackOrnaments,
  setAppValue,
  setBulkHiddenItemSet
} from 'app/store/reducer';
import { setProfiles } from 'app/store/profile';
import { getLastProfile } from 'app/lib/destiny';

const log = require('app/lib/log')('authProvider');

// getTrackedItems
// saveTrackedItems

export default function preloadStore(store) {
  const prevFilters = ls.getFilters();
  if (prevFilters) {
    log('Dispatching previous filters', prevFilters);
    store.dispatch(setBulkFilters(prevFilters));
  }

  const authData = ls.getAuth();
  const profiles = ls.getProfiles();
  const trackedItems = ls.getTrackedItems();
  const dataExplorerVisited = ls.getDataExplorerVisited();

  log('debug', { authData, profiles });

  if (trackedItems.length) {
    store.dispatch(trackOrnaments(trackedItems));
  }

  if (dataExplorerVisited) {
    store.dispatch(setAppValue({ dataExplorerVisited }));
  }

  if (authData && profiles) {
    const profile = getLastProfile(profiles);
    log('Dispaying previous profile', profile);
    store.dispatch(
      setProfiles({
        currentProfile: profile,
        allProfiles: profiles.profiles,
        isCached: true
      })
    );
  }

  store.dispatch(setLanguage(ls.getLanguage()));

  store.dispatch(setBulkHiddenItemSet(ls.getHiddenItemSets()));

  let currentTrackedItems = store.getState().app.trackedItems;
  store.subscribe(() => {
    const newState = store.getState();

    if (newState.app.trackedItems !== currentTrackedItems) {
      ls.saveTrackedItems(newState.app.trackedItems);
    }

    currentTrackedItems = newState.app.trackedItems;
  });

  return store;
}
