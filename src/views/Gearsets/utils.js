import { forEach, flatMap } from 'lodash';

export function mapItems(itemHashes, itemDefs, inventory) {
  return itemHashes
    .map(itemHash => {
      const item = itemDefs[itemHash];

      if (!item) {
        console.warn('Unable to find item definition for ' + itemHash);
        return null;
      }

      return {
        $obtained: inventory.includes(item.hash),
        ...item
      };
    })
    .filter(Boolean);
}

export function logItems(profile, itemDefs) {
  window.DEBUG_profile = profile;
  window.DEBUG_itemDefs = itemDefs;

  const {
    characterInventories,
    profileInventory,
    characterEquipment
  } = profile;

  forEach(characterInventories.data, ({ items }, characterId) => {
    console.log('Character inventory', characterId);

    items.forEach(({ itemHash }) => {
      const item = itemDefs[itemHash];
      console.log(
        ` - ${itemHash}: ${item.displayProperties
          .name} [${item.itemTypeDisplayName}]`
      );
    });
  });

  console.log('');
  console.log('');
  forEach(characterEquipment.data, ({ items }, characterId) => {
    console.log('Character equipped', characterId);

    items.forEach(({ itemHash }) => {
      const item = itemDefs[itemHash];
      console.log(
        ` - ${itemHash}: ${item.displayProperties
          .name} [${item.itemTypeDisplayName}]`
      );
    });
  });

  console.log('');
  console.log('');

  console.log('Profile inventory (vault)');
  profileInventory.data.items.forEach(({ itemHash }) => {
    const item = itemDefs[itemHash];
    console.log(
      ` - ${itemHash}: ${item.displayProperties
        .name} [${item.itemTypeDisplayName}]`
    );
  });
}

export function flatMapSetItems(sets) {
  return flatMap(sets, setsList => {
    return flatMap(setsList.sets, set => {
      return flatMap(set.sections, setSection => {
        return setSection.items;
      });
    });
  });
}
