import { keyBy } from 'lodash';
import fp from 'lodash/fp';

import { getDebugId } from 'app/lib/ls';
import { saveDebugInfo } from 'app/lib/telemetry';

const ITEM_BLACKLIST = [
  4248210736, // Default shader
  1608119540 // Default emblem
];

function itemMapper(item) {
  return item.itemHash;
}

function fromCharacter(data) {
  return fp.flatMap(character => character.items.map(itemMapper), data);
}

const flavorObjectivesFromKiosk = data =>
  fp.flow(
    fp.values,
    fp.flatten,
    fp.map(item => item.flavorObjective),
    fp.compact
  )(data.kioskItems);

function fromKiosks(data, vendorDefs) {
  return fp.flow(
    fp.toPairs,
    fp.flatMap(([vendorHash, vendorItems]) => {
      const vendor = vendorDefs[vendorHash];

      return vendorItems.map(vendorItem => {
        const item = vendor.itemList[vendorItem.index];
        return item.itemHash;
      });
    })
  )(data.kioskItems);
}

function fromCharacterKiosks(data, vendorDefs) {
  return fp.flatMap(character => fromKiosks(character, vendorDefs), data);
}

function mapSockets(data, fn) {
  return fp.flow(
    fp.flatMap(({ sockets }) => fp.flatMap(socket => fn(socket), sockets)),
    fp.compact
  )(data);
}

function fromSockets(data) {
  return mapSockets(data, socket =>
    fp.flatMap(plugItem => {
      return plugItem.canInsert ? plugItem.plugItemHash : null;
    }, socket.reusablePlugs)
  );
}

function objectivesFromSockets(data) {
  return mapSockets(data, socket => socket.plugObjectives);
}

function objectivesFromVendors(data) {
  // return fp.flow(
  //   fp.flatMap(character => character.itemComponents),
  //   fp.flatMap(vendor => vendor.plugStates.data),
  //   fp.flatMap(plugStates => plugStates.plugObjectives)
  // )(data);

  return fp.flatMap(character => {
    try {
      if (!character.itemComponents) {
        if (!window.localStorage.alreadySentDebugMissingItemComponents) {
          saveDebugInfo({
            debugId: `${getDebugId}_missingItemComponents`,
            data
          });

          window.localStorage.setItem(
            'alreadySentDebugMissingItemComponents',
            'true'
          );
        }
      }
    } catch (e) {}

    return fp.flatMap(vendor => {
      return fp.flatMap(plugStates => {
        return plugStates.plugObjectives;
      }, vendor.plugStates.data);
    }, character.itemComponents);
  }, data);
}

function fromVendorSockets(data) {
  return fp.flatMap(
    character =>
      fp.flatMap(
        vendor => fromSockets(vendor.sockets.data),
        character.itemComponents
      ),
    data
  );
}

function mergeItems(acc, [items, itemLocation]) {
  items.forEach(itemHash => {
    if (ITEM_BLACKLIST.includes(itemHash)) {
      return acc;
    }

    if (!acc[itemHash]) {
      acc[itemHash] = {
        itemHash,
        obtained: true,
        instances: []
      };
    }

    acc[itemHash].instances.push({ location: itemLocation });
  });

  return acc;
}

export function inventoryFromProfile(profile, vendorDefs) {
  const inventory = [
    [fromCharacter(profile.characterEquipment.data), 'characterEquipment'],
    [fromCharacter(profile.characterInventories.data), 'characterInventories'],
    [profile.profileInventory.data.items.map(itemMapper), 'profileInventory'],
    [
      fromCharacterKiosks(profile.characterKiosks.data, vendorDefs),
      'characterKiosks'
    ],
    [fromKiosks(profile.profileKiosks.data, vendorDefs), 'profileKiosks'],
    [fromSockets(profile.itemComponents.sockets.data), 'itemSockets'],
    [fromVendorSockets(profile.$vendors.data), 'vendorSockets']
  ].reduce(mergeItems, {});

  // Test
  inventory[1337] = {
    itemHash: 1337,
    obtained: true,
    instances: [{ location: 'fakeItemFromProfile' }]
  };

  window.__inventory = inventory;

  return inventory;
}

export function objectivesFromProfile(profile) {
  return keyBy(
    [
      ...flavorObjectivesFromKiosk(profile.profileKiosks.data),
      ...objectivesFromSockets(profile.itemComponents.sockets.data),
      ...fp.flatMap(
        obj => obj.objectives,
        profile.itemComponents.objectives.data
      ),
      ...objectivesFromVendors(profile.$vendors.data)
    ],
    'objectiveHash'
  );
}
