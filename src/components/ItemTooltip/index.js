import React from 'react';
import cx from 'classnames';

import getItemExtraInfo from 'app/lib/getItemExtraInfo';
import FancyImage from 'app/components/FancyImage';
import ItemBanner from 'app/components/ItemBanner';

import styles from './styles.styl';

import { EMBLEM } from 'app/lib/destinyEnums';

import ItemStats from 'app/components/ItemStats';
import Objectives from 'app/components/Objectives';
import StatTrack from 'app/components/StatTrack';

export default function ItemTooltip({
  item,
  small,
  dismiss,
  objectives,
  objectiveDefs
}) {
  const { displayProperties, screenshot, itemCategoryHashes } = item;

  const isEmblem = itemCategoryHashes.includes(EMBLEM);
  const extraInfo = getItemExtraInfo(item);
  const stats = item.$stats || [];

  console.log({ objectives, item });

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

        {stats.length ? <ItemStats stats={stats} /> : null}

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
            objectiveData={objectives}
            objectiveDefs={objectiveDefs}
          />
        )}

        {item.$statTrack && (
          <StatTrack className={styles.statTrack} statTrack={item.$statTrack} />
        )}

        {item.emblemObjectiveHash && (
          <StatTrack
            className={styles.statTrack}
            objective={objectives[item.emblemObjectiveHash]}
            def={objectiveDefs[item.emblemObjectiveHash]}
          />
        )}

        {item.objectives &&
          item.objectives.objectiveHashes.map(objectiveHash => (
            <StatTrack
              key={objectiveHash}
              className={styles.statTrack}
              objective={objectives[objectiveHash]}
              def={objectiveDefs[objectiveHash]}
            />
          ))}
      </div>
    </div>
  );
}
