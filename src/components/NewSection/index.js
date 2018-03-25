import React from 'react';
import ItemSet from 'app/components/ItemSet';

import styles from './styles.styl';

import LazyLoad from 'react-lazyload';

export default function Section({ name, sets, setPopper, setModal }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.list}>
        {sets.map((set, index) => (
          <LazyLoad height={100} key={index}>
            <ItemSet
              className={styles.set}
              name={set.name}
              sections={set.sections}
              setPopper={setPopper}
              setModal={setModal}
            />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}
