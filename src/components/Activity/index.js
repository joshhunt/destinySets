import React from 'react';
import cx from 'classnames';

import Item from '../Item';

import styles from './styles.styl';

export default function Activity({ activity, drops }) {
  if (!activity) return null;

  const {
    activityName,
    pgcrImage,
    activityTypeName,
  } = activity;

  const typeClass = {
    'Strike': styles.typeNightfall,
  };

  return (
    <div className={cx(styles.root, typeClass[activityTypeName])}>
      <div className={styles.header}>
        <div className={styles.activityName}>{activityName}</div>
      </div>

      <img className={styles.image} src={'https://bungie.net' + pgcrImage} role="presentation" />

      <div className={styles.drops}>
        {drops && drops.map(item => <Item key={item.itemHash} item={item} />)}
      </div>
    </div>
  );
}
