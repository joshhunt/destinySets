import { forEach } from 'lodash';

export function logItems(profile, itemDefs) {
  window.DEBUG_profile = profile;
  window.DEBUG_itemDefs = itemDefs;

  const {
    characterInventories,
    profileInventory,
    characterEquipment,
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

  // const equippedItems = Object.values(
  //   characterEquipment.data
  // ).reduce((acc, { items }) => {
  //   return acc.concat(items.map(mapItem));
  // }, []);

  // const profileItems = profileInventory.data.items.map(mapItem);

  // return charItems.concat(profileItems, equippedItems);
}
