import { merge, mapValues, isArray, isNumber, cloneDeep } from 'lodash';

import { fancySearch } from 'app/views/DataExplorer/filterItems';
import sortItemsIntoSections from 'app/views/DataExplorer/sortItemsIntoSections';
import collectInventory from 'app/lib/collectInventory';
import * as ls from 'app/lib/ls';
import { logItems } from './utils';
import setsSets from '../sets.js';
import allItemsSets from '../allItems.js';

const VARIATIONS = {
  sets: setsSets,
  allItems: allItemsSets
};

export function mapItems(itemHashes, itemDefs, inventory) {
  return itemHashes
    .map(itemHash => {
      const item = itemDefs[itemHash];

      if (!item) {
        console.warn('Unable to find item definition for ' + itemHash);
        return null;
      }

      const inventoryItem = inventory[itemHash];

      return {
        $obtained: !!inventoryItem,
        $inventory: inventoryItem,
        ...item
      };
    })
    .filter(Boolean);
}

export default function processSets(args, dataCallback) {
  const { itemDefs, vendorDefs, profile, variation, xurItems } = args;

  const sets = cloneDeep(VARIATIONS[variation]);

  const xurHashes = xurItems || [];

  const allItems = Object.values(itemDefs);

  // const kioskItems = profile
  //   ? destiny.collectItemsFromKiosks(profile, itemDefs, vendorDefs)
  //   : [];

  // const lsInventory = ls.getInventory();
  // const inventory = destiny.collectItemsFromProfile(profile);
  // const inventory = [...inventory, ...kioskItems];

  const inventory = (profile && collectInventory(profile, vendorDefs)) || {};
  const inventoryHashes = Object.keys(inventory);

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
        if (!isArray(section.items) || !isNumber(section.items[0])) {
          throw new Error('Section not in correct format');
        }

        const preItems =
          section.items ||
          fancySearch(section.fancySearchTerm, allItems).map(i => i.hash);

        const items = mapItems(preItems, itemDefs, inventory, inventoryHashes);

        return merge(section, { items });
      });

      return merge(set, { sections });
    });

    return merge(group, { sets });
  });

  const xurItemsGood = xurHashes
    .filter(hash => !inventoryHashes.includes(Number(hash)))
    .map(hash => itemDefs[hash]);

  const payload = {
    rawGroups,
    xurItems: xurItemsGood,
    hasInventory: inventoryHashes.length > 0,
    loading: false,
    shit: null
  };

  // console.groupCollapsed('Raw groups:');
  // rawGroups.forEach(group => {
  //   console.groupCollapsed(group.name);
  //   group.sets.forEach(set => {
  //     console.group(set.name);
  //     set.sections.forEach(section => {
  //       console.groupCollapsed(section.title);
  //       section.items.forEach(item => console.log(item));
  //       console.groupEnd();
  //     });
  //     console.groupEnd();
  //   });
  //   console.groupEnd();
  // });
  // console.groupEnd();

  dataCallback(payload);
}
