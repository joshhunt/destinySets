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
  const inventory = { ...currentInventory };

  Object.keys(cloudInventory).forEach(cloudItemHash => {
    if (!currentInventory[cloudItemHash]) {
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

  console.log('Process sets with', { profile, cloudInventory });

  if ((profile && !cloudInventory) || (!profile && cloudInventory)) {
    return dataCallback(false);
  }

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
  let usingLocalStorageInventory = false;
  const localStorageInventory = ls.getInventory();
  console.log('ls test', {
    inventory,
    localStorageInventory
  });

  if (!Object.keys(inventory).length > 0 && localStorageInventory) {
    usingLocalStorageInventory = true;
    inventory = localStorageInventory;
    console.log(
      `%cUsing local storage`,
      'font-weight: bold; color: blue',
      inventory
    );
  } else if (cloudInventory && profile) {
    inventory = mergeCloudInventory(inventory, cloudInventory);
  }

  // try {
  //   profile && itemDefs && logItems(profile, itemDefs, vendorDefs);
  // } catch (e) {
  //   console.error('Unable to log profile');
  //   console.error(e);
  // }

  // ls.saveInventory(mapValues(inventory, () => ({ $fromLocalStorage: true })));

  const rawGroups = sets.map(group => {
    const sets = group.sets.map(set => {
      const preSections = set.fancySearchTerm
        ? sortItemsIntoSections(fancySearch(set.fancySearchTerm, allItems))
        : set.sections;

      const sections = preSections.map(section => {
        const preItems =
          section.items ||
          fancySearch(section.fancySearchTerm, allItems).map(i => i.hash);

        if (!isArray(preItems)) {
          throw new Error('Section not in correct format');
        }

        const items = mapItems(preItems, itemDefs, inventory);

        return merge(section, { items });
      });

      return merge(set, { sections });
    });

    return merge(group, { sets });
  });

  const xurItemsGood = xurHashes
    .filter(hash => inventory[Number(hash)])
    .map(hash => itemDefs[hash]);

  if (!usingLocalStorageInventory) {
    ls.saveInventory(inventory);
  }

  const payload = {
    rawGroups,
    inventory,
    xurItems: xurItemsGood,
    hasInventory: Object.keys(inventory).length > 0,
    loading: false,
    saveCloudInventory:
      !usingLocalStorageInventory &&
      Object.keys(inventory).length &&
      !!cloudInventory,
    shit: null
  };

  // logSets('Raw groups:', rawGroups);

  dataCallback(payload);
}
