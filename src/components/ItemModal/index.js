import React, { Component } from 'react';
import cx from 'classnames';

import getItemExtraInfo from 'app/lib/getItemExtraInfo';
import Objectives from 'app/components/Objectives';

import {
  LEGENDARY,
  EXOTIC,
  UNCOMMON,
  RARE,
  COMMON
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
  0: 'Titan',
  1: 'Hunter',
  2: 'Warlock'
};

export default class ItemModal extends Component {
  render() {
    const {
      trackOrnament,
      onRequestClose,
      item: {
        hash,
        displayProperties,
        screenshot,
        inventory,
        classType,
        itemTypeName,
        itemTypeDisplayName,
        $objectives
      }
    } = this.props;

    const extraInfo = getItemExtraInfo(this.props.item);

    const tier = inventory.tierTypeHash || '';
    const icon = displayProperties.icon || '/img/misc/missing_icon_d2.png';
    const name = (displayProperties && displayProperties.name) || 'no name';

    return (
      <div className={styles.root}>
        <button className={styles.close} onClick={onRequestClose}>
          <i className="fa fa-close" />
        </button>

        {screenshot && (
          <div className={styles.screenshotWrapper}>
            <img
              className={styles.screenshot}
              src={`https://bungie.net${screenshot}`}
              alt=""
            />
          </div>
        )}

        <div className={cx(styles.itemTop, TIER_STYLE[tier])}>
          <img
            className={styles.icon}
            src={`https://bungie.net${icon}`}
            alt=""
          />

          <div className={styles.itemInfo}>
            <div className={styles.itemName}>{name}</div>
            <div className={styles.itemType}>
              {' '}
              {CLASS_TYPE[classType]} {itemTypeName || itemTypeDisplayName}
            </div>
          </div>
        </div>

        {displayProperties.description && (
          <p className={styles.description}>{displayProperties.description}</p>
        )}

        {extraInfo.map(info => (
          <div key={info} className={styles.extraInfo}>
            {info}
          </div>
        ))}

        {$objectives && (
          <div>
            <h3 className={styles.objectiveTitle}>
              Complete Objectives to Unlock
            </h3>

            <Objectives
              className={styles.objectives}
              objectives={$objectives}
              bigger={true}
            />

            <button
              className={styles.button}
              onClick={() => trackOrnament(hash)}
            >
              Track objective progress
            </button>
          </div>
        )}
      </div>
    );
  }
}
