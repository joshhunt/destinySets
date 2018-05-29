import { isObject, isArray, isNumber } from 'lodash';

import {
  HUNTER,
  TITAN,
  WARLOCK,
  FILTER_SHOW_COLLECTED,
  FILTER_SHOW_PS4_EXCLUSIVES
} from 'app/lib/destinyEnums';

const SET_PROFILES = 'Set profiles';
const SET_CLOUD_INVENTORY = 'Set cloud inventory';
const SET_FILTER_ITEM = 'Set filter item';
const SET_BULK_FILTERS = 'Set bulk filters';
const SET_LANGUAGE = 'Set language';
const ADD_TRACK_ITEMS = 'Add tracked item';
const REMOVE_TRACKED_ITEM = 'Remove tracked item';
const SET_XUR_DATA = 'Set Xur data';
const TOGGLE_MANUALLY_OBTAINED = 'Toggle manually obtained';
const SET_GOOGLE_AUTH = 'Set Google auth data';
const FORGET_DISMANTLED_ITEM = 'Forget dismantled item';
export const SET_DEFINITIONS = 'Set definitions';

export const DEFAULT_FILTER = {
  [TITAN]: true,
  [HUNTER]: true,
  [WARLOCK]: true,
  [FILTER_SHOW_COLLECTED]: true,
  [FILTER_SHOW_PS4_EXCLUSIVES]: true
};

const INITIAL_STORE = {
  filters: DEFAULT_FILTER,
  trackedItems: [],
  xur: {
    items: [],
    modalOpen: false
  },
  manualInventory: {},
  googleAuth: {
    loaded: false,
    signedIn: false
  }
};

const ITEM_DEF_KEYS = [];
window.__ITEM_DEF_KEYS = ITEM_DEF_KEYS;
const DEBUG_PROXIFY_ITEM_DEFS = false;

function proxyifyDefs(defs, prevKeys = []) {
  if (!DEBUG_PROXIFY_ITEM_DEFS) {
    return defs;
  }

  const p = new Proxy(defs, {
    get: (obj, prop) => {
      const keys = [...prevKeys, prop];
      const keysOfInterest = keys.slice(1).join('.');

      if (!ITEM_DEF_KEYS.includes(keysOfInterest)) {
        ITEM_DEF_KEYS.push(keysOfInterest);
        console.log('Item defs', ITEM_DEF_KEYS);
      }

      const value = obj[prop];

      if (isArray(value)) {
        return value;
      } else if (isObject(value)) {
        const stuff = Object.keys(value).filter(k => !isNumber(k));
        if (stuff.length) {
          return proxyifyDefs(value, keys);
        }

        return value;
      }

      return value;
    }
  });

  return p;
}

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
    case SET_PROFILES:
      return {
        ...state,
        ...action.payload
      };

    case SET_GOOGLE_AUTH:
      return {
        ...state,
        googleAuth: action.data
      };

    case SET_CLOUD_INVENTORY:
      return {
        ...state,
        cloudInventory: (action.cloudInventory || {}).inventory,
        manualInventory: (action.cloudInventory || {}).manualInventory || {}
      };

    case SET_DEFINITIONS:
      return {
        ...state,
        [action.name]:
          action.name === 'itemDefs' ? proxyifyDefs(action.defs) : action.defs
      };

    case SET_FILTER_ITEM:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterKey]: action.filterValue
        }
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

    case SET_XUR_DATA:
      return {
        ...state,
        xur: { ...state.xur, ...action.xur }
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

export function setProfiles({ currentProfile, allProfiles, isCached }) {
  return {
    type: SET_PROFILES,
    payload: {
      profile: currentProfile,
      allProfiles,
      isCached
    }
  };
}

export function switchProfile(newProfile) {
  return {
    type: SET_PROFILES,
    payload: {
      profile: newProfile
    }
  };
}

export function setGoogleAuth(data) {
  return { type: SET_GOOGLE_AUTH, data };
}

export function setCloudInventory(cloudInventory) {
  console.log('cloudInventory:', cloudInventory);
  return { type: SET_CLOUD_INVENTORY, cloudInventory };
}

export function setFilterItem(filterKey, filterValue) {
  return { type: SET_FILTER_ITEM, filterKey, filterValue };
}

export function setBulkFilters(filters) {
  return { type: SET_BULK_FILTERS, filters };
}

export function setLanguage(language) {
  return { type: SET_LANGUAGE, language };
}

export function trackOrnaments(itemHashes) {
  console.log('tracking itemHashes', itemHashes);
  return { type: ADD_TRACK_ITEMS, itemHashes };
}

export function trackOrnament(itemHash) {
  return trackOrnaments([itemHash]);
}

export function removeTrackedItem(itemHash) {
  return { type: REMOVE_TRACKED_ITEM, itemHash };
}

export function setXurData(xur) {
  return { type: SET_XUR_DATA, xur };
}

export function toggleManuallyObtained(itemHash) {
  return { type: TOGGLE_MANUALLY_OBTAINED, itemHash };
}

export function forgetDismantled(itemHash) {
  return { type: FORGET_DISMANTLED_ITEM, itemHash };
}

function setDefs(name, defs) {
  return { type: SET_DEFINITIONS, name, defs };
}

export const setVendorDefs = setDefs.bind(null, 'vendorDefs');
export const setItemDefs = setDefs.bind(null, 'itemDefs');
export const setObjectiveDefs = setDefs.bind(null, 'objectiveDefs');
export const setStatDefs = setDefs.bind(null, 'statDefs');
