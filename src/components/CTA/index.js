import React from 'react';

import classNames from 'classnames';
import styles from './styles.styl';

export default function CTA({ children, className, ...props }) {
  return (
    <a {...props} className={classNames(styles.cta, className)}>
      {children}
    </a>
  );
}
