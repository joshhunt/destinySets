import React from 'react';
import cx from 'classnames';

import Item from '../Item';

import styles from './styles.styl';

export default function ItemList(props) {
  const { className, drops, sections, tinyItems } = props;

  return (
    <div className={cx(className, styles.root)}>
      { (drops || []).length ?
        <div className={styles.drops}>
          {drops.map(item => <Item key={item.itemHash} item={item} tiny={tinyItems} />)}
        </div>
        : null
      }

      { (sections && sections.length) ? sections.map(section => (
        <div className={cx(styles.section, tinyItems && styles.inline)} key={section.id}>
          <div className={styles.sectionName}>{section.title}</div>
          {section.items.map(item => <Item key={item.itemHash} item={item} small tiny={tinyItems} />)}
        </div>
      )) : null}
    </div>
  );
}
