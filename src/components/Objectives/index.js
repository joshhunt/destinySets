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

const FALLBACK_OBJECTIVE_DEF = {
  completionValue: 0,
  progressDescription: 'Unknown'
};

export default function Objectives(props) {
  const {
    className,
    objectives,
    objectiveHashes,
    objectiveDefs,
    objectiveInstances,
    trackedStatStyle
  } = props;

  if (!((objectives || objectiveHashes) && objectiveDefs)) {
    return null;
  }

  // This is the array that we'll map over to display
  const objectivesBuild = objectiveHashes
    ? objectiveHashes.map(hash => {
        return {
          ...(objectiveInstances[hash] || { progress: 0 }),
          def: objectiveDefs[hash] || FALLBACK_OBJECTIVE_DEF
        };
      })
    : objectives.map(objective => {
        return {
          ...objective,
          def: objectiveDefs[objective.objectiveHash] || FALLBACK_OBJECTIVE_DEF
        };
      });

  return (
    <div className={cx(className, trackedStatStyle && styles.trackedStat)}>
      {objectivesBuild.map(objective => {
        return (
          <div className={styles.objective} key={objective.objectiveHash}>
            <div
              className={styles.objectiveTrack}
              style={{
                width: `${Math.min(
                  objective.progress / objective.def.completionValue * 100,
                  100
                )}%`
              }}
            />

            <div className={styles.objectiveText}>
              <div>{objective.def.progressDescription}</div>

              <ObjectiveValue
                objective={objective}
                def={objective.def}
                trackedStatStyle={trackedStatStyle}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
