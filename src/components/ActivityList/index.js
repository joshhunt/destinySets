import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

import Activity from 'app/components/Activity';

export default function ActivityList({ className, title, activities, tinyItems }) {
  return (
    <div className={cx(className, styles.allActivites)}>
      <div className={styles.spacer}>
        <h2 className={styles.heading}>{title}</h2>
      </div>

      <div className={styles.spacer} />
      <div className={styles.spacerForLargeScreens} />
      <div className={styles.spacerForSuperLargeScreens} />

      { (activities || []).map((activity, index) => (
        <Activity
          key={activity.activityHash || index}
          className={styles.activity}
          activity={activity}
          tinyItems={tinyItems}
        />
      ))}
    </div>
  );
}
