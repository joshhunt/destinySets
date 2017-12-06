import { isArray, cloneDeep, has } from 'lodash';

import { fancySearch } from 'app/views/DataExplorer/filterItems';
import sortItemsIntoSections from 'app/views/DataExplorer/sortItemsIntoSections';
import collectInventory from 'app/lib/collectInventory';
import * as ls from 'app/lib/ls';

// import { logItems, logSets } from './utils';
import setsSets from '../sets.js';
import allItemsSets from '../allItems.js';

const log = require('app/lib/log')('processSets');

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
        log('WARNING: Unable to find item definition for ' + itemHash);
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

function cleanUpCloudInventory(cloudInventory) {
  return cloudInventory.filter(c => !has(c, '$dismantled'));
}

function mergeCloudInventory(currentInventory, cloudInventory) {
  const inventory = { ...currentInventory };

  Object.keys(cloudInventory).forEach(cloudItemHash => {
    if (!currentInventory[cloudItemHash]) {
      inventory[cloudItemHash] = [
        { $dismantled: true },
        ...cleanUpCloudInventory(cloudInventory[cloudItemHash])
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

  // if ((profile && !cloudInventory) || (!profile && cloudInventory)) {
  //   return dataCallback(false);
  // }

  const sets = cloneDeep(VARIATIONS[variation]);

  const xurHashes = xurItems || [];

  const allItems = Object.values(itemDefs);

  let inventory = (profile && collectInventory(profile, vendorDefs)) || {};
  let usingLocalStorageInventory = false;
  const localStorageInventory = ls.getInventory();

  log('Processing sets with', {
    inventory,
    localStorageInventory,
    cloudInventory
  });

  if (!Object.keys(inventory).length > 0 && localStorageInventory) {
    usingLocalStorageInventory = true;
    inventory = localStorageInventory;
    log('Using local storage inventory');
  } else if (cloudInventory && profile) {
    log('Using cloud inventory');
    inventory = mergeCloudInventory(inventory, cloudInventory);
  }

  log('Using inventory of ' + Object.keys(inventory).length + ' items');

  // try {
  //   profile && itemDefs && logItems(profile, itemDefs, vendorDefs);
  // } catch (e) {
  //   console.error('Unable to log profile');
  //   console.error(e);
  // }

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
    .filter(hash => {
      const found = inventory[Number(hash)];
      log(`Found item for xur item hash ${hash} ${!!found}`, found);
      return !found;
    })
    .map(hash => itemDefs[hash]);

  log('Xur items', {
    xurItemsGood,
    inventory,
    xurHashes
  });

  if (!usingLocalStorageInventory) {
    ls.saveInventory(inventory);
  }

  console.group('saveCloudInventory?');
  log(`!usingLocalStorageInventory: ${!usingLocalStorageInventory}`);
  log(`!!Object.keys(inventory).length: ${!!Object.keys(inventory).length}`);
  console.groupEnd();

  const payload = {
    rawGroups,
    inventory,
    xurItems: xurItemsGood,
    hasInventory: Object.keys(inventory).length > 0,
    loading: false,
    saveCloudInventory:
      !usingLocalStorageInventory && !!Object.keys(inventory).length,
    shit: null
  };

  // logSets('Raw groups:', rawGroups);

  dataCallback(payload);
}
