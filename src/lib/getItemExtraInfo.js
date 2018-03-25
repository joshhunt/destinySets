export default function getItemExtraInfo(item, _itemInventoryEntry) {
  const itemInventoryEntry = _itemInventoryEntry || {
    instances: [],
    obtained: false
  };
  const extraInfo = [];

  itemInventoryEntry.dismantled
    ? extraInfo.push('Dismantled')
    : extraInfo.push(
        ...itemInventoryEntry.instances
          .map(getFriendlyItemLocation)
          .filter(Boolean)
      );

  // if (objectives && !$objectives) {
  //   const baseItem = item.$baseItem
  //     ? `"${item.$baseItem.displayProperties.name}"`
  //     : 'the base item';

  //   extraInfo.push(
  //     `Collect ${
  //       baseItem
  //     } and have it on a character to see Ornament status and objectives.`
  //   );
  // }

  return extraInfo;
}

const LOCATIONS = {
  characterEquipment: 'Equipped on character',
  characterInventories: 'On character',
  characterKiosks: 'Unlocked in Kiosk',
  profileKiosks: 'Unlocked in Kiosk',
  itemSockets: 'itemSockets',
  vendorSockets: 'vendorSockets'
};

export function getFriendlyItemLocation(instance) {
  return LOCATIONS[instance.location] || instance.location;
}
