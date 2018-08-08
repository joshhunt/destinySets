import React from 'react';
import cx from 'classnames';

import {
  NUMERICAL_STATS,
  STAT_RECOVERY,
  STAT_RESILIENCE,
  STAT_MOBILITY
} from 'app/lib/destinyEnums';

import styles from './styles.styl';

const MAX_VALUES = {
  [STAT_RECOVERY]: 3,
  [STAT_RESILIENCE]: 3,
  [STAT_MOBILITY]: 3
};

function getMaxValue(statHash) {
  return MAX_VALUES[statHash] || 100;
}

export default function ItemStats({ stats, statDefs }) {
  return (
    <div className={styles.root}>
      {stats.map(({ statHash, value }) => {
        const def = statDefs[statHash];

        return (
          <div
            className={cx(
              styles.item,
              NUMERICAL_STATS.includes(statHash) && styles.numerical
            )}
            key={statHash}
          >
            <div className={styles.name}>{def.displayProperties.name}</div>
            <div className={styles.valueCell}>
              <div className={styles.bar}>
                <div
                  className={styles.barFill}
                  style={{ width: `${value / getMaxValue(statHash) * 100}%` }}
                />
                <div className={styles.value}>{value}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
