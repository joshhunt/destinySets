import React from 'react';

import { authUrl } from 'app/lib/destinyAuth';

import styles from './styles.styl';

export default function LoginUpsell({ children }) {
  return (
    <div className={styles.loginUpsell}>
      <h2 className={styles.heading}>Login for more</h2>

      {children && <p>{children}</p>}

      <a className={styles.authLink} href={authUrl}>
        Authorize with Bungie.net
      </a>
    </div>
  );
}
