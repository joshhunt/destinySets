const SET_PROFILE = 'Set Profile';
const SET_DEFINITIONS = 'Set Definitions';

export default function reducer(store = {}, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...store,
        profile: action.profile
      };

    case SET_DEFINITIONS:
      return {
        ...store,
        [action.name]: action.defs
      };

    default:
      return store;
  }
}

export function setProfile(profile) {
  return { type: SET_PROFILE, profile };
}

function setDefs(name, defs) {
  return { type: SET_DEFINITIONS, name, defs };
}

export const setVendorDefs = setDefs.bind(null, 'vendorDefs');
export const setItemDefs = setDefs.bind(null, 'itemDefs');
export const setObjectiveDefs = setDefs.bind(null, 'objectiveDefs');
