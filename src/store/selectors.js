import { createSelector } from 'reselect';
import { difference, keyBy, get, flatMapDeep, mapValues } from 'lodash';
import fp from 'lodash/fp';

import {
  inventoryFromProfile,
  objectivesFromProfile
} from 'app/lib/getFromProfile';
import { flagEnum } from 'app/lib/destinyUtils';
import { enumerateState } from 'app/components/Record';
import {
  NUMERICAL_STATS,
  STAT_BLACKLIST,
  MASTERWORK_FLAG
} from 'app/lib/destinyEnums';

export const cloudInventorySelector = state => state.app.cloudInventory;
export const manualInventorySelector = state => state.app.manualInventory;
const baseXurItemsSelector = state => state.xur.items;
const profileSelector = state => state.profile.profile;

export const itemDefsSelector = state =>
  state.definitions.DestinyInventoryItemDefinition;
export const objectiveDefsSelector = state =>
  state.definitions.DestinyObjectiveDefinition;
export const statDefsSelector = state =>
  state.definitions.DestinyStatDefinition;
export const checklistDefsSelector = state =>
  state.definitions.DestinyChecklistDefinition;
export const vendorDefsSelector = state =>
  state.definitions.DestinyVendorDefinition;
export const collectibleDefsSelector = state =>
  state.definitions.DestinyCollectibleDefinition;
export const presentationNodeDefsSelector = state =>
  state.definitions.DestinyPresentationNodeDefinition;

export const itemHashPropSelector = (state, props) =>
  props.itemHash || (props.routeParams && props.routeParams.itemHash);

export const makeItemSelector = () => {
  return createSelector(
    itemDefsSelector,
    itemHashPropSelector,
    (itemDefs, itemHash) => {
      return itemDefs ? itemDefs[itemHash] : null;
    }
  );
};

export const makeItemPresentationSelector = () => {
  return createSelector(
    itemDefsSelector,
    collectiblesByItemHashSelector,
    itemHashPropSelector,
    (itemDefs, collectibles, itemHash) => {
      const itemDef = itemDefs && itemDefs[itemHash];

      if (itemDef && !itemDef.redacted) {
        return itemDefs[itemHash];
      }

      if (collectibles && collectibles[itemHash]) {
        return collectibles[itemHash];
      }

      return itemDef;
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

export const recordsSelector = createSelector(
  profileSelector,
  profile => {
    const profileRecords = get(profile, 'profileRecords.data.records', {});
    const characterRecords = Object.values(
      get(profile, 'characterRecords.data', {})
    ).reduce((acc, { records }) => {
      return {
        ...acc,
        ...records
      };
    }, {});

    const all = {
      ...profileRecords,
      ...characterRecords
    };

    const allMappedRecords = mapValues(all, record => {
      return {
        ...record,
        enumeratedState: enumerateState(record.state)
      };
    });

    window.__records = allMappedRecords;

    return allMappedRecords;
  }
);

const enumerateCollectibleState = state => ({
  none: flagEnum(state, 0),
  notAcquired: flagEnum(state, 1),
  obscured: flagEnum(state, 2),
  invisible: flagEnum(state, 4),
  cannotAffordMaterialRequirements: flagEnum(state, 8),
  inventorySpaceUnavailable: flagEnum(state, 16),
  uniquenessViolation: flagEnum(state, 32),
  purchaseDisabled: flagEnum(state, 64)
});

function inventoryFromCollectibles(collectibles, collectibleDefs) {
  return Object.entries(collectibles).reduce(
    (acc, [collectibleHash, { state }]) => {
      const collectible = collectibleDefs[collectibleHash];
      if (!collectible || !collectible.itemHash) {
        return acc;
      }

      const actualState = enumerateCollectibleState(state);

      if (actualState.notAcquired) {
        return acc;
      }

      return {
        ...acc,
        [collectible.itemHash]: actualState
      };
    },
    {}
  );
}

export const checklistInventorySelector = createSelector(
  collectibleDefsSelector,
  profileSelector,
  (collectibleDefs, profile) => {
    if (!(collectibleDefs && profile)) {
      return {};
    }

    let inventory = {};

    const collectibles = get(profile, 'profileCollectibles.data.collectibles');

    if (collectibles) {
      inventory = {
        ...inventory,
        ...inventoryFromCollectibles(collectibles, collectibleDefs)
      };
    }

    const characterCollectibles = get(profile, 'characterCollectibles.data');

    characterCollectibles &&
      Object.values(profile.characterCollectibles.data).forEach(data => {
        inventory = {
          ...inventory,
          ...inventoryFromCollectibles(data.collectibles, collectibleDefs)
        };
      });

    return inventory;
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
    (s, ownProps) => ownProps.hideInventoryData,
    (inventory, itemHash, hideInventoryData) => {
      if (hideInventoryData) {
        return null;
      }

      return inventory ? inventory[itemHash] : null;
    }
  );
};

export const makeItemVendorEntrySelector = () => {
  return createSelector(
    vendorItemDataSelector,
    itemHashPropSelector,
    (vendorData, itemHash) => {
      return vendorData[itemHash];
    }
  );
};

const CURRENCY_SORT_ORDER = [
  3159615086, // glimmer
  1022552290, // legendary shards
  2817410917, // bright dust
  3147280338 // silver
];

export const makeBetterItemVendorEntrySelector = () => {
  return createSelector(
    vendorItemDataSelector,
    itemHashPropSelector,
    (vendorData, itemHash) => {
      const vendorEntries = vendorData[itemHash];

      return fp.flow(
        fp.map(ve => {
          const costs = ve.saleItem.costs;

          if (!costs || costs.length === 0) {
            return {
              vendorHash: ve.vendorHash,
              costs: []
            };
          }

          return {
            vendorHash: ve.vendorHash,
            costs
          };
        }),
        fp.flattenDeep,
        fp.uniqBy(
          ve =>
            `${ve.vendorHash}|${ve.costs.map(
              c => `${c.itemHash}|${c.quantity}`
            )}`
        ),
        fp.sortBy(ve => {
          const sortableCost =
            ve.costs.find(c => CURRENCY_SORT_ORDER.includes(c.itemHash)) ||
            ve.costs[0];
          const sortIndex = CURRENCY_SORT_ORDER.indexOf(sortableCost.itemHash);
          const final = sortIndex === -1 ? 999 : sortIndex;

          return final;
        })
      )(vendorEntries);
    }
  );
};

const extractInstances = characterInventory => {
  return Object.entries(characterInventory).reduce(
    (acc, [characterId, { items }]) => {
      return acc.concat(
        items.map(item => ({ ...item, $characterId: characterId }))
      );
    },
    []
  );
};

export const itemInstancesSelector = createSelector(
  profileSelector,
  profile => {
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
            profile.itemComponents.sockets.data[itemInstance.itemInstanceId] ||
            {}
          ).sockets
        };
      }),
      fp.groupBy(component => component.itemHash)
    )([]);
  }
);

