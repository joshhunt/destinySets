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
import { staleThenRevalidate, _Dexie } from '@destiny-plumbing/definitions';

const log = require('app/lib/log')('authProvider');

// Clean up previous definitions
_Dexie.delete('destinyManifest');

export const REQUIRED_DEFINITIONS = [
  'DestinyChecklistDefinition',
  'DestinyObjectiveDefinition',
  'DestinyStatDefinition',
  'DestinyVendorDefinition',
  'DestinyInventoryItemDefinition',
  'DestinyClassDefinition',
  'DestinyCollectibleDefinition',
  'DestinyPresentationNodeDefinition',
  'DestinyRecordDefinition',
  'DestinyFactionDefinition',
  'DestinyActivityModeDefinition',
  'DestinyPlaceDefinition',
  'DestinyFactionDefinition'
];

function loadDefinitions(store, language) {
  try {
    staleThenRevalidate(
      process.env.REACT_APP_API_KEY,
      language.code,
      REQUIRED_DEFINITIONS,
      (err, result) => {
        if (err) {
          trackError(err);
          store.dispatch(definitionsError(err));
          return;
        }

        if (result && result.loading) {
          store.dispatch(definitionsStatus({ status: 'downloading' }));
        }

        if (result && result.definitions) {
          store.dispatch(definitionsStatus({ status: null }));
          store.dispatch(setBulkDefinitions(result.definitions));
        }
      }
    );
  } catch (err) {
    trackError(err);
    store.dispatch(definitionsError(err));
  }
}

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

  let prevState = store.getState();

  store.subscribe(() => {
    const newState = store.getState();
    window.__state = newState;

    if (newState.app.trackedItems !== prevState.app.trackedItems) {
      ls.saveTrackedItems(newState.app.trackedItems);
    }

    if (newState.app.trackedRecords !== prevState.app.trackedRecords) {
      ls.saveTrackedRecords(newState.app.trackedRecords);
    }

    if (newState.app.language !== prevState.app.language) {
      loadDefinitions(store, newState.app.language);
    }

    prevState = newState;
  });

  loadDefinitions(store, language);

  return store;
}
