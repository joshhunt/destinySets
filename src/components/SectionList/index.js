import React from 'react';
import Scrollspy from 'react-scrollspy';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';
import { memoize } from 'lodash';

import styles from './styles.styl';

const getIds = memoize(setData => setData.map(({ slug }) => slug));

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
              offset={-100}
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
