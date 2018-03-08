import React from 'react';

import cx from 'classnames';
import { NUMERICAL_STATS } from 'app/lib/destinyEnums';

import styles from './styles.styl';

export default function ItemStats({ stats }) {
  return (
    <div className={styles.root}>
      {stats.map(({ statHash, $stat, value }) => (
        <div
          className={cx(
            styles.item,
            NUMERICAL_STATS.includes(statHash) && styles.numerical
          )}
          key={statHash}
        >
          <div className={styles.name}>{$stat.displayProperties.name}</div>
          <div className={styles.valueCell}>
            <div className={styles.bar}>
              <div
                className={styles.barFill}
                style={{ width: `${value / 100 * 100}%` }}
              />
              <div className={styles.value}>{value}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
