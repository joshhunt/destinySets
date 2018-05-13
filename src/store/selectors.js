import { createSelector } from 'reselect';
import { difference } from 'lodash';

import {
  inventoryFromProfile,
  objectivesFromProfile
} from 'app/lib/getFromProfile';
import { NUMERICAL_STATS, STAT_BLACKLIST } from 'app/lib/destinyEnums';

export const cloudInventorySelector = state => state.app.cloudInventory;
export const itemDefsSelector = state => state.app.itemDefs;
export const objectiveDefsSelector = state => state.app.objectiveDefs;
export const statDefsSelector = state => state.app.statDefs;

const baseXurItemsSelector = state => state.app.xur.items;
const profileSelector = state => state.app.profile;
const vendorDefsSelector = state => state.app.vendorDefs;

const propsSectionsSelector = (state, props) => props.sections;

export const itemHashPropSelector = (state, props) => props.itemHash;

export const makeItemSelector = () => {
  return createSelector(
    itemDefsSelector,
    itemHashPropSelector,
    (itemDefs, itemHash) => {
      return itemDefs ? itemDefs[itemHash] : null;
    }
  );
};

export const makeItemStatsSelector = () => {
  return createSelector(
    itemDefsSelector,
    statDefsSelector,
    itemHashPropSelector,
    (itemDefs, statDefs, itemHash) => {
      if (!(itemDefs && statDefs)) {
        return null;
      }

      const item = itemDefs[itemHash];

      if (!item) {
        return null;
      }

      const stats = Object.values((item.stats && item.stats.stats) || {});

      if (stats.length < 1) {
        return null;
      }

      const filteredStats = stats
        .map(stat => {
          const statDef = statDefs[stat.statHash];

          if (
            !statDef ||
            !statDef.displayProperties.name ||
            STAT_BLACKLIST.includes(stat.statHash)
          ) {
            return null;
          }

          return stat;
        })
        .filter(Boolean)
        .sort(a => (NUMERICAL_STATS.includes(a.statHash) ? -1 : 1));

      return filteredStats.length ? filteredStats : null;
    }
  );
};

export const makeSelectedItemDefsSelector = () => {
  return createSelector(
    itemDefsSelector,
    propsSectionsSelector,
    (itemDefs, sections) => {
      const items = {};

      if (!itemDefs) {
        return {};
      }

      sections.forEach(section => {
        (section.items || []).forEach(itemHash => {
          items[itemHash] = itemDefs[itemHash];
        });

        section.itemGroups &&
          section.itemGroups.forEach(itemList => {
            itemList.forEach(itemHash => {
              items[itemHash] = itemDefs[itemHash];
            });
          });
      });

      return items;
    }
  );
};

export const currentInventorySelector = createSelector(
  profileSelector,
  vendorDefsSelector,
  (profile, vendorDefs) => {
    if (!(profile && vendorDefs)) {
      return null;
    }

    return inventoryFromProfile(profile, vendorDefs);
  }
);

export const inventorySelector = createSelector(
  currentInventorySelector,
  cloudInventorySelector,
  (currentInventory, cloudInventory) => {
    if (!(currentInventory && cloudInventory)) {
      return currentInventory;
    }

    const deletedItems = difference(
      Object.keys(cloudInventory),
      Object.keys(currentInventory)
    );

    const inventory = { ...currentInventory };
    deletedItems.forEach(deletedHash => {
      inventory[deletedHash] = {
        itemHash: deletedHash,
        dismantled: true,
        instances: [{ location: 'cloudInventory' }]
      };
    });

    return inventory;
  }
);

export const xurItemsSelector = createSelector(
  inventorySelector,
  baseXurItemsSelector,
  (inventory, xurHashes) => {
    if (!inventory) {
      return { obtainedItems: [], newItems: xurHashes };
    }

    const obtainedItems = [];
    const newItems = [];

    xurHashes.forEach(itemHash => {
      (inventory[itemHash] ? obtainedItems : newItems).push(itemHash);
    });

    return { obtainedItems, newItems };
  }
);

export const xurHasNewItemsSelector = createSelector(
  xurItemsSelector,
  xurItems => {
    return xurItems.newItems.length > 0;
  }
);

export const profileObjectivesSelector = createSelector(
  profileSelector,
  profile => {
    if (!profile) {
      return {};
    }

    return objectivesFromProfile(profile);
  }
);

export const makeItemInventoryEntrySelector = () => {
  return createSelector(
    inventorySelector,
    itemHashPropSelector,
    (inventory, itemHash) => {
      return inventory ? inventory[itemHash] : null;
    }
  );
};
