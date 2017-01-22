import React from 'react';
import cx from 'classnames';

import Item from '../Item';
import getTypeClass from './getTypeClass';

import styles from './styles.styl';

export default function Activity(props) {
  const { className, activity } = props;

  if (!activity) return null;

  const {
    drops,
    activityName,
    pgcrImage,
    activityTypeName,
    sections,
  } = activity;

  return (
    <div className={cx(className, styles.root, getTypeClass(activityTypeName))}>
      <div className={styles.header}>
        <div className={styles.activityName}>{activityName}</div>
      </div>

      <img className={styles.image} src={'https://bungie.net' + pgcrImage} role="presentation" />

      { (drops || []).length ?
        <div className={styles.drops}>
          {drops.map(item => <Item key={item.itemHash} item={item} />)}
        </div>
        : null
      }

      { sections && sections.length && sections.map(section => (
        <div className={styles.section} key={section.id}>
          <div className={styles.sectionName}>{section.title}</div>
          {section.items.map(item => <Item key={item.itemHash} item={item} small />)}
        </div>
      ))}
    </div>
  );
}
