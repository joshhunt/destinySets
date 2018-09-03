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

import {
  makeItemSelector,
  objectiveDefsSelector,
  statDefsSelector,
  makeItemStatsSelector,
  objectiveInstancesSelector,
  makeItemInventoryEntrySelector,
  checklistInventorySelector,
  makeItemVendorEntrySelector,
  makeItemHashToCollectableSelector,
  makeItemPerksSelector
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
  itemInventoryEntry,
  vendorEntry,
  collectionInventory,
  collectible,
  perks
}) {
  if (!item) {
    return null;
  }

  const { displayProperties, itemCategoryHashes, loreHash } = item;

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

  return (
    <div className={cx(styles.tooltip, small && styles.small)}>
      <ItemBanner className={styles.header} item={item} onClose={dismiss} />

      <div className={styles.body}>
        {!small && (
          <ItemAttributes className={styles.itemAttributes} item={item} />
        )}

        {displayProperties.description &&
          displayProperties.description.split('\n').map(para => (
            <p key={para} className={styles.description}>
              {para}
            </p>
          ))}

        {collectible &&
          collectible.sourceString &&
          collectible.sourceString.length > 1 && (
            <p className={styles.extraInfo}>
              <Icon name="info-circle" /> {collectible.sourceString}
            </p>
          )}

        {!small && stats && <ItemStats stats={stats} statDefs={statDefs} />}

        {perks && <ItemPerks className={styles.perks} perks={perks} />}

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

        {!small && (
          <ExtraInfo
            className={styles.extraInfo}
            item={item}
            vendorEntry={vendorEntry}
            inventoryEntry={itemInventoryEntry}
            inCollection={collectionInventory[item.hash]}
          />
        )}

        {!small &&
          loreHash && (
            <div className={styles.extraInfo}>
              Lore available on Ishtar Collective, click for more info
            </div>
          )}
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  const itemStatsSelector = makeItemStatsSelector();
  const itemSelector = makeItemSelector();
  const itemInventoryEntrySelector = makeItemInventoryEntrySelector();
  const itemVendorEntrySelector = makeItemVendorEntrySelector();
  const itemHashToCollectableSelector = makeItemHashToCollectableSelector();
  const perksSelector = makeItemPerksSelector();

  return (state, ownProps) => {
    return {
      collectionInventory: checklistInventorySelector(state),
      objectiveInstances: objectiveInstancesSelector(state),
      objectiveDefs: objectiveDefsSelector(state),
      statDefs: statDefsSelector(state),
      stats: itemStatsSelector(state, ownProps),
      item: itemSelector(state, ownProps),
      itemInventoryEntry: itemInventoryEntrySelector(state, ownProps),
      vendorEntry: itemVendorEntrySelector(state, ownProps),
      collectible: itemHashToCollectableSelector(state, ownProps),
      perks: perksSelector(state, ownProps)
    };
  };
};

export default connect(mapStateToProps)(ItemTooltip);
