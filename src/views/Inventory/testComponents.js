import React from 'react';
import cx from 'classnames';
import LazyLoad from 'react-lazyload';

import styles from './styles.styl';

function Item({ item, ...props }) {
  const icon = item.displayProperties.icon || '/img/misc/missing_icon_d2.png';

  return (
    <div className={styles.item}>
      <LazyLoad placeholder={<div className={styles.itemImage} />}>
        <img
          src={`https://www.bungie.net${icon}`}
          className={styles.itemImage}
          alt=""
        />
      </LazyLoad>
      <div className={styles.itemName}>{item.displayProperties.name}</div>
    </div>
  );
}

export function ItemHash({ hash, itemDefs, ...props }) {
  if (!itemDefs) {
    return null;
  }

  const item = itemDefs[hash];

  if (!item) {
    return null;
  }

  return <Item item={item} {...props} />;
}

export function Objective({ objective, objectiveDefs }) {
  if (!objectiveDefs) {
    return null;
  }

  const { objectiveHash, progress, complete } = objective;
  const def = objectiveDefs[objectiveHash];

  if (!def) {
    return null;
  }

  return (
    <div className={cx(styles.objective, complete && styles.complete)}>
      {objectiveHash}: {def.progressDescription}: {progress}
    </div>
  );
}
