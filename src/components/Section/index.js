import React, { Fragment } from 'react';
import ItemSet from 'app/components/ItemSet';

import styles from './styles.styl';

// import LazyLoad from 'react-lazyload';

export default function Section({ name, slug, sets, setPopper, setModal }) {
  return (
    <div className={styles.root} id={slug}>
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
