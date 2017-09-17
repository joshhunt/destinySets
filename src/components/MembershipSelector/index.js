import React from 'react';
import cx from 'classnames';

import styles from './styles.styl';

const PLATFORM = {
  1: 'Xbox',
  2: 'PlayStation',
  4: 'PC (Blizzard)',
  10: 'TigerDemon',
  254: 'BungieNext',
};

const CLASS = {
  0: 'Titan',
  1: 'Hunter',
  2: 'Warlock',
  3: 'Unknown',
};

const RACE = {
  0: 'Human',
  1: 'Awoken',
  2: 'Exo',
  3: 'Unknown',
};

const GENDER = {
  0: 'Male',
  1: 'Female',
  2: 'Unknown',
};

function BungieImage({ src, ...props }) {
  return <img src={`http://bungie.net${src}`} {...props} />;
}

function AccountSummary({ className, profile, action, onClick }) {
  return (
    <div className={cx(className, styles.accountSummary)}>
      <div className={styles.accountDetails}>
        <div className={styles.displayName}>
          {profile.data.userInfo.displayName}
        </div>
        <div className={styles.platform}>
          {PLATFORM[profile.data.userInfo.membershipType]}
        </div>
      </div>
      <div className={styles.accountAction}>
        <button onClick={onClick} className={styles.selectButton}>
          {action}
        </button>
      </div>
    </div>
  );
}

export default class MembershipSelector extends React.Component {
  state = {};

  componentDidMount() {
    const [membershipId, membershipType] = (localStorage.getItem(
      'selectedAccount'
    ) || '')
      .split('|');
    if (!(membershipId && membershipType)) {
      return;
    }

    const prevProfile = this.props.profiles.find(profile => {
      return (
        profile.profile.data.userInfo.membershipId.toString() ===
          membershipId &&
        profile.profile.data.userInfo.membershipType.toString() ===
          membershipType
      );
    });

    this.onProfileClick(prevProfile);
  }

  onProfileClick = profile => {
    this.props.onSelect(profile);
    const token = `${profile.profile.data.userInfo.membershipId}|${profile
      .profile.data.userInfo.membershipType}`;

    localStorage.setItem('selectedAccount', token);

    this.setState({
      selected: true,
      active: profile,
    });
  };

  selectAgain = () => {
    this.setState({
      selected: false,
    });
  };

  render() {
    const { profiles } = this.props;
    const { selected } = this.state;

    if (selected && this.state.active) {
      return (
        <AccountSummary
          className={styles.activeAccount}
          profile={this.state.active.profile}
          onClick={this.selectAgain}
          action="Switch account"
        />
      );
    }

    return (
      <div className={styles.root}>
        <p className={styles.para}>
          Looks like you have multiple Destiny 2 accounts. Select one to
          continue. Don't worry, you can always change it later.
        </p>

        <div className={styles.accounts}>
          {profiles.map((data, index) => {
            const { profile, characters } = data;
            return (
              <div className={styles.account} key={index}>
                <div className={styles.accountInner}>
                  <AccountSummary
                    profile={profile}
                    onClick={() => this.onProfileClick(data)}
                    action="Select"
                  />

                  {Object.values(characters.data).map((char, index2) => (
                    <div className={styles.charWrapper} key={index2}>
                      <div
                        className={styles.char}
                        style={{
                          backgroundImage: `url(//bungie.net${char.emblemBackgroundPath})`,
                        }}
                      >
                        <div className={styles.charInner}>
                          <BungieImage
                            className={styles.emblem}
                            src={char.emblemPath}
                          />

                          <div className={styles.desc}>
                            <div className={styles.classType}>
                              {CLASS[char.classType]}
                            </div>
                            <div className={styles.race}>
                              {RACE[char.raceType]} {GENDER[char.genderType]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
