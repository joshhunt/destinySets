/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { Link } from 'react-router';
import logo from 'app/logo.svg';
// import LanguageSwitcher from './LanguageSwitcher';

import styles from './styles.styl';

const link = (name, to) => ({ name, to });
const LINKS = [
  link('Base', '/new/'),
  link('Curse of Osiris', '/new/curse-of-osiris'),
  link('All Items', '/new/all-items')
];

export default function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.siteName}>
        <img src={logo} className={styles.logo} alt="" />
        <div>Destiny Sets</div>
      </div>

      <div className={styles.links}>
        {LINKS.map(({ name, to }) => (
          <Link
            key={to}
            className={styles.link}
            activeClassName={styles.active}
            to={to}
          >
            {name}
          </Link>
        ))}
      </div>

      <div className={styles.etc}>
        <div>Destiny Sets</div>
      </div>
    </div>
  );
}
