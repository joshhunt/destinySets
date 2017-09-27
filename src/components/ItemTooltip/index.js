import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

export default function ItemTooltip({ item }) {
  const tier = (item.inventory.tierTypeName || '').toLowerCase();
  const icon = item.displayProperties.icon || '/img/misc/missing_icon_d2.png';

  return (
    <div className={cx(styles.tooltip, styles[tier])}>
      <div className={styles.header}>
        <div className={styles.img}>
          <img src={`https://bungie.net${icon}`} />
        </div>
        <div className={styles.headerContent}>
          <div className={styles.title}>{item.displayProperties.name}</div>
          <div className={styles.subtitle}>
            <span>{item.itemTypeDisplayName}</span>
            <span>{item.inventory.tierTypeName}</span>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.description}>
          <em>{item.displayProperties.description}</em>
        </p>

        {item.screenshot && (
          <img
            className={styles.screenshot}
            src={`https://bungie.net${item.screenshot}`}
          />
        )}
      </div>
    </div>
  );
}
