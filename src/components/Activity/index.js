import React from 'react';
import cx from 'classnames';

import Item from '../Item';
import getTypeClass from './getTypeClass';

import styles from './styles.styl';

export default function Activity({ className, activity, drops }) {
  if (!activity) return null;

  const {
    activityName,
    pgcrImage,
    activityTypeName,
  } = activity;

  return (
    <div className={cx(className, styles.root, getTypeClass(activityTypeName))}>
      <div className={styles.header}>
        <div className={styles.activityName}>{activityName}</div>
      </div>

      <img className={styles.image} src={'https://bungie.net' + pgcrImage} role="presentation" />

      { drops && drops.length &&
        <div className={styles.drops}>
          {drops.map(item => <Item key={item.itemHash} item={item} />)}
        </div>
      }
    </div>
  );
}
