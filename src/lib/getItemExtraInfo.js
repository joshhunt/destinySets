import { uniq } from 'lodash';

export default function getItemExtraInfo(item, _itemInventoryEntry) {
  const itemInventoryEntry = _itemInventoryEntry || {
    instances: [{}],
    obtained: false
  };

  const extraInfo = [];

  if (itemInventoryEntry.instances[0].location === 'progressionChecklist') {
    return ['Dismantled & unlocked in Forsaken Collections'];
  }

  itemInventoryEntry.dismantled
    ? extraInfo.push('Dismantled')
    : extraInfo.push(
        ...uniq(
          itemInventoryEntry.instances
            .map(getFriendlyItemLocation)
            .filter(Boolean)
        )
      );

  return extraInfo;
}

const LOCATIONS = {
  characterEquipment: 'Equipped on character',
  characterInventories: 'On character',
  profileInventory: 'In vault',
  characterKiosks: 'Unlocked in Kiosk',
  profileKiosks: 'Unlocked in Kiosk',
  destinySetsManual: 'Manually marked as collected'
};

export function getFriendlyItemLocation(instance) {
  return LOCATIONS[instance.location];
}
