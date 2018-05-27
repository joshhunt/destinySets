import { keyBy, every } from 'lodash';
import fp from 'lodash/fp';

import {
  getDebugId,
  getProfileErrorReported,
  saveProfileErrorReported
} from 'app/lib/ls';
import { saveDebugInfo, trackError } from 'app/lib/telemetry';

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

      return vendorItems
        .map(vendorItem => {
          if (!vendorItem.canAcquire) {
            return null;
          }

          const item = vendor.itemList[vendorItem.index];
          return item.itemHash;
        })
        .filter(Boolean);
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

function itemsFromVendorPlugStates(data) {
  return fp.flow(
    fp.flatMap(character => {
      return (
        character &&
        fp.flatMap(vendor => {
          return fp.flatMap(plugState => {
            return plugState.canInsert ? plugState.plugItemHash : null;
          }, vendor.plugStates.data);
        }, character.itemComponents)
      );
    }),
    fp.compact
  )(data);
}

function failureStateFromVendorPlugStates(data) {
  return fp.flow(
    fp.flatMap(character => {
      return (
        character &&
        fp.flatMap(vendor => {
          return fp.flatMap(plugState => {
            return plugState.canInsert ? null : plugState;
          }, vendor.plugStates.data);
        }, character.itemComponents)
      );
    }),
    fp.compact
  )(data);
}

const socketsFromVendors = fp.flatMap(vendor =>
  fromSockets(vendor.sockets.data)
);

function fromVendorSockets(data) {
  return fp.flow(
    fp.flatMap(
      character => character && socketsFromVendors(character.itemComponents)
    ),
    fp.compact
  )(data);
}

function mergeItems(acc, [items, itemLocation]) {
  items.forEach(_itemHash => {
    let baseEntry = _itemHash;
    if (!baseEntry.itemHash) {
      baseEntry = { itemHash: _itemHash };
    }

    const { itemHash } = baseEntry;

    if (ITEM_BLACKLIST.includes(itemHash)) {
      return acc;
    }

    if (!acc[itemHash]) {
      acc[itemHash] = {
        itemHash,
        extraInfo: baseEntry,
        obtained: true,
        instances: []
      };
    }

    acc[itemHash].instances.push({ location: itemLocation });
  });

  return acc;
}

function reportError(err, name, profile) {
  console.error(`Error in getFromProfile ${name}`);
  console.error(err);

  const error = err || new Error('Unknown error');
  trackError(error);

  if (getProfileErrorReported()) {
    return;
  }

  saveDebugInfo(
    {
      debugId: getDebugId(),
      profile: JSON.stringify(profile || { emptry: true }),
      error: error.toString && error.toString(),
      errorStack: error.stack
    },
    `caughtGetFromProfile/${name}`
  );

  saveProfileErrorReported(true);
}

function wrapForError(name, profile, fn) {
  try {
    return fn();
  } catch (err) {
    reportError(err, name, profile);
  }
}

export function inventoryFromProfile(profile, vendorDefs) {
  return wrapForError('inventoryFromProfile', profile, () => {
    const inventory = [
      [fromCharacter(profile.characterEquipment.data), 'characterEquipment'],
      [
        fromCharacter(profile.characterInventories.data),
        'characterInventories'
      ],
      [profile.profileInventory.data.items.map(itemMapper), 'profileInventory'],
      [
        fromCharacterKiosks(profile.characterKiosks.data, vendorDefs),
        'characterKiosks'
      ],
      [fromKiosks(profile.profileKiosks.data, vendorDefs), 'profileKiosks'],
      [fromSockets(profile.itemComponents.sockets.data), 'itemSockets'],
      [fromVendorSockets(profile.$vendors.data), 'vendorSockets'],
      [fromProfilePlugSets(profile.profilePlugSets.data), 'profilePlugSets'],
      [itemsFromVendorPlugStates(profile.$vendors.data), 'vendorPlugStates']
    ].reduce(mergeItems, {});

    window.__inventory = inventory;
    return inventory;
  });
}

export function objectivesFromProfile(profile) {
  const objectives = wrapForError('objectivesFromProfile', profile, () => {
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
  });

  window.__objectives = objectives;
  return objectives;
}

export function relevantPlugDataFromProfile(profile) {
  const ddd = failureStateFromVendorPlugStates(profile.$vendors.data)
    .filter(plugState => {
      return plugState.plugObjectives
        ? every(plugState.plugObjectives, objective => objective.complete)
        : true;
    })
    .reduce((acc, plugState) => {
      acc = {
        ...acc,
        [plugState.plugItemHash]: plugState
      };
      return acc;
    }, {});

  console.log('Got some:', ddd);

  return ddd;
}
