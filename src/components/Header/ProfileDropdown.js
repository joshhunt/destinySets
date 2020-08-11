import React, { Fragment, Component } from 'react';
import DropdownMenu from 'app/components/DropdownMenu';
import Icon, { PlatformIcon } from 'app/components/Icon';

import { PLATFORMS } from 'app/lib/destinyEnums';

import styles from './dropdownStyles.styl';

function Platform({
  authExpired,
  profileLoading,
  profileCached,
  membershipType
}) {
  if (profileLoading) {
    return (
      <Fragment>
        <Icon name="spinner-third" spin /> Updating...
      </Fragment>
    );
  }

  if (profileCached) {
    return (
      <Fragment>
        <Icon name="spinner-third" spin /> Booting up...
      </Fragment>
    );
  }

  if (authExpired) {
    return <Fragment>Login expired</Fragment>;
  }

  return (
    <Fragment>
      <PlatformIcon type={membershipType} brand /> {PLATFORMS[membershipType]}
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
            <Icon name="google-drive" brand /> Disconnect Google Drive forever
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
      profileLoading
    } = this.props;

    const showGrey = authExpired || profileCached || profileLoading;

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
              profileLoading={profileLoading}
              profileCached={profileCached}
              authExpired={authExpired}
              membershipType={
                currentProfile.profile.data.userInfo.membershipType
              }
            />
          </div>
        </div>

        <div className={styles.fakeButton}>
          <Icon name="chevron-down" />
        </div>
      </DropdownMenu>
    );
  }
}
