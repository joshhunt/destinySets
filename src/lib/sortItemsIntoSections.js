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
  CLASS_ITEM
} from 'app/lib/destinyEnums';

const tierTypeNameValue = {
  Common: 4,
  Uncommon: 3,
  Rare: 2,
  Legendary: 1,
  Exotic: 0
};

export const isOrnament = item =>
  item.inventory &&
  item.inventory.stackUniqueLabel &&
  item.itemTypeDisplayName &&
  item.itemTypeDisplayName.toLowerCase().includes('ornament');

function sortArmor(items) {
  return sortBy(items, item => {
    const plugCategoryIdentifier = get(item, 'plug.plugCategoryIdentifier');
    if (isOrnament(item) && plugCategoryIdentifier) {
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
  });
}

export default function sortItems(_items, verbose = false) {
  const items = uniqBy(_items, item => item.hash);

  const _sectionItems = groupBy(items, item => {
    // this works in english only
    if (isOrnament(item)) {
      if (item.inventory.stackUniqueLabel.includes('warlock')) {
        return WARLOCK;
      } else if (item.inventory.stackUniqueLabel.includes('titan')) {
        return TITAN;
      } else if (item.inventory.stackUniqueLabel.includes('hunter')) {
        return HUNTER;
      }
    }

    if (item.itemCategoryHashes.includes(WEAPON)) {
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
