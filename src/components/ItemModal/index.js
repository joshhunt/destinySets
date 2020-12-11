import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { EMBLEM, WEAPON, EXOTIC } from 'app/lib/destinyEnums';
import { hasCategoryHash } from 'app/lib/destinyUtils';
import ItemAttributes from 'app/components/ItemAttributes';
import Objectives from 'app/components/Objectives';
import ItemBanner from 'app/components/ItemBanner';
import Modal from 'app/components/Modal';
import ItemPerks from 'app/components/ItemPerks';
import Icon from 'app/components/Icon';
import ExtraInfo from 'app/components/ExtraInfo';
import ChaliceRecipie from 'app/components/ChaliceRecipie';
import ishtarSvg from 'app/ishar.svg';

import CHALICE_DATA from 'app/extraData/chalice';

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
  makeItemVendorEntrySelector,
  makeItemPerksSelector,
  makeItemPresentationSelector
} from 'app/store/selectors';

import styles from './styles.styl';

class ItemModalContent extends Component {
  render() {
    const {
      trackOrnament,
      onRequestClose,
      item,
      displayItem,
      itemInventoryEntry,
      objectiveInstances,
      objectiveDefs,
      toggleManuallyObtained,
      forgetDismantled,
      collectionInventory,
      vendorEntry,
      collectible,
      perks
    } = this.props;

    const { hash, screenshot, itemCategoryHashes, loreHash } = item;
    const { displayProperties } = displayItem || item;

    const ishtarLink =
      loreHash && `http://www.ishtar-collective.net/entries/${loreHash}`;

    const isEmblem = (itemCategoryHashes || []).includes(EMBLEM);
    const hideObjectives =
      hasCategoryHash(item, WEAPON) &&
      item.inventory &&
      item.inventory.tierTypeHash === EXOTIC;

    const objectiveHashes = [
      item.emblemObjectiveHash,
      ...((item.objectives || {}).objectiveHashes || [])
    ].filter(Boolean);

    const chaliceRecipie = CHALICE_DATA[item.hash];

    return (
      <div className={styles.root}>
        <button className={styles.close} onClick={onRequestClose}>
          <Icon name="times" />
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

        <ItemBanner
          className={styles.itemTop}
          item={this.props.item}
          displayItem={displayItem}
        />

        <ItemAttributes item={item} />

        {displayProperties.description && (
          <p className={styles.description}>{displayProperties.description}</p>
        )}

        {perks && perks.length > 0 && (
          <ItemPerks className={styles.perks} perks={perks} />
        )}

        {!hideObjectives && objectiveHashes.length > 0 && (
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
              Track Objective Progress
            </button>
          )}

          {itemInventoryEntry && itemInventoryEntry.dismantled && (
            <button
              className={styles.button}
              onClick={() => forgetDismantled(hash)}
            >
              Forget Dismantled
            </button>
          )}

          {itemInventoryEntry && itemInventoryEntry.manuallyObtained && (
            <button
              className={styles.button}
              onClick={() => toggleManuallyObtained(hash)}
            >
              Unmark as Collected
            </button>
          )}

          {collectible &&
            collectible.sourceString &&
            collectible.sourceString.length > 1 && (
              <p className={styles.extraInfo}>
                <Icon name="info-circle" /> {collectible.sourceString}
              </p>
            )}
        </p>

        <div className={styles.section}>
          {chaliceRecipie && <ChaliceRecipie recipie={chaliceRecipie} />}
        </div>

        <ul className={styles.viewItemLinks}>
          {ishtarLink && (
            <li>
              <a href={ishtarLink} target="_blank" rel="noopener noreferrer">
                <img alt="" src={ishtarSvg} className={styles.ishtarLogo} />
                View Lore on Ishtar Collective
              </a>
            </li>
          )}

          {/*<li>
            <a href={dtrLink} target="_blank" rel="noopener noreferrer">
              View on DestinyTracker
            </a>
          </li>*/}

          <li>
            <Link to={`/data/${hash}`}>View in Data Explorer</Link>
          </li>

          <li>
            <Link to={`/item/${hash}`}>View Perks</Link>
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
  const itemPerksSelector = makeItemPerksSelector();
  const itemPresentationSelector = makeItemPresentationSelector();

  return (state, ownProps) => {
    const item = itemSelector(state, ownProps);
    return {
      objectiveInstances: objectiveInstancesSelector(state),
      objectiveDefs: objectiveDefsSelector(state),
      statDefs: statDefsSelector(state),
      stats: itemStatsSelector(state, ownProps),
      item: item,
      itemInventoryEntry: itemInventoryEntrySelector(state, ownProps),
      vendorEntry: itemVendorEntrySelector(state, ownProps),
      collectionInventory: checklistInventorySelector(state),
      collectible:
        state.definitions.DestinyCollectibleDefinition &&
        state.definitions.DestinyCollectibleDefinition[
          item && item.collectibleHash
        ],
      perks: itemPerksSelector(state, ownProps),
      displayItem: itemPresentationSelector(state, ownProps)
    };
  };
};

const mapDispatchToActions = {
  trackOrnament: trackOrnamentAction,
  toggleManuallyObtained: toggleManuallyObtainedAction,
  forgetDismantled: forgetDismantledAction
};

export default connect(mapStateToProps, mapDispatchToActions)(ItemModalWrapper);
