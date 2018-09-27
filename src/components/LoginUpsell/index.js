import React from 'react';

import styles from './styles.styl';
import LoginCTA from '../LoginCTA';
import Dismissable from '../Dismissable';

export default function LoginUpsell({ children, ...props }) {
  return (
    <Dismissable {...props} className={styles.root}>
      {children && <div className={styles.children}>{children}</div>}

      <LoginCTA />
    </Dismissable>
  );
}
