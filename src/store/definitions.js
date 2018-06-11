import proxyifyDefs from './debugProxifyDefs';

export const SET_DEFINITIONS = 'Set definitions';

export default function definitionsReducer(state = {}, action) {
  switch (action.type) {
    case SET_DEFINITIONS:
      return {
        ...state,
        [action.name]:
          action.name === 'itemDefs' ? proxyifyDefs(action.defs) : action.defs
      };

    default:
      return state;
  }
}

function setDefs(name, defs) {
  return { type: SET_DEFINITIONS, name, defs };
}

export const setVendorDefs = setDefs.bind(null, 'vendorDefs');
export const setItemDefs = setDefs.bind(null, 'itemDefs');
export const setObjectiveDefs = setDefs.bind(null, 'objectiveDefs');
export const setStatDefs = setDefs.bind(null, 'statDefs');
