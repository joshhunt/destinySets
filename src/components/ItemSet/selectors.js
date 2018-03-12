import { createSelector } from 'reselect';

const itemDefsSelector = state => state.app.itemDefs;
const propsSectionsSelector = (state, props) => props.sections;

export const makeSelectedItemDefsSelector = () => {
  return createSelector(
    itemDefsSelector,
    propsSectionsSelector,
    (itemDefs, sections) => {
      const items = {};

      if (!itemDefs) {
        return items;
      }

      sections.forEach(section => {
        section.items.forEach(itemHash => {
          items[itemHash] = itemDefs[itemHash];
        });
      });

      return items;
    }
  );
};
