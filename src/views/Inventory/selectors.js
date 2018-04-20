import { createSelector } from 'reselect';
import immer from 'immer';

import {
  HUNTER,
  TITAN,
  WARLOCK,
  FILTER_SHOW_COLLECTED,
  FILTER_SHOW_PS4_EXCLUSIVES
} from 'app/lib/destinyEnums';
import CONSOLE_EXCLUSIVES from 'app/extraData/consoleExclusives';

import { inventorySelector } from 'app/store/selectors';

import { getItemClass } from 'app/lib/destinyUtils';
import fancySearch from 'app/lib/fancySearch';
import { default as sortItems } from 'app/lib/sortItemsIntoSections';

function filterItem(item, inventory, filters) {
  if (
    !filters[FILTER_SHOW_PS4_EXCLUSIVES] &&
    CONSOLE_EXCLUSIVES.ps4.includes(item.hash)
  ) {
    return false;
  }

  if (!filters[FILTER_SHOW_COLLECTED] && inventory) {
    const inventoryEntry = inventory[item.hash];
    if (
      inventoryEntry &&
      (inventoryEntry.obtained || inventoryEntry.dismantlede)
    ) {
      return false;
    }
  }

  const itemClass = getItemClass(item);

  if (itemClass === 3) {
    return true;
  }

  if (filters[HUNTER] && itemClass === HUNTER) {
    return true;
  }

  if (filters[TITAN] && itemClass === TITAN) {
    return true;
  }

  if (filters[WARLOCK] && itemClass === WARLOCK) {
    return true;
  }

  return false;
}

function query(queryTerm, itemDefsArray) {
  if (itemDefsArray.length === 0) {
    return [];
  }

  return fancySearch(queryTerm, { item: itemDefsArray });
}

const filtersSelector = state => state.app.filters;
const propsSetDataSelector = (state, props) => props.route.setData;
const itemDefsSelector = state => state.app.itemDefs;

const setDataSelector = createSelector(
  itemDefsSelector,
  propsSetDataSelector,
  (itemDefs, setData) => {
    const itemDefsArray = Object.values(itemDefs || {});

    const newSetData = setData.map(group => {
      const sets = group.sets.map(set => {
        if (set.query) {
          return {
            ...set,
            sections: sortItems(query(set.query, itemDefsArray))
          };
        }

        const sections = set.sections.map(_section => {
          let section = { ..._section };

          if (section.query) {
            const queriedItems = query(section.query, itemDefsArray).map(
              item => item.hash
            );
            section = { ...section, items: queriedItems };
          }

          if (!section.itemGroups) {
            section = {
              ...section,
              itemGroups: [...(section.itemGroup || []), section.items]
            };
          }

          delete section.items;

          return section;
        });

        return { ...set, sections };
      });

      return { ...group, sets };
    });

    return newSetData;
  }
);

export const filteredSetDataSelector = createSelector(
  filtersSelector,
  setDataSelector,
  inventorySelector,
  itemDefsSelector,
  (filters, setData, inventory, itemDefs) => {
    if (!itemDefs) {
      return setData;
    }

    // TODO: Can we memoize this or something to prevent making changes to sets that don't change?
    const result = immer({ setData }, draft => {
      draft.setData.forEach(group => {
        group.sets.forEach(set => {
          set.sections.forEach(section => {
            section.itemGroups = section.itemGroups
              .map(itemList => {
                return itemList.filter(itemHash => {
                  const item = itemDefs[itemHash];
                  return filterItem(item, inventory, filters);
                });
              })
              .filter(itemList => itemList.length);
          });

          set.sections = set.sections.filter(
            ({ itemGroups }) => itemGroups.length
          );
        });

        group.sets = group.sets.filter(({ sections }) => sections.length);
      });

      draft.setData = draft.setData.filter(({ sets }) => sets.length);
    });

    return result.setData;
  }
);
