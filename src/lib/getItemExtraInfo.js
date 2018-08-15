import { uniq } from 'lodash';

export default function getItemExtraInfo(item, _itemInventoryEntry) {
  const itemInventoryEntry = _itemInventoryEntry || {
    instances: [{}],
    obtained: false
  };

  const extraInfo = [];

  extraInfo.push(
    ...uniq(
      itemInventoryEntry.instances.map(getFriendlyItemLocation).filter(Boolean)
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
  // profilePlugSets: 'Unlocked',
  // vendorPlugStates: 'Unlocked'
};

const masterworkLocations = [
  'characterEquipment',
  'characterInventories',
  'profileInventory'
];

export function getFriendlyItemLocation(instance) {
  let location = LOCATIONS[instance.location];

  if (masterworkLocations.includes(instance.location)) {
    location = `${location} & masterworked`;
  }

  return location;
}
