import React from 'react';
import cx from 'classnames';

import FancyImage from 'app/components/FancyImage';

import styles from './styles.styl';

import {
  LEGENDARY,
  EXOTIC,
  UNCOMMON,
  RARE,
  COMMON,
} from 'app/lib/destinyEnums';

import ItemStats from 'app/components/ItemStats';
import Objectives from 'app/components/Objectives';

const TIER_STYLE = {
  [EXOTIC]: styles.exotic,
  [LEGENDARY]: styles.legendary,
  [UNCOMMON]: styles.common,
  [RARE]: styles.rare,
  [COMMON]: styles.basic,
};

export default function ItemTooltip({ item, small, dismiss, globalItemCount }) {
  const tier = item.inventory.tierTypeHash || '';
  const icon = item.displayProperties.icon || '/img/misc/missing_icon_d2.png';
  const name =
    (item.displayProperties && item.displayProperties.name) || 'no name';

  const stats = item.$stats || [];

  return (
    <div
      className={cx(styles.tooltip, TIER_STYLE[tier], small && styles.small)}
    >
      <div className={styles.header}>
        {dismiss && (
          <button className={styles.closeButton} onClick={() => dismiss(item)}>
            ×
          </button>
        )}

        <div className={styles.img}>
          <FancyImage src={`https://bungie.net${icon}`} />
        </div>
        <div className={styles.headerContent}>
          <div className={styles.title}>{name}</div>
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
          <div className={styles.screenshotWrapper}>
            <FancyImage
              className={styles.screenshot}
              src={`https://bungie.net${item.screenshot}`}
            />
          </div>
        )}

        {stats.length ? <ItemStats stats={stats} /> : null}

        {globalItemCount && (
          <p className={styles.inventory}>
            {Math.round(globalItemCount * 100)}% of DestinySets users have this.
          </p>
        )}

        {item.$dismantled && (
          <div className={styles.inventory}>
            <ul>
              <li>Dismantled</li>
            </ul>
          </div>
        )}

        {item.$objectives && (
          <Objectives
            className={styles.objectives}
            objectives={item.$objectives}
          />
        )}
      </div>
    </div>
  );
}
