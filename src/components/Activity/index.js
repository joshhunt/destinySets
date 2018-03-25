import React, { Fragment } from 'react';
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
    countStyle,
    onItemClick
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

  const header = (
    <Fragment>
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
    </Fragment>
  );

  return (
    <div
      className={cx(
        className,
        styles.root,
        getTypeClass(activityTypeName || type)
      )}
    >
      {pgcrImage ? (
        <div className={styles.aspectImageWrapper}>
          <img
            className={styles.aspectImage}
            src={'https://bungie.net' + pgcrImage}
            alt=""
          />

          <div className={styles.imageHeader}>{header}</div>
        </div>
      ) : (
        <div className={styles.header}>{header}</div>
      )}

      <ItemList
        className={styles.itemList}
        drops={drops}
        sections={sections}
        tinyItems={tinyItems}
        onItemClick={onItemClick}
      />
    </div>
  );
}
