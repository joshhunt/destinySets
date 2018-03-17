import { isArray, has, get } from 'lodash';

import { NUMERICAL_STATS, STAT_BLACKLIST } from 'app/lib/destinyEnums';
import fancySearch from 'app/lib/fancySearch';
import sortItemsIntoSections from 'app/lib/sortItemsIntoSections';
import collectInventory from 'app/lib/collectInventory';
import * as ls from 'app/lib/ls';

const INTRINSIC = [
  270846462,
  609567286,
  1008588205,
  1097155916,
  1097521167,
  1204269313,
  1248391073,
  1466306887,
  1531403410,
  1728041517,
  1779420771,
  1895044987,
  2000319334,
  2114652868,
  2287852220,
  2604400628,
  2823081959,
  2936258449,
  2951930089,
  3003456207,
  3156820619,
  3262209356,
  3364488990,
  3404948861,
  3551200371,
  3563749202,
  3590894000,
  3686266706,
  3715888615,
  3768545060,
  3800753361,
  3838406119,
  3979417222,
  4015706356,
  4163227370,
  4198375581
];

const log = require('app/lib/log')('processSets');

function merge(base, extra) {
  return { ...base, ...extra };
}

function statsForItem(item, statDefs) {
  return Object.values(get(item, 'stats.stats', {}))
    .map(stat => {
      const statDef = statDefs[stat.statHash];

      if (!statDef) {
        log(
          `WARNING: Unable to find stat definition ${stat.statHash} on item ${
            item.hash
          }`
        );

        return null;
      }

      if (
        !statDef.displayProperties.name ||
        STAT_BLACKLIST.includes(stat.statHash)
      ) {
        return null;
      }

      return {
        ...stat,
        $stat: statDef
      };
    })
    .filter(Boolean)
    .sort(a => {
      return NUMERICAL_STATS.includes(a.statHash) ? -1 : 1;
    });
}

function objectivesForItem(item, plugData, objectiveDefs) {
  const thisPlug = plugData[item.hash];
  if (!get(thisPlug, '$instanceData.plugObjectives')) {
    return;
  }

  return thisPlug.$instanceData.plugObjectives
    .map(objective => ({
      $objective: objectiveDefs[objective.objectiveHash],
      ...objective
    }))
    .filter(objective => objective.$objective);
}

function statTrackForItem(item, statTrackData, objectiveDefs) {
  const thisStatTrack = statTrackData[item.hash];
  if (!get(thisStatTrack, '$instanceData.flavorObjective')) {
    return;
  }
  return {
    ...thisStatTrack,
    $objective:
      objectiveDefs[thisStatTrack.$instanceData.flavorObjective.objectiveHash]
  };
}

export function mapItems(
  itemHashes,
  itemDefs,
  statDefs,
  objectiveDefs,
  inventory,
  plugData,
  statTrackData,
  trackedHashes
) {
  const trackedItems = [];

  const items = itemHashes
    .map(itemHash => {
      const item = itemDefs[itemHash];

      if (!item) {
        log('WARNING: Unable to find item definition for ' + itemHash);
        return null;
      }

      const inventoryItem = inventory[itemHash];

      const stats = statsForItem(item, statDefs);
      const objectives = objectivesForItem(item, plugData, objectiveDefs);
      const statTrack = statTrackForItem(item, statTrackData, objectiveDefs);

      const intrinsicStatPerk = get(item, 'sockets.socketEntries', []).find(
        entry => INTRINSIC.includes(entry.singleInitialItemHash)
      );
      let intrinsicStatPerkDef;
      if (intrinsicStatPerk) {
        intrinsicStatPerkDef =
          itemDefs[intrinsicStatPerk.singleInitialItemHash];
      }

      const isPlug =
        inventoryItem &&
        inventoryItem.find(it => it.$location === '$reusablePlugHashes');

      const isDismantled = inventoryItem && inventoryItem[0].$dismantled;
      const hasInventoryItems = !!inventoryItem;

      const baseItemHash = item.plug && item.plug.previewItemOverrideHash;
      const baseItem = itemDefs[baseItemHash];

      const finalItem = {
        $obtained: isPlug
          ? hasInventoryItems && !isDismantled
          : hasInventoryItems,
        $dismantled: isPlug ? false : isDismantled,
        $inventory: inventoryItem,
        $intrinsicStatPerk: intrinsicStatPerkDef,
        $stats: stats,
        $objectives: objectives,
        $statTrack: statTrack,
        $baseItem: baseItem,
        ...item
      };

      trackedHashes.includes(itemHash) && trackedItems.push(finalItem);

      return finalItem;
    })
    .filter(Boolean);

  return {
    items,
    trackedItems
  };
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

export default function processSets(args) {
  const {
    itemDefs,
    vendorDefs,
    statDefs,
    objectiveDefs,
    profile,
    xurItems,
    setData,
    cloudInventory,
    trackedHashes
  } = args;

  const sets = setData;
  const xurHashes = xurItems || [];
  const allItems = Object.values(itemDefs);

  let { inventory, plugData, statTrackData } =
    (profile && collectInventory(profile, vendorDefs)) || {};
  let usingLocalStorageInventory = false;
  const localStorageInventory = ls.getInventory();

  inventory = inventory || {};
  plugData = plugData || {};
  statTrackData = statTrackData || {};

  const allTrackedItems = [];

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
    log('Using cloud inventory', cloudInventory);
    inventory = mergeCloudInventory(inventory, cloudInventory);
  }

  log('Using inventory of ' + Object.keys(inventory).length + ' items');

  const rawGroups = sets.map(group => {
    const sets = group.sets.map(set => {
      const preSections = set.fancySearchTerm
        ? sortItemsIntoSections(
            fancySearch(set.fancySearchTerm, { item: allItems })
          )
        : set.sections;

      const sections = preSections.map(section => {
        const preItems =
          section.items ||
          fancySearch(section.fancySearchTerm, { item: allItems }).map(
            i => i.hash
          );

        if (!isArray(preItems)) {
          throw new Error('Section not in correct format');
        }

        const { items, trackedItems } = mapItems(
          preItems,
          itemDefs,
          statDefs,
          objectiveDefs,
          inventory,
          plugData,
          statTrackData,
          trackedHashes
        );

        allTrackedItems.push(...trackedItems);

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

  const saveCloudInventory =
    !usingLocalStorageInventory && !!Object.keys(inventory).length;
  log(`saveCloudInventory: ${saveCloudInventory}`);

  const payload = {
    rawGroups,
    inventory,
    trackedItems: allTrackedItems,
    xurItems: xurItemsGood,
    hasInventory: Object.keys(inventory).length > 0,
    loading: false,
    saveCloudInventory,
    shit: null
  };

  return payload;
}
