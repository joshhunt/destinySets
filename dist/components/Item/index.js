import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

export default function Item({ item }) {
  return (
    <div className={cx(styles.root, { [styles.obtained]: item.owned })} key={item.itemHash}>
      <div className={styles.accessory}>
        <img className={styles.image} src={item.icon} role="presentation" />
      </div>

      <div className={styles.main}>
        <div className={styles.name}>{item.itemName}</div>
        <div className={styles.type}>{item.itemTypeName}</div>
      </div>

    </div>
  )
}
