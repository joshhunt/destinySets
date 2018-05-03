import React from 'react';
import Scrollspy from 'react-scrollspy';
import { memoize } from 'lodash';

import styles from './styles.styl';

const getIds = memoize(setData => {
  console.log('memoize setData is', setData);
  return setData.map(({ slug }) => slug);
});

export default function SectionList({ setData }) {
  console.log('setData is', setData);
  if (!setData) {
    return <h2>no setData uyet</h2>;
  }
  return (
    <div className={styles.root}>
      <div>
        <Scrollspy
          offset={-100}
          items={getIds(setData)}
          className={styles.list}
          currentClassName={styles.itemActive}
        >
          {setData.map(({ name, slug }) => (
            <li className={styles.item}>
              <a href={`#${slug}`}>{name}</a>
            </li>
          ))}
        </Scrollspy>
      </div>
    </div>
  );
}
