import React from 'react';

import styles from './styles.styl';

function ObjectiveValue({ objective }) {
  const { valueStyle, completionValue } = objective.$objective;
  let value;
  if (valueStyle === 2) {
    value = <input type="checkbox" checked={objective.progress >= 1} />;
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
  const { className, objectives } = props;

  return (
    <div className={className}>
      {objectives.map(objective => (
        <div className={styles.objective} key={objective.objectiveHash}>
          <div
            className={styles.objectiveTrack}
            style={{
              width: `${Math.min(
                objective.progress / objective.$objective.completionValue * 100,
                100,
              )}%`,
            }}
          />

          <div className={styles.objectiveText}>
            <div>{objective.$objective.progressDescription}</div>

            <ObjectiveValue objective={objective} />
          </div>
        </div>
      ))}
    </div>
  );
}
