import { intersection, mapValues, flatMap } from 'lodash';
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
  COMMON,
} from 'app/lib/destinyEnums';

const get = (obj, term, opt) => _get(obj, term, '').toLowerCase();

const DDDD = [
  316740353,
  1154659864,
  3909352274,
  2661272172,
  2661272173,
  3956230125,
  779962716,
  3306267716,
  4036178150,
  221164697,
  3734501342,
  2538439951,
  1584837156,
  1584837157,
  1397284432,
  1816495538,
  3287805174,
  3287805175,
  3287805176,
  3287805177,
  3287805178,
  3287805179,
  3287805180,
  3287805181,
  3287805183,
  3105953706,
  3105953707,
  63024229,
  1423305584,
  1423305585,
  1423305586,
  1423305587,
  1423305588,
  1423305589,
  1423305590,
  1984190529,
  1423305599,
  1423305598,
  1423305591,
  3161524490,
  3569791559,
  317465074,
  317465075,
  3140833552,
  3140833553,
  3140833554,
  3140833555,
  3140833556,
  3140833557,
  3140833558,
  3140833559,
  3729709035,
  3177119978,
  1602334068,
  215596672,
  889413643,
  1873273984,
  2593080269,
];

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
  'is:collectable': items => {
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

  'is:hunter': items => {
    return itemFilter(items, classType(HUNTER));
  },

  'is:titan': items => {
    return itemFilter(items, classType(TITAN));
  },

  'is:warlock': items => {
    return itemFilter(items, classType(WARLOCK));
  },

  'is:weapon': items => {
    return itemFilter(items, isWeapon);
  },

  'is:kinetic': items => itemFilter(items, itemCategory(KINETIC_WEAPON)),
  'is:energy': items => itemFilter(items, itemCategory(ENERGY_WEAPON)),
  'is:power': items => itemFilter(items, itemCategory(POWER_WEAPON)),

  'is:armor': items => {
    return items.filter(isArmor);
  },

  'is:gear': items => {
    return itemFilter(items, item => {
      const categories = item.itemCategoryHashes || [];
      return categories.includes(ARMOR) || categories.includes(WEAPON);
    });
  },

  'is:ghost': items => {
    return itemFilter(items, itemCategory(GHOST));
  },

  'is:sparrow': items => {
    return itemFilter(items, itemCategory(SPARROW));
  },

  'is:ship': items => {
    return itemFilter(items, itemCategory(SHIP));
  },

  'is:shader': items => {
    return itemFilter(items, itemCategory(SHADER));
  },

  'is:emote': items => {
    return itemFilter(items, itemCategory(EMOTES));
  },

  'is:emblem': items => {
    return itemFilter(items, itemCategory(EMBLEM));
  },

  'is:classitem': items => {
    return itemFilter(items, itemCategory(CLASS_ITEMS));
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
    return itemFilter(items, isExotic);
  },

  'is:legendary': items => {
    return itemFilter(items, isLegendary);
  },

  'is:uncommon': items => {
    return itemFilter(items, tierType(UNCOMMON));
  },

  'is:rare': items => {
    return itemFilter(items, tierType(RARE));
  },

  'is:common': items => {
    return itemFilter(items, tierType(COMMON));
  },

  'is:mod': items => {
    return itemFilter(items, item => {
      return itemCategory(MODS1)(item) || itemCategory(MODS2)(item);
    });
  },

  'is:ornament': items => {
    return itemFilter(items, item => {
      return (
        (itemCategory(MODS1)(item) || itemCategory(MODS2)(item)) &&
        item.itemTypeDisplayName.toLowerCase().includes('ornament')
      );
    });
  },

  'is:clanbanner': items => {
    return itemFilter(items, itemCategory(CLAN_BANNER));
  },

  'is:dawning': items => {
    return itemFilter(items, item => {
      return DDDD.includes(item.hash);
    });
  },
};

export const fancySearchTerms = Object.keys(fancySearchFns);

export function fancySearch(search, defs, opts = { hashOnly: false }) {
  const queries = search.split(' ').filter(s => s.includes(':'));

  const filteredItems = queries.reduce((items, query) => {
    const searchFunc = fancySearchFns[query];

    if (!searchFunc) {
      return items;
    }

    return searchFunc(items, query);
  }, defs.item);

  if (filteredItems.length === defs.item.length) {
    return null;
  }

  return filteredItems;
}

function listForDefinition(search, defs) {
  const match = search.match(/data:(\w+)/);
  if (!(match && match[1])) {
    return [];
  }

  return defs[match[1]];
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
        const name = get(item, 'displayProperties.name');
        const description = get(item, 'displayProperties.description');
        const itemType = get(item, 'itemTypeDisplayName');
        const vendorIdentifier = get(item, 'vendorIdentifier');

        return (
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
