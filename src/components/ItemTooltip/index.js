import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { EMBLEM } from 'app/lib/destinyEnums';
import getItemExtraInfo from 'app/lib/getItemExtraInfo';
import FancyImage from 'app/components/FancyImage';
import ItemBanner from 'app/components/ItemBanner';
import ItemStats from 'app/components/ItemStats';
import Objectives from 'app/components/Objectives';
import StatTrack from 'app/components/StatTrack';

import {
  makeItemSelector,
  objectiveDefsSelector,
  statDefsSelector,
  makeItemStatsSelector,
  profileObjectivesSelector
} from 'app/store/selectors';
import styles from './styles.styl';

function ItemTooltip({
  item,
  small,
  dismiss,
  profileObjectives,
  objectiveDefs,
  stats,
  statDefs
}) {
  const { displayProperties, screenshot, itemCategoryHashes } = item;

  const isEmblem = (itemCategoryHashes || []).includes(EMBLEM);
  const extraInfo = getItemExtraInfo(item);

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
          <div className={styles.screenshowWrapperWrapper}>
            <div className={styles.screenshotWrapper}>
              <FancyImage
                className={styles.screenshot}
                src={`https://bungie.net${screenshot}`}
              />
            </div>
          </div>
        )}

        {stats && <ItemStats stats={stats} statDefs={statDefs} />}

        {!isEmblem &&
          extraInfo.map(info => (
            <div key={info} className={styles.extraInfo}>
              {info}
            </div>
          ))}

        {item.objectives && (
          <Objectives
            className={styles.objectives}
            objectives={item.objectives.objectiveHashes}
            profileObjectives={profileObjectives}
            objectiveDefs={objectiveDefs}
          />
        )}

        {item.emblemObjectiveHash && (
          <StatTrack
            className={styles.statTrack}
            objective={profileObjectives[item.emblemObjectiveHash]}
            def={objectiveDefs[item.emblemObjectiveHash]}
          />
        )}

        {item.objectives &&
          item.objectives.objectiveHashes.map(objectiveHash => (
            <StatTrack
              key={objectiveHash}
              className={styles.statTrack}
              objective={profileObjectives[objectiveHash]}
              def={objectiveDefs[objectiveHash]}
            />
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  const itemStatsSelector = makeItemStatsSelector();
  const itemSelector = makeItemSelector();

  return (state, ownProps) => {
    return {
      profileObjectives: profileObjectivesSelector(state),
      objectiveDefs: objectiveDefsSelector(state),
      statDefs: statDefsSelector(state),
      stats: itemStatsSelector(state, ownProps),
      item: itemSelector(state, ownProps)
    };
  };
};

export default connect(mapStateToProps)(ItemTooltip);
