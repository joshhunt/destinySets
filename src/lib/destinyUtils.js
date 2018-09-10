import { EMBLEM, HUNTER, TITAN, WARLOCK, NO_CLASS } from 'app/lib/destinyEnums';
import { getLower } from 'app/lib/utils';
import CLASS_OVERRIDES from 'app/extraData/classOverrides';

// TODO: we can just use itemCategoryHashes for this now?
export const isOrnament = item =>
  item.inventory &&
  item.inventory.stackUniqueLabel &&
  item.plug &&
  item.plug.plugCategoryIdentifier &&
  item.plug.plugCategoryIdentifier.includes('skins');

export const flagEnum = (state, value) => !!(state & value);

function classFromString(str) {
  const results = str.match(/hunter|titan|warlock/);
  if (!results) {
    return NO_CLASS;
  }

  switch (results[0]) {
    case 'hunter':
      return HUNTER;
    case 'warlock':
      return WARLOCK;
    case 'titan':
      return TITAN;
    default:
      return NO_CLASS;
  }
}

export const getItemClass = item => {
  if (!item) {
    return NO_CLASS;
  }

  if (CLASS_OVERRIDES.hasOwnProperty(item.hash)) {
    return CLASS_OVERRIDES[item.hash];
  }

  const stackUniqueLabel = getLower(item, 'inventory.stackUniqueLabel');
  const plugCategoryIdentifier = getLower(item, 'plug.plugCategoryIdentifier');

  if (hasCategoryHash(item, EMBLEM) && stackUniqueLabel.length) {
    return classFromString(stackUniqueLabel);
  }

  // TODO: Ornaments might provide this better now
  if (item.classType === 3 && isOrnament(item)) {
    return classFromString(plugCategoryIdentifier);
  }

  return item.classType;
};

export function hasCategoryHash(item, categoryHash) {
  return (
    item.itemCategoryHashes && item.itemCategoryHashes.includes(categoryHash)
  );
}
