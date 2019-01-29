import React from 'react';
import cx from 'classnames';
import { has } from 'lodash';

import styles from './styles.styl';

const FRACTION = 1;

function ObjectiveValue({ objective, def, trackedStatStyle, completionValue }) {
  const { valueStyle } = def;
  let value;

  if (trackedStatStyle) {
    value = ((objective || { progress: 0 }).progress || 0) / completionValue;

    if (value < FRACTION && valueStyle === 1) {
      value = `${value * 100}%`;
    } else {
      value = value.toLocaleString();
    }
  } else if (valueStyle === 2) {
    value = (
      <input type="checkbox" checked={objective.progress >= 1} readOnly />
    );
  } else {
    value = (
      <span>
        {objective.progress || 0} / {completionValue}
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
    trackedStatStyle,
    onlyIncomplete
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

  const incompleteObjectives = objectivesBuild.filter(obj => !obj.complete);
  const objectivesToDisplay = onlyIncomplete
    ? incompleteObjectives
    : objectivesBuild;

  const numObjectives = objectivesBuild.length;
  const numIncomplete = incompleteObjectives.length;
  const numCompleted = numObjectives - numIncomplete;

  return (
    <div className={cx(className, trackedStatStyle && styles.trackedStat)}>
      {objectivesToDisplay.map((objective, index) => {
        const completionValue = has(objective, 'completionValue')
          ? objective.completionValue
          : objective.def.completionValue;

        return (
          <div className={styles.objective} key={index}>
            <div
              className={styles.objectiveTrack}
              style={{
                width: `${Math.min(
                  objective.progress / completionValue * 100,
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
                completionValue={completionValue}
              />
            </div>
          </div>
        );
      })}

      {onlyIncomplete &&
        numCompleted > 0 && (
          <div className={styles.completed}>
            {numCompleted !== numObjectives && '+ '}
            {objectivesBuild.length - incompleteObjectives.length} completed
            objectives
          </div>
        )}
    </div>
  );
}
