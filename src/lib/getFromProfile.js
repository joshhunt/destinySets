import { chain, flatMap, keyBy } from 'lodash';

import fp from 'lodash/fp';

const ITEM_BLACKLIST = [
  4248210736, // Default shader
  1608119540 // Default emblem
];

function fromCharacter(data) {
  return flatMap(data, character => character.items.map(item => item.itemHash));
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
  return flatMap(data, character => fromKiosks(character, vendorDefs));
}

function mapSockets(data, fn) {
  return chain(data)
    .flatMap(({ sockets }) => flatMap(sockets, socket => fn(socket)))
    .compact()
    .value();
}

function fromSockets(data) {
  return mapSockets(data, socket =>
    flatMap(socket.reusablePlugs, plugItem => {
      return plugItem.canInsert ? plugItem.plugItemHash : null;
    })
  );
}

function objectivesFromSockets(data) {
  return mapSockets(data, socket => socket.plugObjectives);
}

function fromVendorSockets(data) {
  return chain(data)
    .flatMap(character =>
      flatMap(character.itemComponents, vendor =>
        fromSockets(vendor.sockets.data)
      )
    )
    .value();
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

export default function getFromProfile(profile, vendorDefs) {
  const items = [
    [fromCharacter(profile.characterEquipment.data), 'characterEquipment'],
    [fromCharacter(profile.characterInventories.data), 'characterInventories'],
    [
      fromCharacterKiosks(profile.characterKiosks.data, vendorDefs),
      'characterKiosks'
    ],
    [fromKiosks(profile.profileKiosks.data, vendorDefs), 'profileKiosks'],
    [fromSockets(profile.itemComponents.sockets.data), 'itemSockets'],
    [fromVendorSockets(profile.$vendors.data), 'vendorSockets']
  ].reduce(mergeItems);

  const objectives = keyBy(
    [
      ...flavorObjectivesFromKiosk(profile.profileKiosks.data),
      ...objectivesFromSockets(profile.itemComponents.sockets.data),
      ...flatMap(profile.itemComponents.objectives.data, obj => obj.objectives)
    ],
    'objectiveHash'
  );

  return { items, objectives };
}
