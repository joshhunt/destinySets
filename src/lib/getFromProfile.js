import { keyBy, isNumber } from 'lodash';
import fp from 'lodash/fp';

const ITEM_BLACKLIST = [
  4248210736, // Default shader
  1608119540 // Default emblem
];

function itemMapper(item) {
  return item;
}

function fromCharacter(data) {
  return fp.flatMap(character => character.items.map(itemMapper), data);
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
  const firstLevel = mapSockets(data, socket => socket.plugObjectives);
  const reusablePlugs = mapSockets(data, socket =>
    fp.flatMap(plug => plug.plugObjectives, socket.reusablePlugs)
  );

  return [...firstLevel, ...reusablePlugs];
}

const fromProfilePlugSets = fp.flow(
  fp.flatMap(p => Object.values(p)),
  fp.flatMap(p => p),
  fp.filter(p => p.canInsert),
  fp.map(p => p.plugItemHash)
);

function objectivesFromVendors(data) {
  return fp.flow(
    fp.flatMap(character => {
      return (
        character &&
        fp.flatMap(vendor => {
          return fp.flatMap(plugState => {
            return plugState.plugObjectives;
          }, vendor.plugStates.data);
        }, character.itemComponents)
      );
    }),
    fp.compact
  )(data);
}

// function itemsFromVendorPlugStates(data) {
//   return fp.flow(
//     fp.flatMap(character => {
//       return (
//         character &&
//         fp.flatMap(vendor => {
//           return fp.flatMap(plugState => {
//             return plugState.canInsert ? plugState.plugItemHash : null;
//           }, vendor.plugStates.data);
//         }, character.itemComponents)
//       );
//     }),
//     fp.compact
//   )(data);
// }

// const socketsFromVendors = fp.flatMap(vendor =>
//   fromSockets(vendor.sockets.data)
// );

// function fromVendorSockets(data) {
//   return fp.flow(
//     fp.flatMap(
//       character => character && socketsFromVendors(character.itemComponents)
//     ),
//     fp.compact
//   )(data);
// }

function mergeItems(acc, [items, itemLocation]) {
  items.forEach(thing => {
    const itemHash = isNumber(thing) ? thing : thing.itemHash;

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

    acc[itemHash].instances.push({
      location: itemLocation,
      itemState: thing.state
    });
  });

  return acc;
}

export function inventoryFromProfile(profile, vendorDefs) {
  const inventory = [
    [fromCharacter(profile.characterEquipment.data), 'characterEquipment'],
    [fromCharacter(profile.characterInventories.data), 'characterInventories'],
    [profile.profileInventory.data.items.map(itemMapper), 'profileInventory'],
    [fromSockets(profile.itemComponents.sockets.data), 'itemSockets'],
    // [fromVendorSockets(profile.$vendors.data), 'vendorSockets'],
    [fromProfilePlugSets(profile.profilePlugSets.data), 'profilePlugSets']
    // [itemsFromVendorPlugStates(profile.$vendors.data), 'vendorPlugStates']
  ].reduce(mergeItems, {});

  window.__inventory = inventory;
  return inventory;
}

export function objectivesFromProfile(profile) {
  return keyBy(
    [
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
