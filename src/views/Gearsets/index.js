import React, { Component } from 'react';
import { sortBy } from 'lodash';
import cx from 'classnames';
import copy from 'copy-text-to-clipboard';

import { getDefinition } from 'app/lib/manifestData';

import * as destiny from 'app/lib/destiny';
import * as ls from 'app/lib/ls';
import * as cloudStorage from 'app/lib/cloudStorage';
import googleAuth, {
  signIn as googleSignIn,
  signOut as googleSignOut
} from 'app/lib/googleDriveAuth';
import { getDefaultLanguage, getBrowserLocale } from 'app/lib/i18n';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import Xur from 'app/components/Xur';
import Loading from 'app/views/Loading';
import LoginUpsell from 'app/components/LoginUpsell';
import GoogleLoginUpsell from 'app/components/GoogleLoginUpsell';
import ActivityList from 'app/components/ActivityList';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import { flatMapSetItems } from './utils';
import processSets from './processSets';

// import * as telemetry from 'app/lib/telemetry';

import {
  HUNTER,
  TITAN,
  WARLOCK,
  PLAYSTATION
} from 'app/views/DataExplorer/definitionSources';

import styles from './styles.styl';

import consoleExclusives from '../consoleExclusives.js';

const SHOW_PS4_EXCLUSIVES = -101;
const SHOW_COLLECTED = -102;

const FILTERS = [
  [TITAN, 'Titan'],
  [HUNTER, 'Hunter'],
  [WARLOCK, 'Warlock'],
  [SHOW_COLLECTED, 'Collected'],
  [SHOW_PS4_EXCLUSIVES, 'PS4 exclusives']
];

const defaultFilter = {
  [TITAN]: true,
  [HUNTER]: true,
  [WARLOCK]: true,
  [SHOW_COLLECTED]: true,
  [SHOW_PS4_EXCLUSIVES]: true
};

