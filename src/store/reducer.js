import {
  HUNTER,
  TITAN,
  WARLOCK,
  FILTER_SHOW_COLLECTED,
  FILTER_SHOW_EVERVERSE,
  FILTER_SHOW_ORNAMENTS,
  FILTER_SHOW_WEAPONS,
  FILTER_SHOW_HIDDEN_SETS
} from 'app/lib/destinyEnums';

import { makePayloadAction } from './utils';

const SET_CLOUD_INVENTORY = 'Set cloud inventory';
const SET_FILTER_ITEM = 'Set filter item';
const SET_HIDDEN_ITEM_SET = 'Set hidden itemSet';
const SET_BULK_HIDDEN_ITEM_SET = 'Set bulk hidden itemSet';
const SET_BULK_FILTERS = 'Set bulk filters';
const SET_LANGUAGE = 'Set language';
const ADD_TRACK_ITEMS = 'Add tracked item';
const REMOVE_TRACKED_ITEM = 'Remove tracked item';

const ADD_TRACKED_RECORDS = 'Add tracked records';
const REMOVE_TRACKED_RECORD = 'Remove tracked record';

const TOGGLE_MANUALLY_OBTAINED = 'Toggle manually obtained';
const FORGET_DISMANTLED_ITEM = 'Forget dismantled item';
const SET_APP_VALUE = 'Set app value';
const SET_SEARCH_VALUE = 'Set search value';

export const DEFAULT_FILTER = {
  [HUNTER]: true,
  [TITAN]: true,
  [WARLOCK]: true,
  [FILTER_SHOW_COLLECTED]: true,
  [FILTER_SHOW_EVERVERSE]: false,
  [FILTER_SHOW_ORNAMENTS]: true,
  [FILTER_SHOW_WEAPONS]: true,
  [FILTER_SHOW_HIDDEN_SETS]: false
};

const INITIAL_STORE = {
  filters: DEFAULT_FILTER,
  trackedItems: [],
  trackedRecords: [],
  manualInventory: {},
  dataExplorerVisited: false
};

function toggleManualInventory(manualInventory, itemHash) {
  const newItem = manualInventory[itemHash]
    ? null
    : {
        itemHash: itemHash,
        instances: [{ location: 'destinySetsManual' }],
        manuallyObtained: true
      };

  const ddd = {
    ...manualInventory,
    [itemHash]: newItem
  };

  if (!ddd[itemHash]) {
    delete ddd[itemHash];
  }

  return ddd;
}

function forgetDismantledDoWork(cloudInventory, itemHash) {
  const newCloudInventory = { ...cloudInventory };
  delete newCloudInventory[itemHash];

  return newCloudInventory;
}

export default function reducer(state = INITIAL_STORE, action) {
  switch (action.type) {
    case SET_APP_VALUE:
      return {
        ...state,
        ...action.payload
      };

    case SET_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload
      };
    }

    case SET_CLOUD_INVENTORY:
      return {
        ...state,
        cloudInventory: (action.cloudInventory || {}).inventory,
        manualInventory: (action.cloudInventory || {}).manualInventory || {}
      };

    case SET_FILTER_ITEM:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterKey]: action.filterValue
        }
      };

    case SET_HIDDEN_ITEM_SET:
      return {
        ...state,
        hiddenSets: {
          ...state.hiddenSets,
          [action.setId]: action.hiddenValue
        }
      };

    case SET_BULK_HIDDEN_ITEM_SET:
      return {
        ...state,
        hiddenSets: action.hiddenSets
      };

    case SET_BULK_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.filters }
      };

    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      };

    case ADD_TRACK_ITEMS:
      return {
        ...state,
        trackedItems: [...state.trackedItems, ...action.itemHashes]
      };

    case REMOVE_TRACKED_ITEM:
      return {
        ...state,
        trackedItems: state.trackedItems.filter(h => h !== action.itemHash)
      };

    case ADD_TRACKED_RECORDS:
      return {
        ...state,
        trackedRecords: [...state.trackedRecords, ...action.recordHashes]
      };

    case REMOVE_TRACKED_RECORD:
      return {
        ...state,
        trackedRecords: state.trackedRecords.filter(
          h => h !== action.recordHash
        )
      };

    case TOGGLE_MANUALLY_OBTAINED:
      return {
        ...state,
        manualInventory: toggleManualInventory(
          state.manualInventory,
          action.itemHash
        )
      };

    case FORGET_DISMANTLED_ITEM:
      return {
        ...state,
        cloudInventory: forgetDismantledDoWork(
          state.cloudInventory,
          action.itemHash
        )
      };

    default:
      return state;
  }
}

export function setAppValue(payload) {
  return { type: SET_APP_VALUE, payload };
}

export function setCloudInventory(cloudInventory) {
  return { type: SET_CLOUD_INVENTORY, cloudInventory };
}

export function setFilterItem(filterKey, filterValue) {
  return { type: SET_FILTER_ITEM, filterKey, filterValue };
}

export function setHiddenItemSet(setId, hiddenValue) {
  return { type: SET_HIDDEN_ITEM_SET, setId, hiddenValue };
}

export function setBulkHiddenItemSet(hiddenSets) {
  return { type: SET_BULK_HIDDEN_ITEM_SET, hiddenSets };
}

export function setBulkFilters(filters) {
  return { type: SET_BULK_FILTERS, filters };
}

export function setLanguage(language) {
  return { type: SET_LANGUAGE, language };
}

export function trackOrnaments(itemHashes) {
  return { type: ADD_TRACK_ITEMS, itemHashes };
}

export function trackRecords(recordHashes) {
  return { type: ADD_TRACKED_RECORDS, recordHashes };
}

export function trackOrnament(itemHash) {
  return trackOrnaments([itemHash]);
}

export function removeTrackedItem(itemHash) {
  return { type: REMOVE_TRACKED_ITEM, itemHash };
}

export function removeTrackedRecord(recordHash) {
  return { type: REMOVE_TRACKED_RECORD, recordHash };
}

export function toggleManuallyObtained(itemHash) {
  return { type: TOGGLE_MANUALLY_OBTAINED, itemHash };
}

export function forgetDismantled(itemHash) {
  return { type: FORGET_DISMANTLED_ITEM, itemHash };
}

export const setSearchValue = makePayloadAction(SET_SEARCH_VALUE);
