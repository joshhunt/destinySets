import { isObject, isArray, isNumber, isUndefined } from 'lodash';

const ITEM_DEF_KEYS = [];
window.__ITEM_DEF_KEYS = ITEM_DEF_KEYS;
const UNDEFINED_ITEM_DEF_KEYS = [];
window.__UNDEFINED_ITEM_DEF_KEYS = UNDEFINED_ITEM_DEF_KEYS;
const DEBUG_PROXIFY_ITEM_DEFS = true;

function pushUniquely(arr, value) {
  if (!arr.includes(value)) {
    arr.push(value);
  }
}

export default function proxyifyDefs(defs, prevKeys = []) {
  if (!DEBUG_PROXIFY_ITEM_DEFS) {
    return defs;
  }

  const p = new Proxy(defs, {
    get: (obj, prop) => {
      const keys = [...prevKeys, prop];
      const keysOfInterest = keys.slice(1).join('.');

      pushUniquely(ITEM_DEF_KEYS, keysOfInterest);

      const value = obj[prop];

      if (isUndefined(value)) {
        pushUniquely(UNDEFINED_ITEM_DEF_KEYS, keysOfInterest);
        return value;
      } else if (isArray(value)) {
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
