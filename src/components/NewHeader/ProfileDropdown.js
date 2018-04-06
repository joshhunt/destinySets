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

function Platform({ membershipType }) {
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
        <div className={styles.dropdownItem}>Log out</div>
      </Fragment>
    );
  };

  render() {
    return (
      <DropdownMenu
        className={styles.root}
        renderContent={this.renderContent}
        contentClassName={styles.dropdown}
      >
        <div className={styles.main}>
          <div>
            {this.props.currentProfile.profile.data.userInfo.displayName}
          </div>

          <div className={styles.small}>
            <Platform
              membershipType={
                this.props.currentProfile.profile.data.userInfo.membershipType
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
