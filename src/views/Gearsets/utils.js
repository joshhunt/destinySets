import { forEach, flatMap, isObject } from 'lodash';
import { collectKioskItems } from 'app/lib/destiny';

const RARITY_COLORS = {
  legendary: '#522f65',
  superior: '#522f65',
  rare: '#5076a3',
  common: '#366f3c',
  basic: '#c3bcb4',
  uncommon: '#c3bcb4',
  exotic: '#ceae33'
};

export function flatMapSetItems(sets) {
  return flatMap(sets, setsList => {
    return flatMap(setsList.sets, set => {
      return flatMap(set.sections, setSection => {
        return setSection.items;
      });
    });
  });
}

export function logItems(profile, itemDefs, vendorDefs) {
  console.group('Item Log');
  window.DEBUG_profile = profile;
  window.DEBUG_itemDefs = itemDefs;

  function logItem(itemHash) {
    const item = isObject(itemHash) ? itemHash : itemDefs[itemHash];
    const tier = (item.inventory.tierTypeName || '').toLowerCase();

    console.log(
      `%c${tier} ${item.itemTypeDisplayName.toLowerCase()}`,
      `font-weight: bold; background: ${RARITY_COLORS[tier]}; color: white`,
      `${item.displayProperties.name} [${item.hash}]`
    );
  }

  function _t(item) {
    if (!item) {
      return '';
    }
    return item.inventory.tierTypeName || '';
  }

  function logItems(itemHashList) {
    itemHashList
      .map(h => itemDefs[h])
      .sort((i1, i2) => {
        if (_t(i1) > _t(i2)) {
          return 1;
        } else if (_t(i1) < _t(i2)) {
          return -1;
        } else {
          return 0;
        }
      })
      .forEach(item => {
        logItem(item);
      });
  }

  const {
    characterInventories,
    profileInventory,
    characterEquipment
  } = profile;

  forEach(characterInventories.data, ({ items }, characterId) => {
    console.groupCollapsed('Character inventory', characterId);
    logItems(items.map(({ itemHash }) => itemHash));
    console.groupEnd();
  });

  forEach(characterEquipment.data, ({ items }, characterId) => {
    console.groupCollapsed('Character equipped', characterId);
    logItems(items.map(({ itemHash }) => itemHash));
    console.groupEnd();
  });

  console.groupCollapsed('Profile inventory (vault)');
  logItems(profileInventory.data.items.map(({ itemHash }) => itemHash));
  console.groupEnd();

  console.groupCollapsed('Profile Kiosk');
  logItems(
    collectKioskItems(
      profile.profileKiosks.data.kioskItems,
      itemDefs,
      vendorDefs
    )
  );
  console.groupEnd();

  Object.values(profile.characterKiosks.data).forEach(charKiosk => {
    console.groupCollapsed('Character kiosk');
    logItems(collectKioskItems(charKiosk.kioskItems, itemDefs, vendorDefs));
    console.groupEnd();
  }, []);

  console.groupEnd();
}
