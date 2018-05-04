import React from 'react';
import { Link } from 'react-scroll';

import FilterDropdown from './FilterDropdown';
import styles from './styles.styl';

export default function SectionList({ setData, filters, toggleFilter }) {
  return (
    <div className={styles.root}>
      <div className={styles.fixed}>
        <ul className={styles.list}>
          {setData.map(({ name, slug }) => (
            <Link
              spy={true}
              smooth={true}
              to={slug}
              offset={-95}
              className={styles.item}
              activeClass={styles.itemActive}
              key={slug}
            >
              {name}
            </Link>
          ))}
        </ul>

        <div>
          <FilterDropdown filters={filters} toggleFilter={toggleFilter} />
        </div>
      </div>
    </div>
  );
}
