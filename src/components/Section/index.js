import React, { Fragment } from 'react';
import ItemSet from 'app/components/ItemSet';

import styles from './styles.styl';

// import LazyLoad from 'react-lazyload';

export default function Section({ name, slug, sets, setPopper, setModal }) {
  return (
    <div className={styles.root} id={slug}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.list}>
        {sets.map((set, index) => (
          <Fragment key={index}>
            <ItemSet
              className={set.big ? styles.setBig : styles.set}
              set={set}
              setPopper={setPopper}
              setModal={setModal}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
