import React from 'react';

import Header from 'app/components/Header';
import styles from './styles.styl';

export default function Loading({ children }) {
  return (
    <div className={styles.root}>
      <div className={styles.topPart}>
        <Header />
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
