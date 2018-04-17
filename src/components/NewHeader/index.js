/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { Link } from 'react-router';

import logo from 'app/logo.svg';
import { DONATION_LINK } from 'app/components/DonateButton';
import Icon from 'app/components/Icon';
import ProfileDropdown from './ProfileDropdown';
// import LanguageDropdown from './LanguageDropdown';

import styles from './styles.styl';

const link = (name, to) => ({ name, to });
const LINKS = [
  link('Base', '/'),
  link('Curse of Osiris', '/curse-of-osiris'),
  link('All Items', '/all-items')
];

const SOCIALS = [
  link('paypal', DONATION_LINK),
  link('twitter', 'https://twitter.com/joshhunt'),
  link('github', 'https://github.com/joshhunt/destinySets')
];

export default function Header({
  isCached,
  currentProfile,
  allProfiles,
  switchProfile,
  language,
  setLanguage
}) {
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
        {/*language && (
          <LanguageDropdown language={language} setLanguage={setLanguage} />
        )*/}

        {currentProfile && (
          <ProfileDropdown
            isCached={isCached}
            currentProfile={currentProfile}
            allProfiles={allProfiles}
            switchProfile={switchProfile}
          />
        )}

        {SOCIALS.map(({ name, to }) => (
          <a
            key={to}
            className={styles.socialLink}
            href={to}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={name} brand />
          </a>
        ))}
      </div>
    </div>
  );
}
