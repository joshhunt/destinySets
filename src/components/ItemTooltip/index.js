import React from 'react';
import cx from 'classnames';

import getItemExtraInfo from 'app/lib/getItemExtraInfo';
import FancyImage from 'app/components/FancyImage';

import styles from './styles.styl';

import {
  LEGENDARY,
  EMBLEM,
  EXOTIC,
  UNCOMMON,
  RARE,
  COMMON
} from 'app/lib/destinyEnums';

import ItemStats from 'app/components/ItemStats';
import Objectives from 'app/components/Objectives';

const TIER_STYLE = {
  [EXOTIC]: styles.exotic,
  [LEGENDARY]: styles.legendary,
  [UNCOMMON]: styles.common,
  [RARE]: styles.rare,
  [COMMON]: styles.basic
};

export default function ItemTooltip({ item, small, dismiss, globalItemCount }) {
  const {
    inventory,
    displayProperties,
    screenshot,
    secondaryIcon,
    itemCategoryHashes,
    backgroundColor
  } = item;

  const tier = inventory.tierTypeHash || '';
  const icon = displayProperties.icon || '/img/misc/missing_icon_d2.png';
  const name = (displayProperties && displayProperties.name) || 'no name';
  const { red, green, blue } = backgroundColor || {};

  const isEmblem = itemCategoryHashes.includes(EMBLEM);
  const showEmblem = secondaryIcon && isEmblem;

  const stats = item.$stats || [];

  const extraInfo = getItemExtraInfo(item);

  return (
    <div
      className={cx(
        styles.tooltip,
        !showEmblem && TIER_STYLE[tier],
        small && styles.small
      )}
    >
      <div
        className={styles.header}
        style={{
          backgroundImage:
            showEmblem && `url(https://bungie.net${secondaryIcon})`,
          backgroundColor: showEmblem && `rgb(${red}, ${green}, ${blue})`
        }}
      >
        {dismiss && (
          <button className={styles.closeButton} onClick={() => dismiss(item)}>
            ×
          </button>
        )}

        <div className={styles.img} style={{ opacity: showEmblem ? 0 : 1 }}>
          <FancyImage src={`https://bungie.net${icon}`} />
        </div>

        <div className={styles.headerContent}>
          <div className={styles.title}>{name}</div>
          <div className={styles.subtitle}>
            <span>{item.itemTypeDisplayName}</span>
            <span>{inventory.tierTypeName}</span>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        {displayProperties.description &&
          displayProperties.description.split('\n').map(para => (
            <p key={para} className={styles.description}>
              {para}
            </p>
          ))}

        {screenshot && (
          <div className={styles.screenshotWrapper}>
            <FancyImage
              className={styles.screenshot}
              src={`https://bungie.net${screenshot}`}
            />
          </div>
        )}

        {stats.length ? <ItemStats stats={stats} /> : null}

        {globalItemCount && (
          <p className={styles.inventory}>
            {Math.round(globalItemCount * 100)}% of DestinySets users have this.
          </p>
        )}

        {!isEmblem &&
          extraInfo.map(info => (
            <div key={info} className={styles.extraInfo}>
              {info}
            </div>
          ))}

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
