import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

export default function Item({ item }) {
  return (
    <div className={styles.header}>
      <div className={styles.siteName}>Destiny Sets</div>
      <div className={styles.social}>
        <a className={styles.socialItem} target="_blank" href="https://twitter.com/joshhunt">
          <i className="fa fa-twitter" />
        </a>
        <a className={styles.socialItem} target="_blank" href="https://github.com/joshhunt/destinySets">
          <i className="fa fa-github" />
        </a>
      </div>
    </div>
  )
}
