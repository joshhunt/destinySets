import React from 'react';
import { connect } from 'react-redux';
import { uniq } from 'lodash';
import cx from 'classnames';

import {
  EMBLEM,
  STAT_POWER,
  KINETIC,
  VOID,
  SOLAR,
  ARC
} from 'app/lib/destinyEnums';
import FancyImage from 'app/components/FancyImage';
// import ItemBanner from 'app/components/ItemBanner';
import ItemBanner from 'app/components/ItemBannerNew';
import ItemStats from 'app/components/ItemStats';
import Objectives from 'app/components/Objectives';
import ExtraInfo from 'app/components/ExtraInfo';

import {
  makeItemSelector,
  objectiveDefsSelector,
  statDefsSelector,
  makeItemStatsSelector,
  objectiveInstancesSelector,
  makeItemInventoryEntrySelector,
  checklistInventorySelector,
  makeItemVendorEntrySelector
} from 'app/store/selectors';

import styles from './styles.styl';

const maxPower = (stats, currentMaxPower) => {
  const powerStat = stats[STAT_POWER];
  return powerStat
    ? Math.max(powerStat.value, currentMaxPower)
    : currentMaxPower;
};

const calcMaxPower = item => {
  let power = 0;

  if (item.sourceData && item.sourceData.sources) {
    power = item.sourceData.sources.reduce((currentMaxPower, source) => {
      return maxPower(source.computedStats, currentMaxPower);
    }, power);
  } else if (item.stats && item.stats.stats) {
    power = maxPower(item.stats.stats, power);
  }

  return power;
};

const ELEMENTAL_DAMAGE_CLASS = {
  // 0: None,
  1: styles.kineticDamage,
  2: styles.arcDamage,
  3: styles.solarDamage,
  4: styles.voidDamage
  // 5: Raid,
};

const AMMO_TYPE = {
  0: <span>None</span>,
  1: (
    <span>
      <img className={styles.ammoIcon} src={require('./primary.png')} /> Primary
    </span>
  ),
  2: (
    <span>
      <img className={styles.ammoIcon} src={require('./special.png')} /> Special
    </span>
  ),
  3: (
    <span>
      <img className={styles.ammoIcon} src={require('./heavy.png')} /> Heavy
    </span>
  ),
  4: <span>Unknown</span>
};

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
  collectionInventory
}) {
  if (!item) {
    return null;
  }

  const { displayProperties, itemCategoryHashes, loreHash } = item;

  const isEmblem = (itemCategoryHashes || []).includes(EMBLEM);

  const objectiveHashes = uniq(
    [
      item.emblemObjectiveHash,
      ...((item.objectives || {}).objectiveHashes || [])
    ].filter(Boolean)
  );

  const ammoType = item && item.equippingBlock && item.equippingBlock.ammoType;
  const elementalDamageClass =
    item && item.damageTypes && item.damageTypes.length > 0
      ? ELEMENTAL_DAMAGE_CLASS[item.damageTypes[0]]
      : null;

  const showAttributes = elementalDamageClass || ammoType;

  return (
    <div className={cx(styles.tooltip, small && styles.small)}>
      <ItemBanner className={styles.header} item={item} onClose={dismiss} />

      <div className={styles.body}>
        {!small && showAttributes ? (
          <div className={styles.attributes}>
            {elementalDamageClass && (
              <div className={elementalDamageClass}>
                <div className={styles.elementalDamageIcon} />
                <div>600</div>
              </div>
            )}

            {ammoType && (
              <div className={styles.ammoType}>
                <div>{AMMO_TYPE[ammoType]}</div>
              </div>
            )}
          </div>
        ) : null}

        {displayProperties.description &&
          displayProperties.description.split('\n').map(para => (
            <p key={para} className={styles.description}>
              {para}
            </p>
          ))}

        {!small && stats && <ItemStats stats={stats} statDefs={statDefs} />}

        {objectiveHashes.length ? (
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

  return (state, ownProps) => {
    return {
      collectionInventory: checklistInventorySelector(state),
      objectiveInstances: objectiveInstancesSelector(state),
      objectiveDefs: objectiveDefsSelector(state),
      statDefs: statDefsSelector(state),
      stats: itemStatsSelector(state, ownProps),
      item: itemSelector(state, ownProps),
      itemInventoryEntry: itemInventoryEntrySelector(state, ownProps),
      vendorEntry: itemVendorEntrySelector(state, ownProps)
    };
  };
};

export default connect(mapStateToProps)(ItemTooltip);
