import React from 'react';
import cx from 'classnames';

import Icon from 'app/components/Icon';

import styles from './styles.styl';

export const DONATION_LINK = 'https://paypal.me/DestinySets';

export default function DonateButton({ className }) {
  return (
    <a
      className={cx(className, styles.root)}
      target="_blank"
      rel="noopener noreferrer"
      href={DONATION_LINK}
    >
      <Icon className={styles.icon} name="paypal" brand /> Support and donate
    </a>
  );
}
