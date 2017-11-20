import { merge, mapValues } from 'lodash';

import { fancySearch } from 'app/views/DataExplorer/filterItems';
import sortItemsIntoSections from 'app/views/DataExplorer/sortItemsIntoSections';
import * as destiny from 'app/lib/destiny';
import * as ls from 'app/lib/ls';
import { logItems } from './utils';
import setsSets from '../sets.js';
import allItemsSets from '../allItems.js';

const VARIATIONS = {
  sets: setsSets,
  allItems: allItemsSets
};

export function mapItems(itemHashes, itemDefs, inventory) {
  console.log('mapItems', { itemHashes, itemDefs, inventory });
  return itemHashes
    .map(itemHash => {
      const item = itemDefs[itemHash];

      if (!item) {
        console.warn('Unable to find item definition for ' + itemHash);
        return null;
      }

      return {
        $obtained: inventory.includes(item.hash),
        ...item
      };
    })
    .filter(Boolean);
}

export default function processSets(args, dataCallback) {
  const { itemDefs, vendorDefs, profile, variation, xurItems } = args;

  const sets = VARIATIONS[variation];

  const xurHashes = xurItems || [];

  const allItems = Object.values(itemDefs);

  const kioskItems = profile
    ? destiny.collectItemsFromKiosks(profile, itemDefs, vendorDefs)
    : [];

  // const lsInventory = ls.getInventory();
  // const inventory = destiny.collectItemsFromProfile(profile);
  // const inventory = [...inventory, ...kioskItems];

  const inventory = (profile && destiny.collectInventory(profile)) || {};
  const inventoryHashes = Object.keys(inventory);

  console.log('%cInventory', 'font-weight: bold', inventory);

  try {
    profile && itemDefs && logItems(profile, itemDefs, vendorDefs);
  } catch (e) {
    console.error('Unable to log profile');
    console.log(e);
  }

  ls.saveInventory(mapValues(inventory, () => ({ $fromLocalStorage: true })));

  const rawGroups = sets.map(group => {
    const sets = group.sets.map(set => {
      const preSections = set.fancySearchTerm
        ? sortItemsIntoSections(fancySearch(set.fancySearchTerm, allItems))
        : set.sections;

      const sections = preSections.map(section => {
        console.log('section', JSON.parse(JSON.stringify(section)));
        const preItems =
          section.items ||
          fancySearch(section.fancySearchTerm, allItems).map(i => i.hash);

        const items = mapItems(preItems, itemDefs, inventoryHashes);

        return merge(section, { items });
      });

      return merge(set, { sections });
    });

    return merge(group, { sets });
  });

  // filterGroups(rawGroups);

  const xurItemsGood = xurHashes
    .filter(hash => !inventoryHashes.includes(Number(hash)))
    .map(hash => itemDefs[hash]);

  dataCallback({
    rawGroups,
    xurItems: xurItemsGood,
    hasInventory: inventoryHashes.length > 0,
    loading: false,
    shit: null
  });
}
