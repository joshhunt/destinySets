/* eslint-disable jsx-a11y/href-no-hash */

import React, { Component } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import Sidebar from 'react-sidebar';

import {
  languages,
  languageByCode,
  getDefaultLanguage,
  getBrowserLocale,
} from 'app/lib/i18n';
import { trackEvent } from 'app/lib/analytics';

import logo from 'app/logo.png';
import ProfileSwitcher from './ProfileSwitcher';
import styles from './styles.styl';
import sidebarStyles from './sidebar.styl';

const NAV_LINKS = [
  {
    to: '/',
    label: 'Base',
  },
  {
    to: '/curse-of-osiris',
    label: 'Curse of Osiris',
  },
  {
    to: '/all-items',
    label: 'All Items',
  },
  {
    to: '/data',
    label: 'Data Explorer',
  },
];

function NavLink({ children, className, ...props }) {
  return (
    <Link
      {...props}
      className={cx(className, styles.navItem)}
      activeClassName={styles.active}
    >
      <span>{children}</span>
    </Link>
  );
}

class Header extends React.Component {
  state = {
    accountSwitcherActive: false,
    langSwitcherActive: false,
  };

  toggleAccountSwitcher = () => {
    this.setState({
      langSwitcherActive: false,
      accountSwitcherActive: !this.state.accountSwitcherActive,
    });
  };

  toggleLangSwitcher = () => {
    this.setState({
      accountSwitcherActive: false,
      langSwitcherActive: !this.state.langSwitcherActive,
    });
  };

  switchProfile = newProfile => {
    this.props.onChangeProfile(newProfile);
  };

  setLang = lang => {
    trackEvent(
      'switch-lang',
      [
        `loaded:${lang.code}`,
        `default:${getDefaultLanguage().code}`,
        `browser:${getBrowserLocale()}`,
      ].join('|'),
    );

    this.props.onChangeLang(lang);
  };

  render() {
    const {
      className,
      bg,
      profile,
      profiles,
      activeLanguage,
      isGoogleAuthenticated,
      onGoogleSignout,
    } = this.props;
    const { langSwitcherActive, accountSwitcherActive } = this.state;

    const style = {};

    if (bg) {
      style.backgroundImage = `url(https://bungie.net${bg})`;
    }

    return (
      <div className={cx(className, styles.root)}>
        <div className={styles.header} style={style}>
          <div className={styles.mobile}>
            <button
              className={styles.hambuger}
              onClick={() => this.props.onSetSidebarOpen(true)}
            >
              <i className="fa fa-bars" />
            </button>

            <a href="#" className={styles.siteName}>
              Destiny Sets
              <span className={styles.version}>2</span>
            </a>
          </div>

          <div className={styles.main}>
            <Link to="/" className={styles.siteName}>
              <img src={logo} className={styles.logo} alt="" />
              <span>
                Destiny Sets
                <span className={styles.version}>2</span>
              </span>
            </Link>

            {NAV_LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to}>
                {label}
              </NavLink>
            ))}
          </div>

          <div className={styles.social}>
            <div
              className={styles.languageSwitcher}
              onClick={this.toggleLangSwitcher}
            >
              <div className={styles.currentLang}>
                <span className={styles.displayName}>
                  {activeLanguage && languageByCode[activeLanguage.code].name}
                </span>
              </div>
              <div className={styles.switchButton}>
                <i className="fa fa-caret-down" aria-hidden="true" />
              </div>

              {langSwitcherActive && (
                <div className={styles.langDropdown}>
                  {languages.map(lang => (
                    <div
                      key={lang.code}
                      className={styles.langOption}
                      onClick={() => this.setLang(lang)}
                    >
                      {lang.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {profile && (
              <ProfileSwitcher
                profile={profile}
                profiles={profiles}
                accountSwitcherActive={accountSwitcherActive}
                isGoogleAuthenticated={isGoogleAuthenticated}
                onGoogleSignout={onGoogleSignout}
                toggleAccountSwitcher={this.toggleAccountSwitcher}
                switchProfile={this.switchProfile}
              />
            )}

            <a
              className={styles.socialItem}
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/joshhunt"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              className={styles.socialItem}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/joshhunt/destinySets"
            >
              <i className="fa fa-github" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default class FixedHeader extends Component {
  state = {
    sidebarOpen: false,
  };

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  };

  closeSidebar = () => {
    console.log('xxxxxx');
    this.setState({ sidebarOpen: false });

    window.setTimeout(() => {
      this.setState({ sidebarOpen: false });
    }, 1);
  };

  render() {
    const sidebarContent = (
      <div className={sidebarStyles.root}>
        <Link to="/" className={styles.siteName}>
          Destiny Sets
          <span className={styles.version}>2</span>
        </Link>

        {NAV_LINKS.map(({ to, label }, index) => (
          <NavLink key={to} onClick={this.closeSidebar} to={to}>
            {label}
          </NavLink>
        ))}
      </div>
    );

    return (
      <div className={styles.headerContainer}>
        <Header
          {...this.props}
          onSetSidebarOpen={this.onSetSidebarOpen}
          className={styles.fixedHeader}
        />
        <Header {...this.props} className={styles.fakeHeader} />

        <Sidebar
          sidebar={sidebarContent}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          sidebarClassName={sidebarStyles.sidebar}
          styles={{
            root: {
              pointerEvents: this.state.sidebarOpen ? 'initial' : 'none',
            },
          }}
        >
          {' '}
        </Sidebar>
      </div>
    );
  }
}
