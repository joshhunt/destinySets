import { uniqBy, groupBy, sortBy, mapValues } from 'lodash';

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
} from './definitionSources';

const tierTypeNameValue = {
  Common: 4,
  Uncommon: 3,
  Rare: 2,
  Legendary: 1,
  Exotic: 0,
};

export default function sortItems(_items, verbose = false) {
  const items = uniqBy(_items, item => item.hash);

  const _sectionItems = groupBy(items, item => {
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
    { title: 'Weapons', items: sectionItems.weapon },
    { title: 'Hunter armor', items: sectionItems[HUNTER] },
    { title: 'Titan armor', items: sectionItems[TITAN] },
    { title: 'Warlock armor', items: sectionItems[WARLOCK] },
    { title: 'Emotes', items: sectionItems.emotes },
    { title: 'Ghosts', items: sectionItems.ghosts },
    { title: 'Ships', items: sectionItems.ships },
    { title: 'Sparrows', items: sectionItems.sparrows },
    { title: 'Emblems', items: sectionItems.emblems },
    { title: 'Shaders', items: sectionItems.shaders },
    { title: 'Other', items: sectionItems.other },
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
        title: section.title,
        items,
      };
    });

  return sections;
}