export const vendorItemDataSelector = createSelector(
  profileSelector,
  profile => {
    if (!profile) {
      return {};
    }

    const data = {};

    Object.entries(profile.$vendors.data).forEach(
      ([characterId, allVendorsData]) => {
        Object.entries(allVendorsData.sales.data).forEach(
          ([vendorHash, { saleItems }]) => {
            Object.values(saleItems).forEach(saleItem => {
              if (saleItem.failureIndexes.length > 0) {
                return;
              }

              if (!data[saleItem.itemHash]) {
                data[saleItem.itemHash] = [];
              }

              data[saleItem.itemHash].push({
                characterId,
                vendorHash,
                saleItem
              });
            });
          }
        );
      }
    );

    window.__vendorData = data;

    return data;
  }
);

export const NO_DATA = -1;
export const NO_CATALYST = 0;
export const INACTIVE_CATALYST = 1;
export const ACTIVE_CATALYST_INPROGRESS = 2;
export const ACTIVE_CATALYST_COMPLETE = 3;
export const MASTERWORK_UPGRADED = 4;

export const makeCatalystSelector = () => {
  return createSelector(
    itemInstancesSelector,
    itemDefsSelector,
    makeItemSelector(),
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
    itemHashPropSelector,
    (equipment, itemHash) => {
      if (!itemHash) {
        return null;
      }

      return equipment[itemHash];
    }
  );
};

function deepCollectiblesFromPresentationNodes(
  node,
  collectibleDefs,
  presentationNodeDefs
) {
  return flatMapDeep(node.children.presentationNodes, childNode => {
    const childPresentationNode =
      presentationNodeDefs[childNode.presentationNodeHash];

    if (
      childPresentationNode.children.collectibles &&
      childPresentationNode.children.collectibles.length
    ) {
      return childPresentationNode.children.collectibles.map(
        c => collectibleDefs[c.collectibleHash]
      );
    }

    return deepCollectiblesFromPresentationNodes(
      childPresentationNode,
      collectibleDefs,
      presentationNodeDefs
    );
  });
}

const ROOT_ITEMS_PRESENTATION_NODE_HASH = 3790247699;
export const collectiblesByItemHashSelector = createSelector(
  collectibleDefsSelector,
  presentationNodeDefsSelector,
  (collectibleDefs, presentationNodeDefs) => {
    if (!(presentationNodeDefs && collectibleDefs)) {
      return {};
    }

    const rootNode = presentationNodeDefs[ROOT_ITEMS_PRESENTATION_NODE_HASH];
    return keyBy(
      deepCollectiblesFromPresentationNodes(
        rootNode,
        collectibleDefs,
        presentationNodeDefs
      ),
      'itemHash'
    );
  }
);

export const makeItemHashToCollectableSelector = () => {
  return createSelector(
    collectiblesByItemHashSelector,
    itemHashPropSelector,
    (keyedCollectibles, itemHash) => keyedCollectibles[itemHash]
  );
};

export const makeItemPerksSelector = () => {
  return createSelector(
    itemDefsSelector,
    makeItemSelector(),
    (itemDefs, item) => {
      if (!itemDefs || !item) {
        return null;
      }

      return (
        item.sockets &&
        item.sockets.socketEntries &&
        item.sockets.socketEntries
          .map(socket => {
            const plugItem = itemDefs[socket.singleInitialItemHash];
            return plugItem;
          })
          .filter(plugItem => {
            return (
              plugItem &&
              plugItem.plug &&
              plugItem.plug.plugCategoryIdentifier === 'intrinsics'
            );
          })
      );
    }
  );
};
