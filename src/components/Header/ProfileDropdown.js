import React, { Fragment, Component } from 'react';
import DropdownMenu from 'app/components/DropdownMenu';
import Icon from 'app/components/Icon';

import {
  XBOX,
  PLAYSTATION,
  PC_BLIZZARD,
  TIGERDEMON,
  BUNGIENEXT
} from 'app/lib/destinyEnums';

import styles from './dropdownStyles.styl';

const PLATFORM = {
  [XBOX]: 'Xbox',
  [PLAYSTATION]: 'PlayStation',
  [PC_BLIZZARD]: 'PC (Battle.net)',
  [TIGERDEMON]: 'TigerDemon',
  [BUNGIENEXT]: 'BungieNext'
};

const ICONS = {
  [XBOX]: 'xbox',
  [PLAYSTATION]: 'playstation',
  [PC_BLIZZARD]: 'windows'
};

function Platform({ authExpired, isLoading, profileCached, membershipType }) {
  if (profileCached) {
    return (
      <Fragment>
        <Icon icon="spinner-third" spin /> Booting up...
      </Fragment>
    );
  }

  if (authExpired) {
    return <Fragment>Login expired</Fragment>;
  }

  if (isLoading) {
    return (
      <Fragment>
        <Icon icon="spinner-third" spin /> Loading...
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Icon icon={ICONS[membershipType]} brand /> {PLATFORM[membershipType]}
    </Fragment>
  );
}

export default class ProfileDropdown extends Component {
  renderContent = () => {
    return (
      <Fragment>
        {this.props.allProfiles.map((profile, index) => (
          <div
            key={index}
            className={styles.dropdownItem}
            onClick={() => this.props.switchProfile(profile)}
          >
            {profile.profile.data.userInfo.displayName}
            <div className={styles.small}>
              <Platform
                membershipType={profile.profile.data.userInfo.membershipType}
              />
            </div>
          </div>
        ))}

        {this.props.googleAuthSignedIn && (
          <div
            className={styles.dropdownItem}
            onClick={this.props.googleSignOut}
          >
            <Icon icon="google-drive" brand /> Disconnect Google Drive
          </div>
        )}

        <div className={styles.dropdownItem} onClick={this.props.logout}>
          Log out
        </div>
      </Fragment>
    );
  };

  render() {
    const {
      authExpired,
      currentProfile,
      profileCached,
      isLoading
    } = this.props;
    const showGrey = authExpired || profileCached || isLoading;

    return (
      <DropdownMenu
        className={showGrey ? styles.cachedRoot : styles.root}
        renderContent={this.renderContent}
        contentClassName={styles.dropdown}
      >
        <div className={styles.main}>
          <div>{currentProfile.profile.data.userInfo.displayName}</div>

          <div className={styles.small}>
            <Platform
              profileCached={profileCached}
              authExpired={authExpired}
              membershipType={
                currentProfile.profile.data.userInfo.membershipType
              }
            />
          </div>
        </div>

        <div className={styles.fakeButton}>
          <Icon icon="chevron-down" />
        </div>
      </DropdownMenu>
    );
  }
}
