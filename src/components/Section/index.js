import React, { Fragment } from 'react';
import ItemSet from 'app/components/ItemSet';

import styles from './styles.styl';

// import LazyLoad from 'react-lazyload';

export default function Section({ name, sets, setPopper, setModal }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.list}>
        {sets.map((set, index) => (
          <Fragment key={index}>
            <ItemSet
              className={set.big ? styles.setBig : styles.set}
              name={set.name}
              description={set.description}
              sections={set.sections}
              image={set.image}
              setPopper={setPopper}
              setModal={setModal}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
