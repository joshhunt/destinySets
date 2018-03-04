import React from 'react';

export default function StatTrack(props) {
  const { className, statTrack } = props;

  let value =
    statTrack.$instanceData.flavorObjective.progress /
    statTrack.$objective.completionValue;
  value = +value.toFixed(2);

  let desc = statTrack.$objective.progressDescription;

  return (
    <p className={className}>
      {value} {'//'} {desc}
    </p>
  );
}
