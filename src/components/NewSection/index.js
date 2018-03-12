import React from 'react';
import ItemSet from 'app/components/ItemSet';

import styles from './styles.styl';

export default function Section({ name, sets }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.list}>
        {sets.map((set, index) => (
          <ItemSet key={index} name={set.name} sections={set.sections} />
        ))}
      </div>
    </div>
  );
}
