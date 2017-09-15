import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

import Activity from 'app/components/Activity';

export default function ActivityList({
  className,
  title,
  activities,
  tinyItems,
}) {
  return (
    <div className={cx(className, styles.root)}>
      <h2 className={styles.heading}>{title}</h2>

      <div className={styles.list}>
        {(activities || []).map((activity, index) => (
          <div className={styles.activityWrapper} key={index}>
            <Activity
              className={styles.activity}
              activity={activity}
              tinyItems={tinyItems}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
