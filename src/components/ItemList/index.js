import React from 'react';
import cx from 'classnames';

import Item from '../Item';

import styles from './styles.styl';

export default function ItemList(props) {
  const { className, drops, sections, tinyItems } = props;

  return (
    <div className={cx(className, styles.root)}>
      {(drops || []).length ? (
        <div className={styles.drops}>
          {drops.map(item => (
            <Item
              className={styles.item}
              key={item.hash}
              item={item}
              dev={true}
            />
          ))}
        </div>
      ) : null}

      {sections && sections.length ? (
        sections.map((section, index) => (
          <div
            className={cx(styles.section, tinyItems && styles.inline)}
            key={index}
          >
            <div className={styles.sectionName}>{section.title}</div>
            <div className={styles.sectionItems}>
              {section.items.map(item => (
                <Item
                  key={item.itemHash || item.hash}
                  item={item}
                  small={true}
                />
              ))}
            </div>
          </div>
        ))
      ) : null}
    </div>
  );
}
