import React from 'react';
import { connect } from 'react-redux';
import { uniq } from 'lodash';
import cx from 'classnames';

import { EMBLEM, WEAPON, EXOTIC } from 'app/lib/destinyEnums';
import { hasCategoryHash } from 'app/lib/destinyUtils';
import ItemBanner from 'app/components/ItemBannerNew';
import ItemStats from 'app/components/ItemStats';
import Objectives from 'app/components/Objectives';
import ExtraInfo from 'app/components/ExtraInfo';
import ItemAttributes from 'app/components/ItemAttributes';
import Icon from 'app/components/Icon';
import ItemPerks from 'app/components/ItemPerks';
import ChaliceRecipie from 'app/components/ChaliceRecipie';

import { makeItemDefSelector } from 'app/components/Item/selectors';

import CHALICE_DATA from 'app/extraData/chalice';

import {
  makeItemSelector,
  objectiveDefsSelector,
  statDefsSelector,
  makeItemStatsSelector,
  objectiveInstancesSelector,
  makeItemInventoryEntrySelector,
  checklistInventorySelector,
  makeBetterItemVendorEntrySelector,
  makeItemHashToCollectableSelector,
  makeItemPerksSelector,
  makeItemPresentationSelector
} from 'app/store/selectors';

import styles from './styles.styl';

function ItemTooltip({
  item,
  small,
  dismiss,
  objectiveInstances,
  objectiveDefs,
  stats,
  statDefs,
  displayItem,
  investmentStatItem,
  itemInventoryEntry,
  richVendorEntry,
  collectionInventory,
  collectible,
  perks
}) {
  if (!item) {
    return null;
  }

  const { itemCategoryHashes, loreHash } = item;
  const { displayProperties } = displayItem;

  const isEmblem = (itemCategoryHashes || []).includes(EMBLEM);

  const hideObjectives =
    hasCategoryHash(item, WEAPON) &&
    item.inventory &&
    item.inventory.tierTypeHash === EXOTIC;

  const objectiveHashes = uniq(
    [
      item.emblemObjectiveHash,
      ...((item.objectives || {}).objectiveHashes || [])
    ].filter(Boolean)
  );

  const chaliceRecipie = CHALICE_DATA[item.hash];

  return (
    <div className={cx(styles.tooltip, small && styles.small)}>
      <ItemBanner
        className={styles.header}
        item={item}
        displayItem={displayItem}
        onClose={dismiss}
      />

      <div className={styles.body}>
        {displayProperties.description && (
          <div className={styles.section}>
            {!small && (
              <ItemAttributes className={styles.itemAttributes} item={item} />
            )}

            {displayProperties.description && (
              <p className={styles.description}>
                {displayProperties.description}
              </p>
            )}
          </div>
        )}

        {investmentStatItem && (
          <p className={styles.description}>
            {investmentStatItem.displayProperties.name}:{' '}
            {item.investmentStats[0].value}
          </p>
        )}

        {!small && stats && (
          <div className={styles.section}>
            <ItemStats
              className={styles.stats}
              stats={stats}
              statDefs={statDefs}
            />
          </div>
        )}

        {perks && perks.length > 0 && (
          <div className={styles.section}>
            <ItemPerks className={styles.perks} perks={perks} />
          </div>
        )}

        {!hideObjectives && objectiveHashes.length ? (
          <Objectives
            className={styles.objectives}
            trackedStatStyle={isEmblem}
            objectiveHashes={objectiveHashes}
            objectiveInstances={objectiveInstances}
            objectiveDefs={objectiveDefs}
            onlyIncomplete={small}
          />
        ) : null}

        <div className={styles.section}>
          {collectible &&
            collectible.sourceString &&
            collectible.sourceString.length > 1 && (
              <p className={styles.extraInfo}>
                <Icon name="info-circle" /> {collectible.sourceString}
              </p>
            )}

          {!small && (
            <ExtraInfo
              className={styles.extraInfo}
              item={item}
              richVendorEntry={richVendorEntry}
              inventoryEntry={itemInventoryEntry}
              inCollection={collectionInventory[item.hash]}
            />
          )}

          {!small && loreHash && (
            <div className={styles.extraInfo}>
              Lore available on Ishtar Collective, click for more info
            </div>
          )}
        </div>

        <div className={styles.section}>
          {chaliceRecipie && <ChaliceRecipie recipie={chaliceRecipie} />}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  const itemDefSelector = makeItemDefSelector();
  const itemStatsSelector = makeItemStatsSelector();
  const itemSelector = makeItemSelector();
  const itemInventoryEntrySelector = makeItemInventoryEntrySelector();
  const betterItemVendorEntrySelector = makeBetterItemVendorEntrySelector();
  const itemHashToCollectableSelector = makeItemHashToCollectableSelector();
  const perksSelector = makeItemPerksSelector();
  const itemPresentationSelector = makeItemPresentationSelector();

  return (state, ownProps) => {
    const vendorEntry = betterItemVendorEntrySelector(state, ownProps);
    const itemDef = itemSelector(state, ownProps);

    const richVendorEntries = vendorEntry.map(ve => ({
      ...ve,
      costs: ve.costs.map(cost => ({
        ...cost,
        item: itemDefSelector(state, {
          itemHash: cost.itemHash
        })
      }))
    }));

    const statDefs = state.definitions.DestinyStatDefinition || {};
    const investmentStatItem = ((itemDef && itemDef.investmentStats) || [])
      .map(is => {
        return statDefs[is.statTypeHash];
      })
      .filter(Boolean)[0];

    return {
      collectionInventory: checklistInventorySelector(state),
      objectiveInstances: objectiveInstancesSelector(state),
      objectiveDefs: objectiveDefsSelector(state),
      statDefs: statDefsSelector(state),
      stats: itemStatsSelector(state, ownProps),
      item: itemDef,
      investmentStatItem,
      itemInventoryEntry: itemInventoryEntrySelector(state, ownProps),
      richVendorEntry: richVendorEntries,
      collectible:
        state.definitions.DestinyCollectibleDefinition &&
        state.definitions.DestinyCollectibleDefinition[
          itemDef && itemDef.collectibleHash
        ],
      perks: perksSelector(state, ownProps),
      displayItem: itemPresentationSelector(state, ownProps)
    };
  };
};

export default connect(mapStateToProps)(ItemTooltip);
