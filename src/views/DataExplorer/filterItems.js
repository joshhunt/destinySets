import { mapValues, flatMap, isArray } from 'lodash';
import _get from 'lodash/get';

import fancySearch from 'app/lib/fancySearch';

// import {
//   HUNTER,
//   TITAN,
//   WARLOCK,
//   CLASS_ITEMS,
//   WEAPON,
//   ARMOR,
//   GHOST,
//   SPARROW,
//   SHIP,
//   SHADER,
//   EMBLEM,
//   EMOTES,
//   KINETIC_WEAPON,
//   ENERGY_WEAPON,
//   POWER_WEAPON,
//   MODS1,
//   MODS2,
//   CLAN_BANNER,
//   LEGENDARY,
//   EXOTIC,
//   UNCOMMON,
//   RARE,
//   COMMON
// } from 'app/lib/destinyEnums';

const get = (obj, term, opt) => _get(obj, term, '').toLowerCase();

const MAX_ITEMS = 50;

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len;
  }
  return result;
}

function listForDefinition(search, defs) {
  const match = search.match(/data:(\w+)/);
  if (!(match && match[1])) {
    return [];
  }

  return defs[match[1]];
}

function tryJson(string) {
  try {
    return JSON.parse(string);
  } catch (e) {
    return null;
  }
}

export default function filterDefinitions(searchTerm, _defs) {
  const defs = mapValues(_defs, obj => Object.values(obj));

  let hashSearchList = tryJson(searchTerm);
  hashSearchList = isArray(hashSearchList) ? hashSearchList : [];

  if (searchTerm.length === 0) {
    return getRandom(defs.item.filter(item => !item.redacted), MAX_ITEMS);
  }

  if (searchTerm.length < 3) {
    return null;
  }

  const search = searchTerm.toLowerCase();

  if (search.includes('data:')) {
    return listForDefinition(search, defs);
  }

  if (search.includes(':')) {
    return fancySearch(search, defs);
  }

  const searchAsNum = parseInt(searchTerm, 10);
  const maxItems = searchTerm.length > 4 ? 1000 : MAX_ITEMS;

  const filteredItems = flatMap(Object.values(defs), dataList => {
    return dataList
      .filter(item => {
        const hash = _get(item, 'hash');
        const name = get(item, 'displayProperties.name');
        const description = get(item, 'displayProperties.description');
        const itemType = get(item, 'itemTypeDisplayName');
        const vendorIdentifier = get(item, 'vendorIdentifier');

        return (
          hashSearchList.includes(hash) ||
          name.includes(search) ||
          description.includes(search) ||
          itemType.includes(search) ||
          vendorIdentifier.includes(search) ||
          item.hash === searchAsNum
        );
      })
      .slice(0, maxItems);
  });

  return filteredItems;
}
