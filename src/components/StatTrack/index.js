import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

export default function StatTrack(props) {
  const { className, statTrack, description } = props;

  let value = statTrack.$instanceData.flavorObjective.progress/statTrack.$objective.completionValue;
  value = +value.toFixed(2);

  let desc = statTrack.$objective.progressDescription;

  return (
    <div key={desc} className={(description) ? styles.description : styles.extraInfo}>
      {value} // {desc}
    </div>
  );
}
