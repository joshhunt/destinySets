import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

function ObjectiveValue({ objective, def, trackedStatStyle }) {
  const { valueStyle, completionValue } = def;
  let value;
  if (trackedStatStyle) {
    value =
      ((objective || { progress: 0 }).progress || 0) / def.completionValue;
    value = value.toLocaleString();
  } else if (valueStyle === 2) {
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
    objectiveDefs,
    profileObjectives,
    trackedStatStyle
  } = props;

  if (!(objectives && objectiveDefs)) {
    return null;
  }

  return (
    <div className={cx(className, trackedStatStyle && styles.trackedStat)}>
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

              <ObjectiveValue
                objective={objective}
                def={def}
                trackedStatStyle={trackedStatStyle}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
