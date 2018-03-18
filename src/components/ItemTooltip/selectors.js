import { createSelector } from 'reselect';

import { NUMERICAL_STATS, STAT_BLACKLIST } from 'app/lib/destinyEnums';

const itemDefsSelector = state => state.app.itemDefs;
const itemHashPropSelector = (state, props) => props.itemHash;

export const statDefsSelector = state => state.app.statDefs;

export const makeItemStatsSelector = () => {
  return createSelector(
    itemDefsSelector,
    statDefsSelector,
    itemHashPropSelector,
    (itemDefs, statDefs, itemHash) => {
      if (!(itemDefs && statDefs)) {
        return null;
      }

      const item = itemDefs[itemHash];
      const stats = Object.values((item.stats && item.stats.stats) || {});

      if (stats.length < 1) {
        return null;
      }

      const filteredStats = stats
        .map(stat => {
          const statDef = statDefs[stat.statHash];

          if (
            !statDef ||
            !statDef.displayProperties.name ||
            STAT_BLACKLIST.includes(stat.statHash)
          ) {
            return null;
          }

          return stat;
        })
        .filter(Boolean)
        .sort(a => (NUMERICAL_STATS.includes(a.statHash) ? -1 : 1));

      return filteredStats.length ? filteredStats : null;
    }
  );
};
