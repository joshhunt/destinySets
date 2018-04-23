import { get, uniqBy, groupBy, sortBy, mapValues } from 'lodash';

import {
  HUNTER,
  TITAN,
  WARLOCK,
  WEAPON,
  ARMOR,
  GHOST,
  EMOTES,
  SHIP,
  SPARROW,
  EMBLEM,
  SHADER,
  HELMET,
  ARMS,
  CHEST,
  LEGS,
  CLASS_ITEM,
  ARMOR_MODS_ORNAMENTS,
  WEAPON_MODS_ORNAMENTS,
  ARMOR_MODS_ORNAMENTS_HUNTER,
  ARMOR_MODS_ORNAMENTS_TITAN,
  ARMOR_MODS_ORNAMENTS_WARLOCK,
  EXOTIC,
  LEGENDARY,
  UNCOMMON,
  RARE,
  COMMON
} from 'app/lib/destinyEnums';

const tierTypeNameValue = {
  Common: 4,
  Uncommon: 3,
  Rare: 2,
  Legendary: 1,
  Exotic: 0
};

export const isArmorOrnament = item =>
  item.itemCategoryHashes &&
  item.itemCategoryHashes.includes(ARMOR_MODS_ORNAMENTS);

const RARITY_SCORE = {
  [EXOTIC]: 100,
  [LEGENDARY]: 1000,
  [UNCOMMON]: 10000,
  [RARE]: 100000,
  [COMMON]: 1000000
};

function scoreItem(item) {
  const plugCategoryIdentifier = get(item, 'plug.plugCategoryIdentifier');
  if (isArmorOrnament(item) && plugCategoryIdentifier) {
    if (plugCategoryIdentifier.includes('head')) {
      return 1;
    } else if (plugCategoryIdentifier.includes('arms')) {
      return 2;
    } else if (plugCategoryIdentifier.includes('chest')) {
      return 3;
    } else if (plugCategoryIdentifier.includes('legs')) {
      return 4;
    } else if (plugCategoryIdentifier.includes('class')) {
      return 5;
    }
  }

  if (item.itemCategoryHashes.includes(HELMET)) {
    return 1;
  } else if (item.itemCategoryHashes.includes(ARMS)) {
    return 2;
  } else if (item.itemCategoryHashes.includes(CHEST)) {
    return 3;
  } else if (item.itemCategoryHashes.includes(LEGS)) {
    return 4;
  } else if (item.itemCategoryHashes.includes(CLASS_ITEM)) {
    return 5;
  }
}

function sortArmor(items) {
  return sortBy(items, item => {
    const rarity = RARITY_SCORE[item.inventory.tierTypeHash] || 0;
    return rarity + scoreItem(item);
  });
}

const isCategory = (item, category) =>
  item.itemCategoryHashes.includes(category);

export default function sortItems(_items, verbose = false) {
  const items = uniqBy(_items, item => item.hash);

  const _sectionItems = groupBy(items, item => {
    if (item.itemCategoryHashes.includes(ARMOR_MODS_ORNAMENTS)) {
      if (isCategory(item, ARMOR_MODS_ORNAMENTS_TITAN)) {
        return TITAN;
      } else if (isCategory(item, ARMOR_MODS_ORNAMENTS_WARLOCK)) {
        return WARLOCK;
      } else if (isCategory(item, ARMOR_MODS_ORNAMENTS_HUNTER)) {
        return HUNTER;
      }
    } else if (item.itemCategoryHashes.includes(WEAPON)) {
      return 'weapon';
    } else if (item.itemCategoryHashes.includes(GHOST)) {
      return 'ghosts';
    } else if (item.itemCategoryHashes.includes(EMOTES)) {
      return 'emotes';
    } else if (item.itemCategoryHashes.includes(SHIP)) {
      return 'ships';
    } else if (item.itemCategoryHashes.includes(SPARROW)) {
      return 'sparrows';
    } else if (item.itemCategoryHashes.includes(EMBLEM)) {
      return 'emblems';
    } else if (item.itemCategoryHashes.includes(SHADER)) {
      return 'shaders';
    } else if (item.itemCategoryHashes.includes(ARMOR)) {
      return item.classType;
    } else if (item.itemCategoryHashes.includes(WEAPON_MODS_ORNAMENTS)) {
      return 'weaponOrnaments';
    } else {
      return 'other';
    }
  });

  const sectionItems = mapValues(_sectionItems, items => {
    return sortBy(items, item => {
      return tierTypeNameValue[item.inventory.tierTypeName];
    });
  });

  const sections = [
    { name: 'Weapons', items: sectionItems.weapon },
    { name: 'Hunter armor', items: sortArmor(sectionItems[HUNTER]) },
    { name: 'Titan armor', items: sortArmor(sectionItems[TITAN]) },
    { name: 'Warlock armor', items: sortArmor(sectionItems[WARLOCK]) },
    { name: 'Emotes', items: sectionItems.emotes },
    { name: 'Ghosts', items: sectionItems.ghosts },
    { name: 'Ships', items: sectionItems.ships },
    { name: 'Sparrows', items: sectionItems.sparrows },
    { name: 'Emblems', items: sectionItems.emblems },
    { name: 'Shaders', items: sectionItems.shaders },
    { name: 'Weapon Ornaments', items: sectionItems.weaponOrnaments },
    { name: 'Other', items: sectionItems.other }
  ]
    .filter(({ items }) => {
      return items && items.length > 0;
    })
    .map(section => {
      if (verbose) {
        return section;
      }

      const items = section.items.map(item => item.hash);
      return {
        ...section,
        items
      };
    });

  return sections;
}