class Gearsets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countStyle: true,
      loading: true,
      items: [],
      selectedItems: [],
      displayFilters: false,
      filter: ls.getFilters() || defaultFilter
    };
  }

  componentDidMount() {
    const lang = ls.getLanguage();

    this.fetchDefintionsWithLangage(lang.code);

    this.setState({
      activeLanguage: lang
    });

    this.setState({
      googleAuthLoaded: false
    });

    googleAuth(({ signedIn }) => {
      this.setState({
        googleAuthLoaded: true,
        googleAuthSignedIn: signedIn
      });
      console.log('Google auth signedIn:', signedIn);

      signedIn &&
        !this.cloudInventory &&
        cloudStorage.getInventory().then(cloudInventory => {
          console.log(
            'no but actually cloudInventory resolved with',
            cloudInventory
          );
          this.cloudInventory = cloudInventory;
          this.scheduleProcessSets();
        });
    });
  }

  fetchDefintionsWithLangage(langCode) {
    window.ga(
      'send',
      'event',
      'lang-debug',
      [
        `loaded:${langCode}`,
        `default:${getDefaultLanguage().code}`,
        `browser:${getBrowserLocale()}`
      ].join('|')
    );

    this.dataPromise = Promise.all([
      getDefinition('DestinyInventoryItemDefinition', langCode),
      getDefinition('DestinyVendorDefinition', langCode)
    ]);

    this.scheduleProcessSets();

    Promise.all([this.dataPromise, destiny.xur()]).then(([data, xurItems]) => {
      this.xurItems = xurItems;
      this.processSets(...data);
    });
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated) {
      this.fetchCharacters(newProps);
    }

    if (this.props.route !== newProps.route) {
      this.scheduleProcessSets();
    }
  }

  scheduleProcessSets() {
    this.dataPromise.then(result => {
      this.processSets(...result);
    });
  }

  processSets = (itemDefs, vendorDefs) => {
    const processPayload = {
      itemDefs,
      vendorDefs,
      cloudInventory: this.cloudInventory,
      profile: this.profile,
      variation: this.props.route.variation,
      xurItems: this.xurItems
    };
    processSets(processPayload, result => {
      if (!result) {
        return null;
      }

      const { rawGroups, inventory, saveCloudInventory, ...state } = result;
      this.rawGroups = rawGroups;

      console.log(
        `%cSave cloud inventory? ${saveCloudInventory}`,
        'font-weight: bold; color: blue'
      );

      saveCloudInventory && cloudStorage.setInventory(inventory);

      this.filterGroups(rawGroups);
      this.setState(state);
    });
  };

  filterGroups = (rawGroups, _filter) => {
    const filter = _filter || this.state.filter;
    const totalItems = flatMapSetItems(rawGroups).length;

    let totalItemCount = 0;
    let totalObtainedCount = 0;

    // fuck me, this is bad. filter all the items
    const filteredGroups = rawGroups.reduce((groupAcc, _group) => {
      const sets = _group.sets.reduce((setAcc, _set) => {
        let setItemCount = 0;
        let setObtainedCount = 0;

        const sections = _set.sections.reduce((sectionAcc, _section) => {
          const items = _section.items.filter(item => {
            // Exclude the 'Legend of Acrius' exotic quest item
            if (item.hash === 1744115122) {
              return false;
            }

            if (
              !filter[SHOW_PS4_EXCLUSIVES] &&
              consoleExclusives.ps4.includes(item.hash)
            ) {
              return false;
            }

            if (!filter[SHOW_COLLECTED] && item.$obtained) {
              return false;
            }

            if (item.classType === 3) {
              return true;
            }

            if (filter[HUNTER] && item.classType === HUNTER) {
              return true;
            }

            if (filter[TITAN] && item.classType === TITAN) {
              return true;
            }

            if (filter[WARLOCK] && item.classType === WARLOCK) {
              return true;
            }

            return false;
          });

          const obtainedCount = items.length;
          const itemCount = items.filter(i => i.$obtained).length;

          totalItemCount += itemCount;
          totalObtainedCount += obtainedCount;

          setItemCount += itemCount;
          setObtainedCount += obtainedCount;

          if (items.length > 0) {
            sectionAcc.push({
              ..._section,
              items,
              itemCount,
              obtainedCount
            });
          }

          return sectionAcc;
        }, []);

        if (sections.length > 0) {
          setAcc.push({
            ..._set,
            sections,
            itemCount: setItemCount,
            obtainedCount: setObtainedCount
          });
        }

        return setAcc;
      }, []);

      if (sets.length > 0) {
        groupAcc.push({
          ..._group,
          sets: sets
        });
      }

      return groupAcc;
    }, []);

    const displayedItems = flatMapSetItems(filteredGroups).length;

    this.setState({
      itemCount: totalItemCount,
      obtainedCount: totalObtainedCount,
      groups: filteredGroups,
      hiddenItemsCount: totalItems - displayedItems
    });
  };

  googleAuthLogIn = () => {
    googleSignIn();
  };

  googleAuthSignOut = () => {
    googleSignOut();
  };

  fetchCharacters = (props = this.props) => {
    if (!props.isAuthenticated) {
      return;
    }

    destiny.getCurrentProfiles().then(profiles => {
      this.setState({ profiles });

      const { id, type } = ls.getPreviousAccount();

      if (!(id && type)) {
        return this.switchProfile(profiles[0]);
      }

      const prevProfile = profiles.find(profile => {
        return (
          profile.profile.data.userInfo.membershipId === id &&
          profile.profile.data.userInfo.membershipType === type
        );
      });

      this.switchProfile(prevProfile || profiles[0]);
    });
  };

  logout() {
    this.profile = undefined;
    ls.removePreviousAccount();
    ls.removeAuth();
    ls.removeInventory();
    location.reload();
  }

  switchProfile = profile => {
    if (profile && profile.logout) {
      return this.logout();
    }

    const { membershipId, membershipType } = profile.profile.data.userInfo;
    ls.savePreviousAccount(membershipId, membershipType);

    this.profile = profile;

    const recentCharacter = sortBy(
      Object.values(profile.characters.data),
      character => {
        return new Date(character.dateLastPlayed).getTime();
      }
    ).reverse()[0];
    this.emblemHash = recentCharacter.emblemHash;

    this.setState({
      profile,
      filter: {
        ...this.state.filter,
        [SHOW_PS4_EXCLUSIVES]: membershipType === PLAYSTATION
      }
    });

    this.scheduleProcessSets();
  };

  toggleFilter = () => {
    this.setState({ displayFilters: !this.state.displayFilters });
  };

  toggleFilterValue = filterValue => {
    const newFilter = {
      ...this.state.filter,
      [filterValue]: !this.state.filter[filterValue]
    };

    this.filterGroups(this.rawGroups, newFilter);

    ls.saveFilters(newFilter);

    this.setState({
      filter: newFilter
    });
  };

  toggleCountStyle = () => {
    this.setState({
      countStyle: !this.state.countStyle
    });
  };

  switchLang = newLang => {
    window.ga('send', 'event', 'switch-lang', newLang.code);

    ls.saveLanguage(newLang);

    this.setState({
      shit: 'poo',
      activeLanguage: newLang
    });

    this.fetchDefintionsWithLangage(newLang.code);
  };

  copyDebug = () => {
    const { itemComponents, ...debugProfile } = this.profile;
    copy(JSON.stringify(debugProfile));
  };

  render() {
    const {
      loading,
      profile,
      profiles,
      groups,
      emblemBg,
      displayFilters,
      hiddenItemsCount,
      countStyle,
      itemCount,
      obtainedCount,
      activeLanguage,
      shit,
      xurItems,
      hasInventory,
      googleAuthLoaded,
      googleAuthSignedIn
    } = this.state;

    if (loading) {
      return <Loading>Loading...</Loading>;
    }

    return (
      <div className={styles.root}>
        <Header
          bg={emblemBg}
          profile={profile}
          profiles={profiles}
          onChangeProfile={this.switchProfile}
          onChangeLang={this.switchLang}
          isGoogleAuthenticated={googleAuthSignedIn}
          onGoogleLogin={this.googleAuthLogIn}
          onGoogleSignout={this.googleAuthSignOut}
          activeLanguage={activeLanguage}
        />

        {!this.props.isAuthenticated && (
          <LoginUpsell>
            Log in to use your inventory to automatically check off items you've
            obtained
          </LoginUpsell>
        )}

        {shit && (
          <div className={styles.info}>Loading {activeLanguage.name}...</div>
        )}

        {googleAuthLoaded &&
          this.props.isAuthenticated &&
          !googleAuthSignedIn && (
            <GoogleLoginUpsell onClick={this.googleAuthLogIn}>
              Login with Google to track dismantled apps
            </GoogleLoginUpsell>
          )}

        <div className={styles.subnav}>
          <div className={styles.navsections}>
            {(groups || []).map((group, index) => (
              <a
                className={styles.subnavItem}
                key={index}
                href={`#group_${index}`}
              >
                {group.name}
              </a>
            ))}
          </div>

          <div className={styles.filterFlex}>
            {profile &&
              hiddenItemsCount > 0 && (
                <div className={styles.filteredOut}>
                  {hiddenItemsCount} items hidden by filters
                </div>
              )}

            <div className={styles.itemCountWrapper}>
              <div className={styles.itemCount} onClick={this.toggleCountStyle}>
                Collected{' '}
                {countStyle ? (
                  <span>{Math.floor(itemCount / obtainedCount * 100)}%</span>
                ) : (
                  <span>
                    {itemCount} / {obtainedCount}
                  </span>
                )}
              </div>
            </div>

            <div
              className={cx(
                styles.toggleFilters,
                displayFilters && styles.filtersActive
              )}
              onClick={this.toggleFilter}
            >
              Filters <i className="fa fa-caret-down" aria-hidden="true" />
            </div>
          </div>

          {displayFilters && (
            <div className={styles.filters}>
              <div className={styles.filterInner}>
                <div className={styles.neg}>
                  {FILTERS.map(([filterId, filterLabel]) => (
                    <label className={styles.filterOpt}>
                      <input
                        type="checkbox"
                        checked={this.state.filter[filterId]}
                        onChange={() => this.toggleFilterValue(filterId)}
                      />{' '}
                      {filterLabel}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/*hasInventory && <Xur items={xurItems} />*/}

        {(groups || []).map((group, index) => (
          <div key={index} id={`group_${index}`}>
            <ActivityList
              title={group.name}
              activities={group.sets || []}
              toggleCountStyle={this.toggleCountStyle}
              countStyle={countStyle}
            />
          </div>
        ))}

        <div className={styles.debug}>
          <button onClick={this.copyDebug}>Copy debug info</button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default DestinyAuthProvider(Gearsets);
