import { createSelector } from 'reselect';
import { difference, toPairs, keyBy, get } from 'lodash';
import fp from 'lodash/fp';

import {
  inventoryFromProfile,
  objectivesFromProfile
} from 'app/lib/getFromProfile';
import {
  NUMERICAL_STATS,
  STAT_BLACKLIST,
  CHECKLIST_PROFILE_COLLECTIONS,
  CHECKLIST_CHARACTER_COLLECTIONS
} from 'app/lib/destinyEnums';

export const cloudInventorySelector = state => state.app.cloudInventory;
export const manualInventorySelector = state => state.app.manualInventory;
export const itemDefsSelector = state => state.definitions.itemDefs;
export const objectiveDefsSelector = state => state.definitions.objectiveDefs;
export const statDefsSelector = state => state.definitions.statDefs;
export const checklistDefsSelector = state => state.definitions.checklistDefs;

const baseXurItemsSelector = state => state.xur.items;
const profileSelector = state => state.profile.profile;
const vendorDefsSelector = state => state.definitions.vendorDefs;

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
    (state, props) => props.set.sections,
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

function inventoryFromChecklist(checklistDef, checklist) {
  if (!checklistDef) {
    return {};
  }

  const checklistDefEntries = keyBy(checklistDef.entries, x => x.hash);
  const inventory = {};

  toPairs(checklist).forEach(([checklistItemHash, isUnlocked]) => {
    if (isUnlocked) {
      const checklistEntryDef = checklistDefEntries[checklistItemHash];
      const itemHash = checklistEntryDef && checklistEntryDef.itemHash; // check this for the correct itemHash
      if (itemHash) {
        inventory[itemHash] = true;
      }
    }
  });

  return inventory;
}

export const checklistInventorySelector = createSelector(
  checklistDefsSelector,
  profileSelector,
  (checklistDefs, profile) => {
    if (!(checklistDefs && profile)) {
      return {};
    }

    let inventory = {};

    const checklists = get(profile, 'profileProgression.data.checklists');

    if (!checklists) {
      return {};
    }

    const profileChecklist = checklists[CHECKLIST_PROFILE_COLLECTIONS];

    const characterChecklists = Object.values(
      profile.characterProgressions.data
    )
      .map(x => x.checklists[CHECKLIST_CHARACTER_COLLECTIONS])
      .filter(Boolean);

    if (profileChecklist) {
      inventory = {
        ...inventory,
        ...inventoryFromChecklist(
          checklistDefs[CHECKLIST_PROFILE_COLLECTIONS],
          profileChecklist
        )
      };
    }

    const characterInventory = characterChecklists.reduce((acc, checklist) => {
      return {
        ...acc,
        ...inventoryFromChecklist(
          checklistDefs[CHECKLIST_CHARACTER_COLLECTIONS],
          checklist
        )
      };
    }, {});

    return { ...characterInventory, ...inventory };
  }
);

