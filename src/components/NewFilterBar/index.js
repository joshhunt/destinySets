import React from 'react';

import { HUNTER, TITAN, WARLOCK } from 'app/lib/destinyEnums';

import styles from './styles.styl';

const FILTER_NAMES = {
  [HUNTER]: 'Hunter',
  [TITAN]: 'Titan',
  [WARLOCK]: 'Warlock'
};

export default function FilterBar({ filters, toggleFilter }) {
  return (
    <div className={styles.root}>
      {Object.keys(filters).map(key => (
        <div
          key={key}
          className={filters[key] ? styles.filterTrue : styles.filterFalse}
          onClick={() => toggleFilter(key)}
        >
          {FILTER_NAMES[key]}: {filters[key] ? 'true' : 'false'}
        </div>
      ))}
    </div>
  );
}
