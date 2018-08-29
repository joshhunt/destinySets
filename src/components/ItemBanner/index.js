import React from 'react';
import cx from 'classnames';

import Icon from 'app/components/Icon';

import {
  EMBLEM,
  LEGENDARY,
  EXOTIC,
  UNCOMMON,
  RARE,
  COMMON,
  TITAN,
  HUNTER,
  WARLOCK
} from 'app/lib/destinyEnums';

import styles from './styles.styl';

const TIER_STYLE = {
  [EXOTIC]: styles.exotic,
  [LEGENDARY]: styles.legendary,
  [UNCOMMON]: styles.common,
  [RARE]: styles.rare,
  [COMMON]: styles.basic
};

const CLASS_TYPE = {
  [TITAN]: 'Titan',
  [HUNTER]: 'Hunter',
  [WARLOCK]: 'Warlock'
};

export default function ItemBanner({ className, item, onClose }) {
  const {
    displayProperties,
    inventory,
    classType,
    itemTypeName,
    itemTypeDisplayName,
    itemCategoryHashes,
    secondaryIcon,
    backgroundColor
  } = item;

  const tier = inventory.tierTypeHash;
  const isEmblem = itemCategoryHashes && itemCategoryHashes.includes(EMBLEM);
  const showEmblem = secondaryIcon && isEmblem;
  const icon = displayProperties.icon || '/img/misc/missing_icon_d2.png';

  const { red, green, blue } = backgroundColor || {};

  return (
    <div
      className={cx(className, styles.root, !showEmblem && TIER_STYLE[tier])}
      style={{
        backgroundImage:
          showEmblem && `url(https://bungie.net${secondaryIcon})`,
        backgroundColor: showEmblem && `rgb(${red}, ${green}, ${blue})`
      }}
    >
      <img
        className={styles.icon}
        src={`https://bungie.net${icon}`}
        alt=""
        style={{ opacity: showEmblem ? 0 : 1 }}
      />

      <div className={styles.body}>
        <div className={styles.main}>
          <div>{displayProperties.name}</div>
          {onClose && (
            <div>
              <button className={styles.close} onClick={() => onClose(item)}>
                <Icon icon="times" />
              </button>
            </div>
          )}
        </div>
        <div className={styles.sub}>
          <div>
            {' '}
            {CLASS_TYPE[classType]} {itemTypeName || itemTypeDisplayName}
          </div>
          <div>{inventory.tierTypeName}</div>
        </div>
      </div>
    </div>
  );
}
