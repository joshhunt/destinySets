import React from 'react';
import cx from 'classnames';

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
      <i className="fa fa-paypal" /> Support and donate
    </a>
  );
}
