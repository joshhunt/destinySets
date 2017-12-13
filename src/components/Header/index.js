import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import {
  languages,
  languageByCode,
  getDefaultLanguage,
  getBrowserLocale
} from 'app/lib/i18n';
import { trackEvent } from 'app/lib/analytics';
import ProfileSwitcher from './ProfileSwitcher';
import styles from './styles.styl';

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
    langSwitcherActive: false
  };

  toggleAccountSwitcher = () => {
    this.setState({
      langSwitcherActive: false,
      accountSwitcherActive: !this.state.accountSwitcherActive
    });
  };

  toggleLangSwitcher = () => {
    this.setState({
      accountSwitcherActive: false,
      langSwitcherActive: !this.state.langSwitcherActive
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
        `browser:${getBrowserLocale()}`
      ].join('|')
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
      onGoogleSignout
    } = this.props;
    const { langSwitcherActive, accountSwitcherActive } = this.state;

    const style = {};

    if (bg) {
      style.backgroundImage = `url(https://bungie.net${bg})`;
    }

    return (
      <div className={cx(className, styles.root)}>
        <div className={styles.header} style={style}>
          <div className={styles.main}>
            <Link to="/" className={styles.siteName}>
              D<span className={styles.longName}>estiny Sets </span>
              <span className={styles.version}>2</span>
            </Link>

            <NavLink to="/">Sets</NavLink>
            <NavLink to="/curse-of-osiris">Curse of Osiris</NavLink>
            <NavLink to="/all-items">All Items</NavLink>

            <NavLink to="/data" className={styles.longName}>
              Data Explorer
            </NavLink>
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

export default function FixedHeader(props) {
  return (
    <div className={styles.headerContainer}>
      <Header {...props} className={styles.fixedHeader} />
      <Header {...props} className={styles.fakeHeader} />
    </div>
  );
}
