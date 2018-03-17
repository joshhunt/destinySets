import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

export default function Item({ className, hash, item, inventoryEntry }) {
  if (!item) {
    return <div className={cx(className, styles.placeholder)} />;
  }

  const icon = item.displayProperties.icon || '/img/misc/missing_icon_d2.png';

  return (
    <div
      className={cx(className, styles.root, inventoryEntry && styles.obtained)}
    >
      <img
        src={`https://www.bungie.net${icon}`}
        className={styles.image}
        alt=""
      />

      {inventoryEntry && (
        <div className={styles.obtainedTick}>
          <span role="img" aria-label="Obtained">
            ✅
          </span>
        </div>
      )}
    </div>
  );
}
