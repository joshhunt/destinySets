import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

import Activity from 'app/components/Activity';

export default function ActivityList({
  className,
  title,
  activities,
  tinyItems,
  countStyle,
  toggleCountStyle,
  onItemClick
}) {
  return (
    <div className={cx(className, styles.root)}>
      <h2 className={styles.heading}>{title}</h2>

      <div className={styles.list}>
        {(activities || []).map((activity, index) => (
          <div
            className={cx(styles.activityWrapper, {
              [styles.narrow]: activity.small,
              [styles.big]: activity.big
            })}
            key={index}
          >
            <Activity
              onItemClick={onItemClick}
              className={styles.activity}
              activity={activity}
              tinyItems={tinyItems}
              countStyle={countStyle}
              toggleCountStyle={toggleCountStyle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
