import { isObject, isArray, isNumber } from 'lodash';

const ITEM_DEF_KEYS = [];
window.__ITEM_DEF_KEYS = ITEM_DEF_KEYS;
const DEBUG_PROXIFY_ITEM_DEFS = false;

export default function proxyifyDefs(defs, prevKeys = []) {
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
