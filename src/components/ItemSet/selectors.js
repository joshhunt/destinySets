import { createSelector } from 'reselect';
import {
  inventoryFromProfile,
  objectivesFromProfile
} from 'app/lib/getFromProfile';

const itemDefsSelector = state => state.app.itemDefs;
const propsSectionsSelector = (state, props) => props.sections;

export const makeSelectedItemDefsSelector = () => {
  return createSelector(
    itemDefsSelector,
    propsSectionsSelector,
    (itemDefs, sections) => {
      const items = {};

      if (!itemDefs) {
        return {};
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

const profileSelector = state => state.app.profile;
const vendorDefsSelector = state => state.app.vendorDefs;

export const inventorySelector = createSelector(
  profileSelector,
  vendorDefsSelector,
  (profile, vendorDefs) => {
    if (!(profile && vendorDefs)) {
      return null;
    }

    return inventoryFromProfile(profile, vendorDefs);
  }
);

export const objectivesSelector = createSelector(profileSelector, profile => {
  if (!profile) {
    return null;
  }

  return objectivesFromProfile(profile);
});
