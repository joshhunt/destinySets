import React from 'react';

import styles from './styles.styl';

export default function Loading({ children }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.root}>{children}</h2>
    </div>
  );
}
