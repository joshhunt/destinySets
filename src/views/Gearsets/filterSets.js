import { flatMapSetItems } from './utils';

import {
  HUNTER,
  TITAN,
  WARLOCK
} from 'app/views/DataExplorer/definitionSources';

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

          if (item.classType === 3) {
            return true;
          }

          if (filter[HUNTER] && item.classType === HUNTER) {
            return true;
          }

          if (filter[TITAN] && item.classType === TITAN) {
            return true;
          }

          if (filter[WARLOCK] && item.classType === WARLOCK) {
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
