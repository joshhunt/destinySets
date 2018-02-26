import React, { Component } from 'react';
import { Link } from 'react-router';

import getItemExtraInfo from 'app/lib/getItemExtraInfo';
import Objectives from 'app/components/Objectives';
import StatTrack from 'app/components/StatTrack';
import ItemBanner from 'app/components/ItemBanner';

import styles from './styles.styl';

export default class ItemModal extends Component {
  render() {
    const {
      trackOrnament,
      onRequestClose,
      item: { hash, displayProperties, screenshot, $objectives, $statTrack }
    } = this.props;

    const extraInfo = getItemExtraInfo(this.props.item);

    console.log($statTrack)

    const dtrLink = `http://db.destinytracker.com/d2/en/items/${hash}`;

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

        <ItemBanner className={styles.itemTop} item={this.props.item} />

        {displayProperties.description && (
          <p className={styles.description}>{displayProperties.description}</p>
        )}

        {$statTrack && (
          <div>
            <StatTrack
              className={styles.objectives}
              statTrack={$statTrack}
              description={true}
              />
          </div>
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
