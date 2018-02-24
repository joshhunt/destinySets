export default function getItemExtraInfo(item) {
  const { objectives, $dismantled, $inventory, $objectives } = item;

  const extraInfo = [];

  $dismantled
    ? extraInfo.push('Dismantled')
    : extraInfo.push(
        ...($inventory || []).map(getFriendlyItemLocation).filter(Boolean)
      );

  if (objectives && !$objectives) {
    extraInfo.push(
      'Collect the base item and have it on a character to see Ornament status and objectives'
    );
  }

  return extraInfo;
}

export function getFriendlyItemLocation(instance) {
  switch (instance.$location) {
    case 'profileInventory':
      return 'In Vault';

    case 'profileKiosk':
    case 'characterKiosk':
      return 'Unlocked in Kiosk';

    case 'characterInventory':
      return 'On Character';

    case 'characterEquipment':
      return 'Equipped on Character';

    default:
      return null;
  }
}
