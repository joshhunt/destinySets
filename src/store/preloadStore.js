import * as ls from 'app/lib/ls';
import {
  setBulkFilters,
  setLanguage,
  trackOrnaments,
  trackRecords,
  setAppValue,
  setBulkHiddenItemSet
} from 'app/store/reducer';
import {
  setBulkDefinitions,
  definitionsStatus,
  definitionsError
} from 'app/store/definitions';
import { setProfiles } from 'app/store/profile';
import { getLastProfile } from 'app/lib/destiny';
import { trackError } from 'app/lib/telemetry';

import { fasterGetDefinitions } from 'app/lib/definitions';

const log = require('app/lib/log')('authProvider');

export const REQUIRED_DEFINITIONS = [
  'DestinyChecklistDefinition',
  'DestinyObjectiveDefinition',
  'DestinyStatDefinition',
  'DestinyVendorDefinition',
  'DestinyInventoryItemDefinition',
  'DestinyCollectibleDefinition',
  'DestinyPresentationNodeDefinition',
  'DestinyRecordDefinition',
  'DestinyFactionDefinition',
  'DestinyActivityModeDefinition',
  'DestinyPlaceDefinition',
  'DestinyFactionDefinition'
];

export default function preloadStore(store) {
  const prevFilters = ls.getFilters();
  if (prevFilters) {
    log('Dispatching previous filters', prevFilters);
    store.dispatch(setBulkFilters(prevFilters));
  }

  const authData = ls.getAuth();
  const profiles = ls.getProfiles();
  const trackedItems = ls.getTrackedItems();
  const trackedRecords = ls.getTrackedRecords();
  const dataExplorerVisited = ls.getDataExplorerVisited();

  log('debug', { authData, profiles });

  if (trackedItems.length) {
    store.dispatch(trackOrnaments(trackedItems));
  }

  if (trackedRecords.length) {
    store.dispatch(trackRecords(trackedRecords));
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

  const language = ls.getLanguage();

  store.dispatch(setLanguage(language));

  store.dispatch(setBulkHiddenItemSet(ls.getHiddenItemSets()));

  let currentTrackedItems = store.getState().app.trackedItems;
  let currentTrackedRecords = store.getState().app.trackedRecords;
  store.subscribe(() => {
    const newState = store.getState();
    window.__state = newState;

    if (newState.app.trackedItems !== currentTrackedItems) {
      ls.saveTrackedItems(newState.app.trackedItems);
    }

    if (newState.app.trackedRecords !== currentTrackedRecords) {
      ls.saveTrackedRecords(newState.app.trackedRecords);
    }

    currentTrackedItems = newState.app.trackedItems;
    currentTrackedRecords = newState.app.trackedRecords;
  });

  fasterGetDefinitions(
    language.code,
    REQUIRED_DEFINITIONS,
    data => {
      store.dispatch(definitionsStatus(data));
    },
    (err, data) => {
      if (err) {
        trackError(err);
        store.dispatch(definitionsError(err));
        return;
      }

      if (data && data.definitions) {
        store.dispatch(definitionsStatus({ status: null }));
        store.dispatch(setBulkDefinitions(data.definitions));
      }
    }
  );

  return store;
}
