/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import Sidebar from 'react-sidebar';
import DonateButton, { DONATION_LINK } from 'app/components/DonateButton';
import LanguageSwitcher from './LanguageSwitcher';

import { getDefaultLanguage, getBrowserLocale } from 'app/lib/i18n';
import { trackEvent } from 'app/lib/analytics';

import logo from 'app/logo.svg';
// import crimsonDaysHeader from 'app/crimsonDaysHeader.jpg';
import ProfileSwitcher from './ProfileSwitcher';
import styles from './styles.styl';
import sidebarStyles from './sidebar.styl';

const NAV_LINKS = [
  {
    to: '/',
    label: 'Base'
  },
  {
    to: '/curse-of-osiris',
    label: 'Curse of Osiris'
  },
  {
    to: '/strike-gear',
    label: 'Strikes'
  },
  {
    to: '/all-items',
    label: 'All Items'
  },
  {
    to: '/data',
    label: 'Data Explorer'
  }
];

const SOCIAL = [
  <a
    key="paypal"
    className={styles.socialItem}
    target="_blank"
    rel="noopener noreferrer"
    href={DONATION_LINK}
  >
    <i className="fa fa-paypal" />
  </a>,
  <a
    key="twitter"
    className={styles.socialItem}
    target="_blank"
    rel="noopener noreferrer"
    href="https://twitter.com/joshhunt"
  >
    <i className="fa fa-twitter" />
  </a>,
  <a
    key="github"
    className={styles.socialItem}
    target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/joshhunt/destinySets"
  >
    <i className="fa fa-github" />
  </a>
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
    accountSwitcherActive: false
  };

  toggleAccountSwitcher = () => {
    this.setState({
      langSwitcherActive: false,
      accountSwitcherActive: !this.state.accountSwitcherActive
    });
  };

  switchProfile = newProfile => {
    this.props.onChangeProfile(newProfile);
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
      toggleLangSwitcher,
      setLang,
      langSwitcherActive
    } = this.props;
    const { accountSwitcherActive } = this.state;

    const style = {
      // backgroundImage: `url(${crimsonDaysHeader})`,
    };

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
              <img src={logo} className={styles.logo} alt="" />
              <span>Destiny Sets</span>
            </a>
          </div>

          <div className={styles.main}>
            <Link to="/" className={styles.siteName}>
              <img src={logo} className={styles.logo} alt="" />
              <span>Destiny Sets</span>
            </Link>

            {NAV_LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to}>
                {label}
              </NavLink>
            ))}
          </div>

          <div className={styles.social}>
            {setLang && (
              <LanguageSwitcher
                activeLanguage={activeLanguage}
                langSwitcherActive={langSwitcherActive}
                toggleLangSwitcher={toggleLangSwitcher}
                setLang={setLang}
              />
            )}

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

            {SOCIAL}
          </div>
        </div>
      </div>
    );
  }
}

export default class FixedHeader extends Component {
  state = {
    sidebarOpen: false,
    langSwitcherActive: false
  };

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  };

  closeSidebar = () => {
    this.setState({ sidebarOpen: false });

    window.setTimeout(() => {
      this.setState({ sidebarOpen: false });
    }, 1);
  };

  toggleLangSwitcher = () => {
    this.setState({
      accountSwitcherActive: false,
      langSwitcherActive: !this.state.langSwitcherActive
    });
  };

  setLang = lang => {
    trackEvent(
      'switch-lang',
      [
        `loaded:${lang.code}`,
        `default:${getDefaultLanguage().code}`,
        `browser:${getBrowserLocale()}`
      ].join('|')
    );

    this.setState({
      sidebarOpen: false
    });

    this.props.onChangeLang(lang);
  };

  render() {
    const { activeLanguage, onChangeLang } = this.props;

    const sidebarContent = (
      <div className={sidebarStyles.root}>
        <Link
          to="/"
          className={styles.siteName}
          onClick={() => this.onSetSidebarOpen(false)}
        >
          <img src={logo} className={styles.logo} alt="" />
          <span>Destiny Sets</span>
        </Link>

        {NAV_LINKS.map(({ to, label }, index) => (
          <NavLink key={to} onClick={this.closeSidebar} to={to}>
            {label}
          </NavLink>
        ))}

        {onChangeLang && (
          <LanguageSwitcher
            displayInline={true}
            activeLanguage={activeLanguage}
            langSwitcherActive={this.state.langSwitcherActive}
            toggleLangSwitcher={this.toggleLangSwitcher}
            setLang={this.setLang}
          />
        )}

        <br />
        <div className={styles.mobileSocials}>{SOCIAL}</div>
        <br />

        <DonateButton />
      </div>
    );

    return (
      <div className={styles.headerContainer}>
        <Header
          {...this.props}
          onSetSidebarOpen={this.onSetSidebarOpen}
          className={styles.fixedHeader}
          toggleLangSwitcher={this.toggleLangSwitcher}
          setLang={onChangeLang && this.setLang}
          langSwitcherActive={this.state.langSwitcherActive}
        />
        <Header {...this.props} className={styles.fakeHeader} />

        <Sidebar
          sidebar={sidebarContent}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          sidebarClassName={sidebarStyles.sidebar}
          styles={{
            root: {
              pointerEvents: this.state.sidebarOpen ? 'initial' : 'none'
            }
          }}
        >
          {' '}
        </Sidebar>
      </div>
    );
  }
}
