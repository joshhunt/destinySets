import { isArray, has, get } from 'lodash';

import { NUMERICAL_STATS, STAT_BLACKLIST } from 'app/lib/destinyEnums';
import { fancySearch } from 'app/views/DataExplorer/filterItems';
import sortItemsIntoSections from 'app/views/DataExplorer/sortItemsIntoSections';
import collectInventory from 'app/lib/collectInventory';
import * as ls from 'app/lib/ls';

// import { logItems, logSets } from './utils';

const log = require('app/lib/log')('processSets');

function merge(base, extra) {
  return { ...base, ...extra };
}

export function mapItems(itemHashes, itemDefs, statDefs, inventory) {
  return itemHashes
    .map(itemHash => {
      const item = itemDefs[itemHash];

      if (!item) {
        log('WARNING: Unable to find item definition for ' + itemHash);
        return null;
      }

      const inventoryItem = inventory[itemHash];

      const stats = Object.values(get(item, 'stats.stats', {}))
        .map(stat => {
          const statDef = statDefs[stat.statHash];

          if (!statDef) {
            log(
              `WARNING: Unable to find stat definition ${
                stat.statHash
              } on item ${itemHash}`,
            );

            return null;
          }

          if (!statDef.displayProperties.name) {
            return null;
          }

          if (STAT_BLACKLIST.includes(stat.statHash)) {
            return null;
          }

          return {
            ...stat,
            $stat: statDef,
          };
        })
        .filter(Boolean)
        .sort(a => {
          if (NUMERICAL_STATS.includes(a.statHash)) {
            return -1;
          } else {
            return 1;
          }
        });

      return {
        $obtained: !!inventoryItem,
        $dismantled: inventoryItem && inventoryItem[0].$dismantled,
        $inventory: inventoryItem,
        $stats: stats,
        ...item,
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
        ...cleanUpCloudInventory(cloudInventory[cloudItemHash]),
      ];
    }
  });

  return inventory;
}

export default function processSets(args, dataCallback) {
  const {
    itemDefs,
    vendorDefs,
    statDefs,
    profile,
    xurItems,
    setData,
    cloudInventory,
  } = args;

  const sets = setData;
  const xurHashes = xurItems || [];
  const allItems = Object.values(itemDefs);

  let inventory = (profile && collectInventory(profile, vendorDefs)) || {};
  let usingLocalStorageInventory = false;
  const localStorageInventory = ls.getInventory();

  log('Processing sets with', {
    inventory,
    localStorageInventory,
    cloudInventory,
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

  const rawGroups = sets.map(group => {
    const sets = group.sets.map(set => {
      const preSections = set.fancySearchTerm
        ? sortItemsIntoSections(
            fancySearch(set.fancySearchTerm, { item: allItems }),
          )
        : set.sections;

      const sections = preSections.map(section => {
        const preItems =
          section.items ||
          fancySearch(section.fancySearchTerm, { item: allItems }).map(
            i => i.hash,
          );

        if (!isArray(preItems)) {
          throw new Error('Section not in correct format');
        }

        const items = mapItems(preItems, itemDefs, statDefs, inventory);

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
    xurHashes,
  });

  if (!usingLocalStorageInventory) {
    ls.saveInventory(inventory);
  }

  const saveCloudInventory =
    !usingLocalStorageInventory && !!Object.keys(inventory).length;
  log(`saveCloudInventory: ${saveCloudInventory}`);

  const payload = {
    rawGroups,
    inventory,
    xurItems: xurItemsGood,
    hasInventory: Object.keys(inventory).length > 0,
    loading: false,
    saveCloudInventory,
    shit: null,
  };

  dataCallback(payload);
}
