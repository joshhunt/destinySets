import React from 'react';
import cx from 'classnames';
import LazyLoad from 'react-lazyload';

import styles from './styles.styl';

export default function Item({ className, hash, item }) {
  if (!item) {
    return <div className={cx(className, styles.placeholder)} />;
  }

  const icon = item.displayProperties.icon || '/img/misc/missing_icon_d2.png';

  return (
    <div className={cx(className, styles.root)}>
      <LazyLoad placeholder={<div className={styles.placeholder} />}>
        <img
          src={`https://www.bungie.net${icon}`}
          className={styles.image}
          alt=""
        />
      </LazyLoad>
    </div>
  );
}
