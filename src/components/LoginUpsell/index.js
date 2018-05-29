import React from 'react';

import { authUrl } from 'app/lib/destinyAuth';

import styles from './styles.styl';

export default function LoginUpsell({ children }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Login for the good stuff</h2>

      {children && <p>{children}</p>}

      <a className={styles.authLink} href={authUrl()}>
        Connect Bungie.net
      </a>
    </div>
  );
}
