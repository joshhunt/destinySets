import { flatMapSetItems } from './utils';

import { EMBLEM, HUNTER, TITAN, WARLOCK } from 'app/lib/destinyEnums';

import consoleExclusives from '../consoleExclusives.js';

export const SHOW_PS4_EXCLUSIVES = -101;
export const SHOW_COLLECTED = -102;

export const FILTERS = [
  [TITAN, 'Titan'],
  [HUNTER, 'Hunter'],
  [WARLOCK, 'Warlock'],
  [SHOW_COLLECTED, 'Collected'],
  [SHOW_PS4_EXCLUSIVES, 'PS4 exclusives']
];

export const DEFAULT_FILTER = {
  [TITAN]: true,
  [HUNTER]: true,
  [WARLOCK]: true,
  [SHOW_COLLECTED]: true,
  [SHOW_PS4_EXCLUSIVES]: true
};

export const isOrnament = item =>
  item.inventory &&
  item.inventory.stackUniqueLabel &&
  item.plug &&
  item.plug.plugCategoryIdentifier &&
  item.plug.plugCategoryIdentifier.includes('skins');

const CLASS_OVERRIDE = {
  1907674137: WARLOCK,
  1907674138: HUNTER,
  1907674139: TITAN
};

const getItemClass = item => {
  if (CLASS_OVERRIDE.hasOwnProperty(item.hash)) {
    return CLASS_OVERRIDE[item.hash];
  }

  if (
    item.itemCategoryHashes.includes(EMBLEM) &&
    item.inventory.stackUniqueLabel
  ) {
    if (item.inventory.stackUniqueLabel.includes('hunter')) {
      return HUNTER;
    }

    if (item.inventory.stackUniqueLabel.includes('warlock')) {
      return WARLOCK;
    }

    if (item.inventory.stackUniqueLabel.includes('titan')) {
      return TITAN;
    }
  }

  if (item.classType === 3 && isOrnament(item)) {
    if (item.plug.plugCategoryIdentifier.includes('hunter')) {
      return HUNTER;
    }

    if (item.plug.plugCategoryIdentifier.includes('warlock')) {
      return WARLOCK;
    }

    if (item.plug.plugCategoryIdentifier.includes('titan')) {
      return TITAN;
    }
  }

  return item.classType;
};

export default function filterSets({ rawGroups, filter }) {
  const totalItems = flatMapSetItems(rawGroups).length;

  let totalItemCount = 0;
  let totalObtainedCount = 0;

  // fuck me, this is bad. filter all the items
  const filteredGroups = rawGroups.reduce((groupAcc, _group) => {
    const sets = _group.sets.reduce((setAcc, _set) => {
      let setItemCount = 0;
      let setObtainedCount = 0;

      const sections = _set.sections.reduce((sectionAcc, _section) => {
        const items = _section.items.filter(item => {
          if (
            !filter[SHOW_PS4_EXCLUSIVES] &&
            consoleExclusives.ps4.includes(item.hash)
          ) {
            return false;
          }

          if (!filter[SHOW_COLLECTED] && item.$obtained) {
            return false;
          }

          if (getItemClass(item) === 3) {
            return true;
          }

          if (filter[HUNTER] && getItemClass(item) === HUNTER) {
            return true;
          }

          if (filter[TITAN] && getItemClass(item) === TITAN) {
            return true;
          }

          if (filter[WARLOCK] && getItemClass(item) === WARLOCK) {
            return true;
          }

          return false;
        });

        const obtainedCount = items.length;
        const itemCount = items.filter(i => i.$obtained).length;

        totalItemCount += itemCount;
        totalObtainedCount += obtainedCount;

        setItemCount += itemCount;
        setObtainedCount += obtainedCount;

        if (items.length > 0) {
          sectionAcc.push({
            ..._section,
            items,
            itemCount,
            obtainedCount
          });
        }

        return sectionAcc;
      }, []);

      if (sections.length > 0) {
        setAcc.push({
          ..._set,
          sections,
          itemCount: setItemCount,
          obtainedCount: setObtainedCount
        });
      }

      return setAcc;
    }, []);

    if (sets.length > 0) {
      groupAcc.push({
        ..._group,
        sets: sets
      });
    }

    return groupAcc;
  }, []);

  const displayedItems = flatMapSetItems(filteredGroups).length;

  return {
    itemCount: totalItemCount,
    obtainedCount: totalObtainedCount,
    groups: filteredGroups,
    hiddenItemsCount: totalItems - displayedItems
  };
}
