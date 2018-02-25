import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

export default function StatTrack(props) {
  const { className, statTrack, bigger } = props;

  let value = statTrack.$instanceData.flavorObjective.progress/statTrack.$objective.completionValue;
  value = +value.toFixed(2);

  let desc = statTrack.$objective.progressDescription;
  desc = (desc.length >= 41) ? desc.substr(0,38) + '...' : desc;
  desc = (bigger) ? "" : desc;

  return (
    <div className={cx(className, bigger && styles.bigger)}>
        <div className={styles.objective} key={statTrack.$objective.objectiveHash}>
          <div
            className={styles.objectiveTrack}
            style={{
              width: `${Math.min(
                value * 100,
                100,
              )}%`,
            }}
          />

          <div className={styles.objectiveText}>
            <div>{desc}</div>

            <span>{value}</span>
          </div>
        </div>
    </div>
  );
}
