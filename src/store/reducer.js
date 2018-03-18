import { HUNTER, TITAN, WARLOCK } from 'app/lib/destinyEnums';

const SET_PROFILE = 'Set profile data';
const SET_VENDORS = 'Set vendor data';
const SET_DEFINITIONS = 'Set definitions';
const TOGGLE_FILTER_KEY = 'Toggle filter value';

const INITIAL_STORE = {
  filters: {
    [HUNTER]: false,
    [TITAN]: false,
    [WARLOCK]: true
  }
};

export default function reducer(state = INITIAL_STORE, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
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

    default:
      return state;
  }
}

export function setProfile(profile) {
  return { type: SET_PROFILE, profile };
}

export function setVendors(vendors) {
  return { type: SET_VENDORS, vendors };
}

export function toggleFilterKey(filterKey) {
  return { type: TOGGLE_FILTER_KEY, filterKey };
}

function setDefs(name, defs) {
  return { type: SET_DEFINITIONS, name, defs };
}

export const setVendorDefs = setDefs.bind(null, 'vendorDefs');
export const setItemDefs = setDefs.bind(null, 'itemDefs');
export const setObjectiveDefs = setDefs.bind(null, 'objectiveDefs');
export const setStatDefs = setDefs.bind(null, 'statDefs');
