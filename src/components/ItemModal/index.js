import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { EMBLEM } from 'app/lib/destinyEnums';
import getItemExtraInfo from 'app/lib/getItemExtraInfo';
import Objectives from 'app/components/Objectives';
import ItemBanner from 'app/components/ItemBanner';
import Modal from 'app/components/Modal';
import Icon from 'app/components/Icon';
import ExtraInfo from 'app/components/ExtraInfo';
import ishtarSvg from 'app/ishar.svg';

import {
  trackOrnament as trackOrnamentAction,
  toggleManuallyObtained as toggleManuallyObtainedAction,
  forgetDismantled as forgetDismantledAction
} from 'app/store/reducer';

import {
  makeItemSelector,
  objectiveDefsSelector,
  statDefsSelector,
  makeItemStatsSelector,
  objectiveInstancesSelector,
  checklistInventorySelector,
  makeItemInventoryEntrySelector,
  makeItemVendorEntrySelector
} from 'app/store/selectors';

import styles from './styles.styl';

class ItemModalContent extends Component {
  render() {
    const {
      trackOrnament,
      onRequestClose,
      item,
      itemInventoryEntry,
      objectiveInstances,
      objectiveDefs,
      toggleManuallyObtained,
      forgetDismantled,
      googleAuth,
      collectionInventory,
      vendorEntry
    } = this.props;

    const {
      hash,
      displayProperties,
      screenshot,
      itemCategoryHashes,
      loreHash
    } = item;

    const dtrLink = `http://db.destinytracker.com/d2/en/items/${hash}`;
    const ishtarLink =
      loreHash && `http://www.ishtar-collective.net/entries/${loreHash}`;

    const isEmblem = (itemCategoryHashes || []).includes(EMBLEM);
    const extraInfo = getItemExtraInfo(item, itemInventoryEntry);

    if (googleAuth.loaded && !googleAuth.signedIn) {
      extraInfo.push('Connect Google Drive to manually mark as collected');
    }

    const objectiveHashes = [
      item.emblemObjectiveHash,
      ...((item.objectives || {}).objectiveHashes || [])
    ].filter(Boolean);

    return (
      <div className={styles.root}>
        <button className={styles.close} onClick={onRequestClose}>
          <Icon icon="times" />
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

        {ishtarLink && (
          <p>
            <img alt="" src={ishtarSvg} className={styles.ishtarLogo} />
            <a href={ishtarLink} target="_blank" rel="noopener noreferrer">
              <em>View Lore on Ishtar Collective</em>
            </a>
          </p>
        )}

        {!!objectiveHashes.length && (
          <div>
            <h3 className={styles.objectiveTitle}>
              Complete Objectives to Unlock
            </h3>

            <Objectives
              className={styles.objectives}
              trackedStatStyle={isEmblem}
              objectiveHashes={objectiveHashes}
              objectiveInstances={objectiveInstances}
              objectiveDefs={objectiveDefs}
            />
          </div>
        )}

        <p>
          {!!objectiveHashes.length && (
            <button
              className={styles.mainButton}
              onClick={() => trackOrnament(hash)}
            >
              Track objective progress
            </button>
          )}

          {itemInventoryEntry &&
            itemInventoryEntry.dismantled && (
              <button
                className={styles.button}
                onClick={() => forgetDismantled(hash)}
              >
                Forget dismantled
              </button>
            )}

          {googleAuth.signedIn &&
            !itemInventoryEntry && (
              <button
                className={styles.button}
                onClick={() => toggleManuallyObtained(hash)}
              >
                Mark as collected
              </button>
            )}

          {itemInventoryEntry &&
            itemInventoryEntry.manuallyObtained && (
              <button
                className={styles.button}
                onClick={() => toggleManuallyObtained(hash)}
              >
                Unmark as collected
              </button>
            )}
        </p>

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

        <ExtraInfo
          className={styles.extraInfo}
          item={item}
          inventoryEntry={itemInventoryEntry}
          vendorEntry={vendorEntry}
          inCollection={collectionInventory[item.hash]}
        />
      </div>
    );
  }
}

function ItemModalWrapper({ isOpen, onRequestClose, trackOrnament, ...props }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {props.item && (
        <ItemModalContent
          {...props}
          onRequestClose={onRequestClose}
          trackOrnament={trackOrnament}
        />
      )}
    </Modal>
  );
}

const mapStateToProps = () => {
  const itemStatsSelector = makeItemStatsSelector();
  const itemSelector = makeItemSelector();
  const itemInventoryEntrySelector = makeItemInventoryEntrySelector();
  const itemVendorEntrySelector = makeItemVendorEntrySelector();

  return (state, ownProps) => {
    return {
      googleAuth: state.app.googleAuth,
      objectiveInstances: objectiveInstancesSelector(state),
      objectiveDefs: objectiveDefsSelector(state),
      statDefs: statDefsSelector(state),
      stats: itemStatsSelector(state, ownProps),
      item: itemSelector(state, ownProps),
      itemInventoryEntry: itemInventoryEntrySelector(state, ownProps),
      vendorEntry: itemVendorEntrySelector(state, ownProps),
      collectionInventory: checklistInventorySelector(state)
    };
  };
};

const mapDispatchToActions = {
  trackOrnament: trackOrnamentAction,
  toggleManuallyObtained: toggleManuallyObtainedAction,
  forgetDismantled: forgetDismantledAction
};

export default connect(mapStateToProps, mapDispatchToActions)(ItemModalWrapper);
