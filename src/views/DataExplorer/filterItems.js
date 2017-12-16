import { intersection, mapValues } from 'lodash';
import _get from 'lodash/get';

import setPages from 'app/setData';

import {
  HUNTER,
  TITAN,
  WARLOCK,
  CLASS_ITEMS,
  WEAPON,
  ARMOR,
  GHOST,
  SPARROW,
  SHIP,
  SHADER,
  EMBLEM,
  EMOTES,
  KINETIC_WEAPON,
  ENERGY_WEAPON,
  POWER_WEAPON,
  MODS1,
  MODS2,
  CLAN_BANNER,
  LEGENDARY,
  EXOTIC,
  UNCOMMON,
  RARE,
  COMMON
} from 'app/lib/destinyEnums';

const get = (obj, term, opt) => _get(obj, term, '').toLowerCase();

const MAX_ITEMS = 50;

let SET_ITEMS = [];

setPages.forEach(sets => {
  sets.setData.forEach(category => {
    category.sets.forEach(set => {
      set.sections.forEach(section => {
        SET_ITEMS = SET_ITEMS.concat(section.items);
      });
    });
  });
});

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

const tierType = hash => item => item.inventory.tierTypeHash === hash;
const classType = value => item => item.classType === value && !item.redacted;
const itemCategory = value => item =>
  (item.itemCategoryHashes || []).includes(value);

const isWeapon = itemCategory(WEAPON);
const isArmor = itemCategory(ARMOR);
const isLegendary = tierType(LEGENDARY);
const isExotic = tierType(EXOTIC);

const COLLECTABLE = [WEAPON, ARMOR, GHOST, SPARROW, SHIP, SHADER, EMBLEM];

const itemFilter = (items, fn) => {
  return items.filter(item => {
    return (
      item.displayProperties.name &&
      item.displayProperties.name.length > 0 &&
      fn(item)
    );
  });
};

export const fancySearchFns = {
  'is:collectable': ({ item: items }) => {
    return itemFilter(items, item => {
      if (!item.itemCategoryHashes) {
        return false;
      }

      if (isWeapon(item) || isArmor(item)) {
        return isLegendary(item) || isExotic(item);
      }

      return !!intersection(item.itemCategoryHashes, COLLECTABLE).length;
    });
  },

  'is:hunter': ({ item: items }) => {
    return itemFilter(items, classType(HUNTER));
  },

  'is:titan': ({ item: items }) => {
    return itemFilter(items, classType(TITAN));
  },

  'is:warlock': ({ item: items }) => {
    return itemFilter(items, classType(WARLOCK));
  },

  'is:weapon': ({ item: items }) => {
    return itemFilter(items, isWeapon);
  },

  'is:kinetic': ({ item: items }) =>
    itemFilter(items, itemCategory(KINETIC_WEAPON)),
  'is:energy': ({ item: items }) =>
    itemFilter(items, itemCategory(ENERGY_WEAPON)),
  'is:power': ({ item: items }) =>
    itemFilter(items, itemCategory(POWER_WEAPON)),

  'is:armor': ({ item: items }) => {
    return items.filter(isArmor);
  },

  'is:gear': ({ item: items }) => {
    return itemFilter(items, item => {
      const categories = item.itemCategoryHashes || [];
      return categories.includes(ARMOR) || categories.includes(WEAPON);
    });
  },

  'is:ghost': ({ item: items }) => {
    return itemFilter(items, itemCategory(GHOST));
  },

  'is:sparrow': ({ item: items }) => {
    return itemFilter(items, itemCategory(SPARROW));
  },

  'is:ship': ({ item: items }) => {
    return itemFilter(items, itemCategory(SHIP));
  },

  'is:shader': ({ item: items }) => {
    return itemFilter(items, itemCategory(SHADER));
  },

  'is:emote': ({ item: items }) => {
    return itemFilter(items, itemCategory(EMOTES));
  },

  'is:emblem': ({ item: items }) => {
    return itemFilter(items, itemCategory(EMBLEM));
  },

  'is:classitem': ({ item: items }) => {
    return itemFilter(items, itemCategory(CLASS_ITEMS));
  },

  'is:notinset': ({ item: items }) => {
    return items.filter(item => {
      return !SET_ITEMS.includes(item.hash);
    });
  },

  'is:transmat': ({ item: items }) => {
    return items.filter(item => {
      const itdn = get(item, 'itemTypeDisplayName');
      const result = itdn.includes('transmat effect');

      return result;
    });
  },

  'is:exotic': ({ item: items }) => {
    return itemFilter(items, isExotic);
  },

  'is:legendary': ({ item: items }) => {
    return itemFilter(items, isLegendary);
  },

  'is:uncommon': ({ item: items }) => {
    return itemFilter(items, tierType(UNCOMMON));
  },

  'is:rare': ({ item: items }) => {
    return itemFilter(items, tierType(RARE));
  },

  'is:common': ({ item: items }) => {
    return itemFilter(items, tierType(COMMON));
  },

  'is:mod': ({ item: items }) => {
    return itemFilter(items, item => {
      return itemCategory(MODS1)(item) || itemCategory(MODS2)(item);
    });
  },

  'is:ornament': ({ item: items }) => {
    return itemFilter(items, item => {
      return (
        (itemCategory(MODS1)(item) || itemCategory(MODS2)(item)) &&
        item.itemTypeDisplayName.toLowerCase().includes('ornament')
      );
    });
  },

  'is:clanbanner': ({ item: items }) => {
    return itemFilter(items, itemCategory(CLAN_BANNER));
  }
};

export const fancySearchTerms = Object.keys(fancySearchFns);

export function fancySearch(search, defs, opts = { hashOnly: false }) {
  const queries = search.split(' ').filter(s => s.includes(':'));

  const filteredItems = queries.reduce((items, query) => {
    const searchFunc = fancySearchFns[query];

    if (!searchFunc) {
      return items;
    }

    console.log('defs:', defs);
    return searchFunc(defs, query);
  }, defs.items);

  if (filteredItems.length === defs.items.length) {
    return null;
  }

  return filteredItems;
}

export default function filterDefinitions(searchTerm, _defs) {
  const defs = mapValues(_defs, obj => Object.values(obj));

  if (searchTerm.length === 0) {
    return getRandom(defs.item.filter(item => !item.redacted), MAX_ITEMS);
  }

  if (searchTerm.length < 3) {
    return null;
  }

  const search = searchTerm.toLowerCase();

  if (search.includes(':')) {
    return fancySearch(search, defs);
  }

  const searchAsNum = parseInt(searchTerm, 10);
  const maxItems = searchTerm.length > 4 ? 1000 : MAX_ITEMS;

  const filteredItems = defs.item
    .filter(item => {
      const name = get(item, 'displayProperties.name');
      const description = get(item, 'displayProperties.description');
      const itemType = get(item, 'itemTypeDisplayName');

      return (
        name.includes(search) ||
        description.includes(search) ||
        itemType.includes(search) ||
        item.hash === searchAsNum
      );
    })
    .slice(0, maxItems);

  return filteredItems;
}
