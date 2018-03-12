import { createSelector } from 'reselect';

import getFromProfile from './getFromProfile';

const profileSelector = state => state.app.profile;
const vendorDefsSelector = state => state.app.vendorDefs;

export const inventorySelector = createSelector(
  profileSelector,
  vendorDefsSelector,
  (profile, vendorDefs) => {
    if (!(profile && vendorDefs)) {
      return {};
    }

    return getFromProfile(profile, vendorDefs);
  }
);
