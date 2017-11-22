import { mapValues, isArray, isNumber, cloneDeep } from 'lodash';

import { fancySearch } from 'app/views/DataExplorer/filterItems';
import sortItemsIntoSections from 'app/views/DataExplorer/sortItemsIntoSections';
import collectInventory from 'app/lib/collectInventory';
import * as ls from 'app/lib/ls';
import { logItems, logSets } from './utils';
import setsSets from '../sets.js';
import allItemsSets from '../allItems.js';

const VARIATIONS = {
  sets: setsSets,
  allItems: allItemsSets
};

function merge(base, extra) {
  return { ...base, ...extra };
}

export function mapItems(itemHashes, itemDefs, inventory) {
  return itemHashes
    .map(itemHash => {
      const item = itemDefs[itemHash];

      if (!item) {
        console.warn('Unable to find item definition for ' + itemHash);
        return null;
      }

      const inventoryItem = inventory[itemHash];

      console.log(
        `%c${itemHash}`,
        'font-weight: bold; color: blue',
        inventoryItem
      );

      return {
        $obtained: !!inventoryItem,
        $dismantled: inventoryItem && inventoryItem[0].$dismantled,
        $inventory: inventoryItem,
        ...item
      };
    })
    .filter(Boolean);
}

function mergeCloudInventory(currentInventory, cloudInventory) {
  console.log('%cMerging cloud inventory', 'font-weight: bold', {
    currentInventory,
    cloudInventory
  });
  const inventory = { ...currentInventory };

  Object.keys(cloudInventory).forEach(cloudItemHash => {
    if (!currentInventory[cloudItemHash]) {
      console.log(
        `%cFound item in cloud inventory`,
        'font-weight: bold; color: orange',
        cloudItemHash
      );
      inventory[cloudItemHash] = [
        { $dismantled: true },
        ...cloudInventory[cloudItemHash]
      ];
    }
  });

  return inventory;
}

export default function processSets(args, dataCallback) {
  const {
    itemDefs,
    vendorDefs,
    profile,
    variation,
    xurItems,
    cloudInventory
  } = args;

  const sets = cloneDeep(VARIATIONS[variation]);

  const xurHashes = xurItems || [];

  const allItems = Object.values(itemDefs);

  // const kioskItems = profile
  //   ? destiny.collectItemsFromKiosks(profile, itemDefs, vendorDefs)
  //   : [];

  // const lsInventory = ls.getInventory();
  // const inventory = destiny.collectItemsFromProfile(profile);
  // const inventory = [...inventory, ...kioskItems];

  let inventory = (profile && collectInventory(profile, vendorDefs)) || {};
  console.log('do we have cloudInventory?', cloudInventory);
  if (cloudInventory && profile) {
    inventory = mergeCloudInventory(inventory, cloudInventory);
  }

  try {
    profile && itemDefs && logItems(profile, itemDefs, vendorDefs);
  } catch (e) {
    console.error('Unable to log profile');
    console.log(e);
  }

  ls.saveInventory(mapValues(inventory, () => ({ $fromLocalStorage: true })));

  console.groupCollapsed('mapItem');
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

        const items = mapItems(preItems, itemDefs, inventory);

        return merge(section, { items });
      });

      return merge(set, { sections });
    });

    return merge(group, { sets });
  });
  console.groupEnd();

  const xurItemsGood = xurHashes
    .filter(hash => inventory[Number(hash)])
    .map(hash => itemDefs[hash]);

  const payload = {
    rawGroups,
    inventory,
    xurItems: xurItemsGood,
    hasInventory: Object.keys(inventory).length > 0,
    loading: false,
    shit: null
  };

  logSets('Raw groups:', rawGroups);

  dataCallback(payload);
}
