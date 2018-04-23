import { intersection } from 'lodash';

import * as enums from 'app/lib/destinyEnums';
import { getLower as get } from 'app/lib/utils';

const tierType = hash => item => item.inventory.tierTypeHash === hash;
const classType = value => item => item.classType === value && !item.redacted;
const itemCategory = value => item =>
  (item.itemCategoryHashes || []).includes(value);

const isWeapon = itemCategory(enums.WEAPON);
const isArmor = itemCategory(enums.ARMOR);
const isLegendary = tierType(enums.LEGENDARY);
const isExotic = tierType(enums.EXOTIC);
const isArmorOrnament = itemCategory(enums.ARMOR_MODS_ORNAMENTS);
const isWeaponOrnament = itemCategory(enums.WEAPON_MODS_ORNAMENTS);

const COLLECTABLE = [
  enums.WEAPON,
  enums.ARMOR,
  enums.GHOST,
  enums.SPARROW,
  enums.SHIP,
  enums.SHADER,
  enums.EMBLEM
];

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
    return itemFilter(items, classType(enums.HUNTER));
  },

  'is:titan': items => {
    return itemFilter(items, classType(enums.TITAN));
  },

  'is:warlock': items => {
    return itemFilter(items, classType(enums.WARLOCK));
  },

  'is:weapon': items => {
    return itemFilter(items, isWeapon);
  },

  'is:kinetic': items => itemFilter(items, itemCategory(enums.KINETIC_WEAPON)),
  'is:energy': items => itemFilter(items, itemCategory(enums.ENERGY_WEAPON)),
  'is:power': items => itemFilter(items, itemCategory(enums.POWER_WEAPON)),

  'is:armor': items => {
    return items.filter(isArmor);
  },

  'is:gear': items => {
    return itemFilter(items, item => {
      const categories = item.itemCategoryHashes || [];
      return (
        categories.includes(enums.ARMOR) ||
        categories.includes(enums.WEAPON) ||
        categories.includes(enums.GHOST)
      );
    });
  },

  'is:ghost': items => {
    return itemFilter(items, itemCategory(enums.GHOST));
  },

  'is:sparrow': items => {
    return itemFilter(items, itemCategory(enums.SPARROW));
  },

  'is:ship': items => {
    return itemFilter(items, itemCategory(enums.SHIP));
  },

  'is:shader': items => {
    return itemFilter(items, itemCategory(enums.SHADER));
  },

  'is:emote': items => {
    return itemFilter(items, itemCategory(enums.EMOTES));
  },

  'is:emblem': items => {
    return itemFilter(items, itemCategory(enums.EMBLEM));
  },

  'is:classitem': items => {
    return itemFilter(items, itemCategory(enums.CLASS_ITEMS));
  },

  // 'is:notinset': items => {
  //   return items.filter(item => {
  //     return !SET_ITEMS.includes(item.hash);
  //   });
  // },

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
    return itemFilter(items, tierType(enums.UNCOMMON));
  },

  'is:rare': items => {
    return itemFilter(items, tierType(enums.RARE));
  },

  'is:common': items => {
    return itemFilter(items, tierType(enums.COMMON));
  },

  'is:mod': items => {
    return itemFilter(items, item => {
      return itemCategory(enums.MODS1)(item) || itemCategory(enums.MODS2)(item);
    });
  },

  'is:ornament': items => {
    return itemFilter(items, item => {
      return isArmorOrnament(item) || isWeaponOrnament(item);
    });
  },

  'is:clanbanner': items => {
    return itemFilter(items, itemCategory(enums.CLAN_BANNER));
  }
};

export const fancySearchTerms = Object.keys(fancySearchFns);

export default function fancySearch(search, defs, opts = { hashOnly: false }) {
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