export const inventorySelector = createSelector(
  currentInventorySelector,
  cloudInventorySelector,
  manualInventorySelector,
  checklistInventorySelector,
  (currentInventory, cloudInventory, manualInventory, checklistInventory) => {
    if (!currentInventory) {
      return currentInventory;
    }

    const inventory = { ...currentInventory };

    if (checklistInventory) {
      Object.keys(checklistInventory).forEach(itemHash => {
        if (!inventory[itemHash]) {
          inventory[itemHash] = {
            itemHash,
            checklisted: true,
            instances: [{ location: 'progressionChecklist' }]
          };
        }
      });
    }

    if (cloudInventory) {
      const deletedItems = difference(
        Object.keys(cloudInventory),
        Object.keys(inventory)
      );

      deletedItems.forEach(hash => {
        inventory[hash] = {
          itemHash: hash,
          dismantled: true,
          instances: [{ location: 'cloudInventory' }]
        };
      });
    }

    const manualItems = difference(
      Object.keys(manualInventory),
      Object.keys(inventory)
    );

    manualItems.forEach(hash => {
      inventory[hash] = {
        itemHash: hash,
        manuallyObtained: true,
        instances: [{ location: 'destinySetsManual' }]
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

export const objectiveInstancesSelector = createSelector(
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

const itemSelector = (state, ownProps) => ownProps.item;

const extractInstances = fp.flatMapDeep(
  characterEquipment => characterEquipment.items
);

const itemInstancesSelector = createSelector(profileSelector, profile => {
  if (!profile) {
    return {};
  }

  return fp.flow(
    fp.concat(extractInstances(profile.characterEquipment.data)),
    fp.concat(extractInstances(profile.characterInventories.data)),
    fp.concat(profile.profileInventory.data.items),
    fp.map(itemInstance => {
      return {
        ...itemInstance,
        $sockets: (
          profile.itemComponents.sockets.data[itemInstance.itemInstanceId] || {}
        ).sockets
      };
    }),
    fp.groupBy(component => component.itemHash)
  )([]);
});

export const NO_DATA = -1;
export const NO_CATALYST = 0;
export const INACTIVE_CATALYST = 1;
export const ACTIVE_CATALYST_INPROGRESS = 2;
export const ACTIVE_CATALYST_COMPLETE = 3;
export const MASTERWORK_UPGRADED = 4;

const MASTERWORK_FLAG = 4;

export const makeCatalystSelector = () => {
  return createSelector(
    itemInstancesSelector,
    itemDefsSelector,
    itemSelector,
    (equipment, itemDefs, item) => {
      if (!item || !itemDefs) {
        return null;
      }

      let status = NO_DATA;
      let objectives = null;
      let hintText = null;
      const instances = equipment[item.hash] || [];

      instances.forEach(instance => {
        if (instance.state & MASTERWORK_FLAG) {
          status = Math.max(status, MASTERWORK_UPGRADED);
        }

        if (!instance.$sockets) {
          return;
        }

        instance.$sockets.forEach(plug => {
          if (!plug.reusablePlugs) {
            const plugItem = plug.plugHash && itemDefs[plug.plugHash];

            if (plugItem) {
              hintText = plugItem.displayProperties.description;
            }

            return;
          }

          status = Math.max(status, NO_CATALYST);

          plug.reusablePlugs.forEach(reusablePlug => {
            const reusablePlugDef = itemDefs[reusablePlug.plugItemHash];

            if (!reusablePlugDef) {
              return;
            }

            if (
              reusablePlugDef.plug.uiPlugLabel === 'masterwork_interactable'
            ) {
              if (reusablePlugDef.plug.insertionRules.length) {
                if (reusablePlug.canInsert) {
                  status = Math.max(status, ACTIVE_CATALYST_COMPLETE);
                } else {
                  hintText = reusablePlugDef.displayProperties.description;
                  status = Math.max(status, ACTIVE_CATALYST_INPROGRESS);
                }

                if (reusablePlug.plugObjectives) {
                  objectives = reusablePlug.plugObjectives;
                }
              } else {
                status = Math.max(status, INACTIVE_CATALYST);
              }
            }
          });
        });

        if (status === NO_CATALYST) {
          instance.$sockets.forEach(plug => {
            const plugItem = itemDefs[plug.plugHash];

            if (!plugItem) {
              return;
            }

            if (
              plugItem.plug &&
              plugItem.plug.plugCategoryIdentifier &&
              plugItem.plug.plugCategoryIdentifier.includes('masterwork')
            )
              hintText = plugItem.displayProperties.description;
          });
        } else if (status === INACTIVE_CATALYST) {
          hintText = null;
        }
      });

      return {
        status,
        objectives,
        hintText
      };
    }
  );
};

export const makeItemInstanceSelector = () => {
  return createSelector(
    itemInstancesSelector,
    itemSelector,
    (equipment, item) => {
      if (!item) {
        return null;
      }

      return equipment[item.hash];
    }
  );
};
