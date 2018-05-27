import React from 'react';
import { connect } from 'react-redux';
import { uniq } from 'lodash';
import cx from 'classnames';

import { EMBLEM } from 'app/lib/destinyEnums';
import getItemExtraInfo from 'app/lib/getItemExtraInfo';
import FancyImage from 'app/components/FancyImage';
import ItemBanner from 'app/components/ItemBanner';
import ItemStats from 'app/components/ItemStats';
import Objectives from 'app/components/Objectives';

import {
  makeItemSelector,
  objectiveDefsSelector,
  statDefsSelector,
  makeItemStatsSelector,
  profileObjectivesSelector,
  relevantPlugDataSelector,
  makeItemInventoryEntrySelector
} from 'app/store/selectors';
import styles from './styles.styl';

function ItemTooltip({
  item,
  small,
  dismiss,
  profileObjectives,
  relevantPlugData,
  objectiveDefs,
  stats,
  statDefs,
  itemInventoryEntry
}) {
  if (!item) {
    return null;
  }

  const {
    displayProperties,
    screenshot,
    itemCategoryHashes,
    loreHash,
    hash
  } = item;

  const isEmblem = (itemCategoryHashes || []).includes(EMBLEM);
  const extraInfo = getItemExtraInfo(item, itemInventoryEntry);

  console.log('hash:', hash);
  console.log('relevantPlugData:', relevantPlugData);

  const plugFailureIndexes = relevantPlugData[hash]
    ? relevantPlugData[hash].insertFailIndexes
    : [];

  console.log('plugFailureIndexes:', plugFailureIndexes);

  if (loreHash) {
    extraInfo.push('Lore available on Ishtar Collective, click for more info');
  }

  const objectiveHashes = uniq(
    [
      item.emblemObjectiveHash,
      ...((item.objectives || {}).objectiveHashes || [])
    ].filter(Boolean)
  );

  let _objectiveHashes = [...objectiveHashes];
  let _profileObjectives = { ...profileObjectives };
  let _objectiveDefs = { ...objectiveDefs };

  plugFailureIndexes.forEach(failureIndex => {
    const key = `customPlugFailureIndex_${failureIndex}`;
    _objectiveHashes.push(key);
    _profileObjectives[key] = {
      progress: 0
    };

    _objectiveDefs = {
      valueStyle: 2,
      completionValue: 1,
      progressDescription: item.plug.insertionRules[failureIndex].failureMessage
    };
  });

  return (
    <div className={cx(styles.tooltip, small && styles.small)}>
      <ItemBanner className={styles.header} item={item} onClose={dismiss} />

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

        {stats && <ItemStats stats={stats} statDefs={statDefs} />}

        {objectiveHashes.length ? (
          <Objectives
            className={styles.objectives}
            trackedStatStyle={isEmblem}
            objectives={_objectiveHashes}
            profileObjectives={_profileObjectives}
            objectiveDefs={_objectiveDefs}
          />
        ) : null}

        {extraInfo.map((info, index) => (
          <div key={index} className={styles.extraInfo}>
            {info}
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  const itemStatsSelector = makeItemStatsSelector();
  const itemSelector = makeItemSelector();
  const itemInventoryEntrySelector = makeItemInventoryEntrySelector();

  return (state, ownProps) => {
    return {
      profileObjectives: profileObjectivesSelector(state),
      objectiveDefs: objectiveDefsSelector(state),
      relevantPlugData: relevantPlugDataSelector(state),
      statDefs: statDefsSelector(state),
      stats: itemStatsSelector(state, ownProps),
      item: itemSelector(state, ownProps),
      itemInventoryEntry: itemInventoryEntrySelector(state, ownProps)
    };
  };
};

export default connect(mapStateToProps)(ItemTooltip);
