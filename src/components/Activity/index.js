import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

export default function Activity({ activity }) {
  if (!activity) return null;

  const {
    activityName,
    pgcrImage,
    // tempImage,
    $type: type,
  } = activity;

  const typeClass = {
    'Strike': styles.typeNightfall,
  };

  return (
    <div className={cx(styles.root, typeClass[type.activityTypeName])}>
      <div className={styles.header}>
        <div className={styles.activityName}>{activityName}</div>
      </div>

      <img className={styles.image} src={'https://destinysets.imgix.net' + pgcrImage} role="presentation" />
    </div>
  );
}
