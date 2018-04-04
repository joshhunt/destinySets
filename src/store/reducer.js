import {
  HUNTER,
  TITAN,
  WARLOCK,
  FILTER_SHOW_COLLECTED,
  FILTER_SHOW_PS4_EXCLUSIVES
} from 'app/lib/destinyEnums';

const SET_PROFILE = 'Set profile data';
const SET_CLOUD_INVENTORY = 'Set cloud inventory';
const SET_VENDORS = 'Set vendor data';
const SET_DEFINITIONS = 'Set definitions';
const TOGGLE_FILTER_KEY = 'Toggle filter value';
const SET_BULK_FILTERS = 'Set bulk filters';

export const DEFAULT_FILTER = {
  [TITAN]: true,
  [HUNTER]: true,
  [WARLOCK]: true,
  [FILTER_SHOW_COLLECTED]: true,
  [FILTER_SHOW_PS4_EXCLUSIVES]: true
};

const INITIAL_STORE = {
  filters: DEFAULT_FILTER
};

export default function reducer(state = INITIAL_STORE, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case SET_CLOUD_INVENTORY:
      return {
        ...state,
        cloudInventory: action.cloudInventory
      };

    case SET_VENDORS:
      return {
        ...state,
        vendors: action.vendors
      };

    case SET_DEFINITIONS:
      return {
        ...state,
        [action.name]: action.defs
      };

    case TOGGLE_FILTER_KEY:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterKey]: !state.filters[action.filterKey]
        }
      };

    case SET_BULK_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.filters }
      };

    default:
      return state;
  }
}

export function setProfile(profile) {
  return { type: SET_PROFILE, profile };
}

export function setCloudInventory(cloudInventory) {
  return { type: SET_CLOUD_INVENTORY, cloudInventory };
}

export function setVendors(vendors) {
  return { type: SET_VENDORS, vendors };
}

export function toggleFilterKey(filterKey) {
  return { type: TOGGLE_FILTER_KEY, filterKey };
}

export function setBulkFilters(filters) {
  return { type: SET_BULK_FILTERS, filters };
}

function setDefs(name, defs) {
  return { type: SET_DEFINITIONS, name, defs };
}

export const setVendorDefs = setDefs.bind(null, 'vendorDefs');
export const setItemDefs = setDefs.bind(null, 'itemDefs');
export const setObjectiveDefs = setDefs.bind(null, 'objectiveDefs');
export const setStatDefs = setDefs.bind(null, 'statDefs');
