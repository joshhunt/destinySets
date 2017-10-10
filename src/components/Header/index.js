import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import styles from './styles.styl';

const PLATFORM = {
  1: 'Xbox',
  2: 'PlayStation',
  4: 'PC (Blizzard)',
  10: 'TigerDemon',
  254: 'BungieNext',
};

export default class Header extends React.Component {
  state = {
    accountSwitcherActive: false,
  };

  toggleAccountSwitcher = () => {
    this.setState({
      accountSwitcherActive: !this.state.accountSwitcherActive,
    });
  };

  switchProfile = newProfile => {
    this.props.onChangeProfile(newProfile);
  };

  render() {
    const { className, bg, profile } = this.props;

    const style = {};

    if (bg) {
      style.backgroundImage = `url(https://bungie.net${bg})`;
    }

    return (
      <div className={cx(className, styles.root)}>
        <div className={styles.header} style={style}>
          <div className={styles.main}>
            <Link to="/" className={styles.siteName}>
              Destiny Sets <span className={styles.version}>2</span>
            </Link>

            <Link
              to="/"
              className={styles.navItem}
              activeClassName={styles.active}
            >
              <span>Sets</span>
            </Link>

            <Link
              to="/data"
              className={styles.navItem}
              activeClassName={styles.active}
            >
              <span>
                Data
                <span className={styles.longName}> Explorer</span>
              </span>
            </Link>
          </div>

          <div className={styles.social}>
            {profile && (
              <div
                className={styles.accountSwitcher}
                onClick={this.toggleAccountSwitcher}
              >
                <div className={styles.account}>
                  <div className={styles.displayName}>
                    {profile.profile.data.userInfo.displayName}
                  </div>
                  <div className={styles.platform}>
                    {PLATFORM[profile.profile.data.userInfo.membershipType]}
                  </div>
                </div>
                <div className={styles.switchButton}>
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </div>

                {this.state.accountSwitcherActive && (
                  <div className={styles.accountsDropdown}>
                    {this.props.profiles.map((prof, index) => (
                      <div
                        key={index}
                        className={cx(styles.account, styles.dropdownAccount)}
                        onClick={() => this.switchProfile(prof)}
                      >
                        <div className={styles.displayName}>
                          {prof.profile.data.userInfo.displayName}
                        </div>
                        <div className={styles.platform}>
                          {PLATFORM[prof.profile.data.userInfo.membershipType]}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <a
              className={styles.socialItem}
              target="_blank"
              href="https://twitter.com/joshhunt"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              className={styles.socialItem}
              target="_blank"
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
