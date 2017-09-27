import React from 'react';
import cx from 'classnames';

import ItemList from '../ItemList';
import getTypeClass from './getTypeClass';

import styles from './styles.styl';

export default function Activity(props) {
  const { className, activity, tinyItems } = props;

  if (!activity) return null;

  const {
    drops,
    name,
    description,
    pgcrImage,
    activityTypeName,
    sections,
    type,
  } = activity;

  return (
    <div
      className={cx(
        className,
        styles.root,
        getTypeClass(activityTypeName || type)
      )}
    >
      <div className={styles.header}>
        <div className={styles.activityName}>
          {name}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>

      {pgcrImage && (
        <img
          className={styles.image}
          src={'https://bungie.net' + pgcrImage}
          role="presentation"
        />
      )}

      <ItemList
        className={styles.itemList}
        drops={drops}
        sections={sections}
        tinyItems={tinyItems}
      />
    </div>
  );
}
