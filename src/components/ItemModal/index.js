import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router';

import getItemExtraInfo from 'app/lib/getItemExtraInfo';
import Objectives from 'app/components/Objectives';

import {
  EMBLEM,
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
        $objectives,
        itemCategoryHashes,
        secondaryIcon,
        backgroundColor
      }
    } = this.props;

    const extraInfo = getItemExtraInfo(this.props.item);

    const tier = inventory.tierTypeHash || '';
    const icon = displayProperties.icon || '/img/misc/missing_icon_d2.png';
    const name = (displayProperties && displayProperties.name) || 'no name';

    const dtrLink = `http://db.destinytracker.com/d2/en/items/${hash}`;

    const isEmblem = itemCategoryHashes.includes(EMBLEM);
    const showEmblem = secondaryIcon && isEmblem;

    const { red, green, blue } = backgroundColor || {};

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

        <div
          className={cx(styles.itemTop, !showEmblem && TIER_STYLE[tier])}
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

        <ul className={styles.viewItemLinks}>
          <li>
            <a href={dtrLink} target="_blank" rel="noopener noreferrer">
              View on DestinyTracker
            </a>
          </li>

          <li>
            <Link to={`/data/${hash}`}>View in Data Explorer</Link>
          </li>
        </ul>

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
