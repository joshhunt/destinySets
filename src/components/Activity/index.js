import React from 'react';
import cx from 'classnames';

import ItemList from '../ItemList';
import getTypeClass from './getTypeClass';

import styles from './styles.styl';

export default function Activity(props) {
  const {
    className,
    activity,
    tinyItems,
    toggleCountStyle,
    countStyle
  } = props;

  if (!activity) return null;

  const {
    drops,
    name,
    description,
    pgcrImage,
    activityTypeName,
    sections,
    type,
    itemCount,
    obtainedCount
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
          <div className={styles.name}>{name}</div>

          <div className={styles.count} onClick={toggleCountStyle}>
            {countStyle ? (
              <span>{Math.floor(itemCount / obtainedCount * 100)}%</span>
            ) : (
              <span>
                {itemCount} / {obtainedCount}
              </span>
            )}
          </div>
        </div>

        {description && <p className={styles.description}>{description}</p>}
      </div>

      {pgcrImage && (
        <img
          className={styles.image}
          src={'https://bungie.net' + pgcrImage}
          alt=""
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
