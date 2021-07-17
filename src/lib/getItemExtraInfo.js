import { uniq } from 'lodash';

import { MASTERWORK_FLAG } from 'app/lib/destinyEnums';

const DEBUG_INCLUDE_ALL_SOURCES = window.location.href.includes(
  'debugIncludeAllSources'
);

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

export const DISMANTLED_MESSAGE = 'Dismantled, recorded in Google Drive';
const LOCATIONS = {
  characterEquipment: 'Equipped on Character',
  characterInventories: 'On Character',
  profileInventory: 'In Vault',
  destinySetsManual: 'Manually Marked as Collected',
  cloudInventory: DISMANTLED_MESSAGE
  // profilePlugSets: 'Unlocked',
  // vendorPlugStates: 'Unlocked'
};

const masterworkLocations = [
  'characterEquipment',
  'characterInventories',
  'profileInventory'
];

export function getFriendlyItemLocation(instance) {
  let location = DEBUG_INCLUDE_ALL_SOURCES
    ? instance.location
    : LOCATIONS[instance.location];

  if (
    masterworkLocations.includes(instance.location) &&
    instance.itemState & MASTERWORK_FLAG
  ) {
    location = `${location} & Masterworked`;
  }

  return location;
}
