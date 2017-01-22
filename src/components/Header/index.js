import React from 'react';
import { Link } from 'react-router'

import styles from './styles.styl';

export default function Item({ item }) {
  return (
    <div className={styles.header}>
      <div className={styles.main}>
        <Link to="/" className={styles.siteName}>Destiny Sets</Link>
        <Link to="/" className={styles.navItem} activeClassName={styles.active}>Strikes</Link>
        <Link to="/raid" className={styles.navItem} activeClassName={styles.active}>Raids</Link>
      </div>

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
