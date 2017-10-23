import { get as _get, intersection } from 'lodash';

import sets from '../sets.js';

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
} from './definitionSources';

const get = (obj, term, opt) => _get(obj, term, '').toLowerCase();

const MAX_ITEMS = 50;

let SET_ITEMS = [];

sets.forEach(category => {
  category.sets.forEach(set => {
    set.sections.forEach(section => {
      SET_ITEMS = SET_ITEMS.concat(section.items);
    });
  });
});

console.log('SET_ITEMS:', SET_ITEMS);

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

const tierTypeName = value => item => item.inventory.tierTypeName === value;
const classType = value => item => item.classType === value && !item.redacted;
const itemCategory = value => item =>
  (item.itemCategoryHashes || []).includes(value);

const isWeapon = itemCategory(WEAPON);
const isArmor = itemCategory(ARMOR);
const isLegendary = tierTypeName('Legendary');
const isExotic = tierTypeName('Exotic');

const COLLECTABLE = [WEAPON, ARMOR, GHOST, SPARROW, SHIP, SHADER, EMBLEM];

export const fancySearchFns = {
  'is:collectable': items => {
    return items.filter(item => {
      if (!item.itemCategoryHashes) {
        return false;
      }

      if (isWeapon(item) || isArmor(item)) {
        return isLegendary(item) || isExotic(item);
      }

      return !!intersection(item.itemCategoryHashes, COLLECTABLE).length;
    });
  },

  'is:hunter': items => {
    return items.filter(classType(HUNTER));
  },

  'is:titan': items => {
    return items.filter(classType(TITAN));
  },

  'is:warlock': items => {
    return items.filter(classType(WARLOCK));
  },

  'is:weapon': items => {
    return items.filter(isWeapon);
  },

  'is:armor': items => {
    return items.filter(isArmor);
  },

  'is:gear': items => {
    return items.filter(item => {
      const categories = item.itemCategoryHashes || [];
      return categories.includes(ARMOR) || categories.includes(WEAPON);
    });
  },

  'is:ghost': items => {
    return items.filter(itemCategory(GHOST));
  },

  'is:sparrow': items => {
    return items.filter(itemCategory(SPARROW));
  },

  'is:ship': items => {
    return items.filter(itemCategory(SHIP));
  },

  'is:shader': items => {
    return items.filter(itemCategory(SHADER));
  },

  'is:emblem': items => {
    return items.filter(itemCategory(EMBLEM));
  },

  'is:classitem': items => {
    return items.filter(itemCategory(CLASS_ITEMS));
  },

  'is:notinset': items => {
    return items.filter(item => {
      return !SET_ITEMS.includes(item.hash);
    });
  },

  'is:transmat': items => {
    return items.filter(item => {
      const itdn = get(item, 'itemTypeDisplayName');
      const result = itdn.includes('transmat effect');

      return result;
    });
  },

  'is:exotic': items => {
    return items.filter(tierTypeName('Exotic'));
  },

  'is:legendary': items => {
    return items.filter(tierTypeName('Legendary'));
  },
};

export const fancySearchTerms = Object.keys(fancySearchFns);

export function fancySearch(search, allItems) {
  const queries = search.split(' ').filter(s => s.includes(':'));

  const filteredItems = queries.reduce((items, query) => {
    const searchFunc = fancySearchFns[query];

    if (!searchFunc) {
      return items;
    }

    return searchFunc(items, query);
  }, allItems);

  if (filteredItems.length === allItems.length) {
    return null;
  }

  return filteredItems;
}

export default function filterItems(searchTerm, allItems) {
  if (searchTerm.length === 0) {
    return getRandom(allItems.filter(item => !item.redacted), MAX_ITEMS);
  }

  if (searchTerm.length < 3) {
    return null;
  }

  const search = searchTerm.toLowerCase();

  if (search.includes(':')) {
    return fancySearch(search, allItems);
  }

  const searchAsNum = parseInt(searchTerm, 10);
  const maxItems = searchTerm.length > 4 ? 1000 : MAX_ITEMS;

  const filteredItems = allItems
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
