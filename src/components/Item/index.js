import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

export default function Item({ item, dev }) {
  const dtrLink = 'http://db.destinytracker.com/items/' + item.itemHash;
  const dtrProps = {
    href: dtrLink,
    'data-dtr-tooltip': dev ? 'no-show' : undefined,
  };

  return (
    <div className={cx(styles.root, { [styles.obtained]: item.owned })} key={item.itemHash}>
      <div className={styles.accessory}>
        <a className={styles.link} {...dtrProps}>
          <img className={styles.image} src={item.icon} role="presentation" />
        </a>
      </div>

      <div className={styles.main}>
        <div className={styles.name}>
          <a className={styles.link} {...dtrProps}>{item.itemName}</a>
        </div>
        <div className={styles.type}>
          {dev ? item.itemHash : item.itemTypeName}
        </div>
      </div>

    </div>
  )
}
