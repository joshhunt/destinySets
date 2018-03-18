import React from 'react';

export default function StatTrack(props) {
  const { className, objective, def } = props;

  let value =
    ((objective || { progress: 0 }).progress || 0) / def.completionValue;
  value = +value.toFixed(2);

  return (
    <div className={className}>
      {value} {'//'} {def.progressDescription}
    </div>
  );
}
