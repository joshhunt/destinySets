import React from 'react';

import { authUrl } from 'app/lib/destinyAuth';

import styles from './styles.styl';

export default function LoginUpsell({ children }) {
  return (
    <div className={styles.root}>
      {children && <div className={styles.children}>{children}</div>}

      <a className={styles.authLink} href={authUrl()}>
        Connect Bungie.net
      </a>
    </div>
  );
}
