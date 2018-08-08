import { createSelector } from 'reselect';
import immer from 'immer';
import { flatMap } from 'lodash';

import {
  HUNTER,
  TITAN,
  WARLOCK,
  FILTER_SHOW_COLLECTED,
  FILTER_SHOW_PS4_EXCLUSIVES,
  FILTER_SHOW_HIDDEN_SETS
} from 'app/lib/destinyEnums';
import CONSOLE_EXCLUSIVES from 'app/extraData/consoleExclusives';

import { inventorySelector } from 'app/store/selectors';
import * as ls from 'app/lib/ls';

import { getItemClass } from 'app/lib/destinyUtils';
import fancySearch from 'app/lib/fancySearch';
import { default as sortItems } from 'app/lib/sortItemsIntoSections';

const slugify = str =>
  str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/^-+|-+$/g, ''); // remove leading, trailing -

function filterItem(item, inventory, filters) {
  if (!item) {
    return false;
  }

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
      (inventoryEntry.obtained ||
        inventoryEntry.dismantled ||
        inventoryEntry.checklisted ||
        inventoryEntry.manuallyObtained)
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

function query(itemDefsArray, checklistDefsArray, queryTerm) {
  if (itemDefsArray.length === 0) {
    return [];
  }

  const results = fancySearch(queryTerm, {
    item: itemDefsArray,
    checklist: checklistDefsArray
  });

  return (results || []).filter(Boolean);
}

const filtersSelector = state => state.app.filters;
const hiddenSetsSelector = state => state.app.hiddenSets;
const propsSetDataSelector = (state, props) => props.route.setData;
const itemDefsSelector = state => state.definitions.itemDefs;
const checklistDefsSelector = state => state.definitions.checklistDefs;

const setDataSelector = createSelector(
  itemDefsSelector,
  checklistDefsSelector,
  propsSetDataSelector,
  (itemDefs, checklistDefs, setData) => {
    const itemDefsArray = Object.values(itemDefs || {});
    const checklistDefsArray = Object.values(checklistDefs || {});

    const q = query.bind(null, itemDefsArray, checklistDefsArray);

    const newSetData = setData.map(group => {
      const sets = group.sets.map(_set => {
        let set = { ..._set };

        if (set.query) {
          set = {
            ...set,
            sections: sortItems(q(set.query))
          };
        }

        const sections = set.sections.map(_section => {
          let section = { ..._section };

          if (section.query) {
            const queriedItems = q(section.query).map(item => item.hash);
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

      return { ...group, slug: slugify(group.name), sets };
    });

    return newSetData;
  }
);

export const filteredSetDataSelector = createSelector(
  filtersSelector,
  hiddenSetsSelector,
  setDataSelector,
  inventorySelector,
  itemDefsSelector,
  (filters, hiddenSets, setData, inventory, itemDefs) => {
    const prevWhitelistedItems = ls.getTempFilterItemWhitelist();
    //const hiddenSets = ['WARMIND_TRIALS'];

    // TODO: Can we memoize this or something to prevent making changes to sets that don't change?
    const result = immer({ setData }, draft => {
      draft.setData.forEach(group => {
        group.sets.forEach(set => {
          set.hidden = hiddenSets.hasOwnProperty(set.id) && hiddenSets[set.id];
          if (
            !filters[FILTER_SHOW_HIDDEN_SETS] &&
            set.hidden
          ) {
            set.sections = [];
            return;
          }

          set.sections.forEach(section => {
            section.itemGroups = section.itemGroups
              .map(itemList => {
                return itemList.filter(itemHash => {
                  if (!itemDefs && prevWhitelistedItems.length > 1) {
                    return prevWhitelistedItems.includes(itemHash);
                  } else if (!itemDefs) {
                    return true;
                  }

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

    if (itemDefs) {
      const itemsLeft = flatMap(result.setData, group =>
        flatMap(group.sets, set =>
          flatMap(set.sections, section => flatMap(section.itemGroups, x => x))
        )
      );

      ls.saveTempFilterItemWhitelist(itemsLeft);
    }

    return result.setData;
  }
);
