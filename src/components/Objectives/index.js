import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

function ObjectiveValue({ objective, def }) {
  const { valueStyle, completionValue } = def;
  let value;
  if (valueStyle === 2) {
    value = (
      <input type="checkbox" checked={objective.progress >= 1} readOnly />
    );
  } else {
    value = (
      <span>
        {objective.progress} / {completionValue}
      </span>
    );
  }

  return <div>{value}</div>;
}

export default function Objectives(props) {
  const {
    className,
    objectives,
    profileObjectives,
    objectiveDefs,
    bigger
  } = props;

  return (
    <div className={cx(className, bigger && styles.bigger)}>
      {objectives.map(objectiveHash => {
        const objective = profileObjectives[objectiveHash] || { progress: 0 };
        const def = objectiveDefs[objectiveHash];

        return (
          <div className={styles.objective} key={objectiveHash}>
            <div
              className={styles.objectiveTrack}
              style={{
                width: `${Math.min(
                  objective.progress / def.completionValue * 100,
                  100
                )}%`
              }}
            />

            <div className={styles.objectiveText}>
              <div>{def.progressDescription}</div>

              <ObjectiveValue objective={objective} def={def} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
