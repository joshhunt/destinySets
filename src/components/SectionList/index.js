import React from 'react';
import { Link } from 'react-scroll';

import styles from './styles.styl';

export default function SectionList({ setData }) {
  return (
    <div className={styles.root}>
      <div>
        <ul className={styles.list}>
          {setData.map(({ name, slug }) => (
            <Link
              spy={true}
              smooth={true}
              to={slug}
              offset={-95}
              className={styles.item}
              activeClass={styles.itemActive}
            >
              {name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
