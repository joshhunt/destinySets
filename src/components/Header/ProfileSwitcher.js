import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

const PLATFORM = {
  1: 'Xbox',
  2: 'PlayStation',
  4: 'PC (Blizzard)',
  10: 'TigerDemon',
  254: 'BungieNext'
};

export default function ProfileSwitcher({
  profile,
  accountSwitcherActive,
  isGoogleAuthenticated,
  onGoogleSignout,

  // new props
  profiles,

  // from this
  toggleAccountSwitcher,
  switchProfile
}) {
  return (
    <div className={styles.accountSwitcher} onClick={toggleAccountSwitcher}>
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

      {accountSwitcherActive && (
        <div className={styles.accountsDropdown}>
          {profiles.map((prof, index) => (
            <div
              key={index}
              className={cx(styles.account, styles.dropdownAccount)}
              onClick={() => switchProfile(prof)}
            >
              <div className={styles.displayName}>
                {prof.profile.data.userInfo.displayName}
              </div>
              <div className={styles.platform}>
                {PLATFORM[prof.profile.data.userInfo.membershipType]}
              </div>
            </div>
          ))}

          {isGoogleAuthenticated && (
            <div
              onClick={onGoogleSignout}
              className={cx(
                styles.account,
                styles.logOut,
                styles.dropdownAccount
              )}
            >
              Disconnect Google
            </div>
          )}

          <div
            onClick={() => switchProfile({ logout: true })}
            className={cx(
              styles.account,
              styles.logOut,
              styles.dropdownAccount
            )}
          >
            Log out
          </div>
        </div>
      )}
    </div>
  );
}
