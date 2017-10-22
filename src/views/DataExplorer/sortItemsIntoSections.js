import { uniqBy, groupBy } from 'lodash';

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
} from './definitionSources';

export default function sortItems(_items, verbose = false) {
  const items = uniqBy(_items, item => item.hash);

  const sectionItems = groupBy(items, item => {
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
    } else if (item.itemCategoryHashes.includes(ARMOR)) {
      return item.classType;
    } else {
      return 'other';
    }
  });

  console.log(sectionItems);

  const sections = [
    { title: 'Weapons', items: sectionItems.weapon },
    { title: 'Hunter armor', items: sectionItems[HUNTER] },
    { title: 'Titan armor', items: sectionItems[TITAN] },
    { title: 'Warlock armor', items: sectionItems[WARLOCK] },
    { title: 'Emotes', items: sectionItems.emotes },
    { title: 'Ghosts', items: sectionItems.ghosts },
    { title: 'Ships', items: sectionItems.ships },
    { title: 'Sparrows', items: sectionItems.sparrows },
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
