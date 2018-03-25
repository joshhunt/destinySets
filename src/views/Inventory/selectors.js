import { createSelector } from 'reselect';
import immer from 'immer';

import { HUNTER, TITAN, WARLOCK } from 'app/lib/destinyEnums';
import { getItemClass } from 'app/lib/destinyUtils';
import fancySearch from 'app/lib/fancySearch';
import { default as sortItems } from 'app/lib/sortItemsIntoSections';

function filterItem(item, filters) {
  // if (
  //   !filter[SHOW_PS4_EXCLUSIVES] &&
  //   consoleExclusives.ps4.includes(item.hash)
  // ) {
  //   return false;
  // }

  // if (!filter[SHOW_COLLECTED] && item.$obtained) {
  //   return false;
  // }

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

        const sections = set.sections.map(section => {
          if (section.query) {
            const queriedItems = query(section.query, itemDefsArray).map(
              item => item.hash
            );
            return { ...section, items: queriedItems };
          }

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
  itemDefsSelector,
  (filters, setData, itemDefs) => {
    if (!itemDefs) {
      return setData;
    }

    // TODO: Can we memoize this or something to prevent making changes to sets that don't change?
    const result = immer({ setData }, draft => {
      draft.setData.forEach(group => {
        group.sets.forEach(set => {
          set.sections.forEach(section => {
            section.items = section.items.filter(itemHash => {
              const item = itemDefs[itemHash];
              return filterItem(item, filters);
            });
          });

          set.sections = set.sections.filter(({ items }) => items.length > 0);
        });

        group.sets = group.sets.filter(({ sections }) => sections.length > 0);
      });

      draft.setData = draft.setData.filter(({ sets }) => sets.length > 0);
    });

    return result.setData;
  }
);
