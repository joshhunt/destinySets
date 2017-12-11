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
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import Xur from 'app/components/Xur';
import Loading from 'app/views/Loading';
import LoginUpsell from 'app/components/LoginUpsell';
import GoogleLoginUpsell from 'app/components/GoogleLoginUpsell';
import ActivityList from 'app/components/ActivityList';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';
import plz from 'app/lib/plz';

import filterSets, {
  DEFAULT_FILTER,
  FILTERS,
  SHOW_PS4_EXCLUSIVES
} from './filterSets';
import processSets from './processSets';

import * as telemetry from 'app/lib/telemetry';

import { PLAYSTATION } from 'app/views/DataExplorer/definitionSources';

import styles from './styles.styl';

const log = require('app/lib/log')('gearsets');

const ITEM_BLACKLIST = [
  1744115122, // Legend of Acrius ...
  460724140, // Jade Rabbit quest item
  546372301, // Jade Rabbit quest item
  2896466320, // Jade Rabbit quest item
  2978016230, // Jade Rabbit quest item
  3229272315 // Jade Rabbit quest item
];

class Gearsets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countStyle: true,
      loading: true,
      items: [],
      selectedItems: [],
      displayFilters: false,
      googleAuthLoaded: false,
      filter: ls.getFilters() || DEFAULT_FILTER
    };
  }

  componentDidMount() {
    const lang = ls.getLanguage();

    this.fetchDefintionsWithLangage(lang.code);

    this.setState({
      activeLanguage: lang
    });
  }

  fetchDefintionsWithLangage(langCode) {
    this.dataPromise = Promise.all([
      getDefinition('DestinyInventoryItemDefinition', langCode).then(defs => {
        ITEM_BLACKLIST.forEach(defHash => {
          delete defs[defHash];
        });

        return defs;
      }),
      getDefinition('DestinyVendorDefinition', langCode)
    ]);

    this.scheduleProcessSets();

    Promise.all([this.dataPromise, destiny.xur()]).then(
      ([data, { xurItems, xurExtraText }]) => {
        this.setState({ xurExtraText });
        this.xurItems = xurItems;
        this.processSets(...data);
      }
    );
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

      if (
        this.state.googleAuthSignedIn &&
        saveCloudInventory &&
        this.hasRecievedInventory
      ) {
        log('Saving cloud inventory', { inventory });
        cloudStorage.setInventory(inventory, this.profile);
      }

      this.filterGroups();
      this.setState(state);
    });
  };

  filterGroups = _filter => {
    const filter = _filter || this.state.filter;
    const filteredState = filterSets({ rawGroups: this.rawGroups, filter });
    this.setState(filteredState);
  };

  fetchCharacters = (props = this.props) => {
    if (!props.isAuthenticated) {
      return;
    }

    destiny.getCurrentProfiles().then(({ profiles, bungieNetUser }) => {
      this.setState({ profiles });

      let fullName = [];
      if (bungieNetUser.xboxDisplayName) {
        fullName.push('XBOX: ' + bungieNetUser.xboxDisplayName);
      }

      if (bungieNetUser.psnDisplayName) {
        fullName.push('PSN: ' + bungieNetUser.psnDisplayName);
      }

      window.rg4js &&
        window.rg4js('setUser', {
          identifier: `${bungieNetUser.membershipId}`,
          isAnonymous: false,
          firstName: bungieNetUser.displayName,
          fullName: fullName.join(', ')
        });

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
    ls.clearAll();
    window.location.reload();
  }

  switchProfile = profile => {
    if (profile && profile.logout) {
      return this.logout();
    }

    googleAuth(({ signedIn }) => {
      this.setState({
        googleAuthLoaded: true,
        googleAuthSignedIn: signedIn
      });
      log('Google auth signedIn:', signedIn);

      signedIn &&
        !this.cloudInventory &&
        cloudStorage.getInventory(profile).then(cloudInventory => {
          this.hasRecievedInventory = true;
          this.cloudInventory = cloudInventory;
          this.scheduleProcessSets();
        });
    });

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

    plz(() =>
      this.dataPromise.then(([itemDefs]) => {
        telemetry.saveInventory(profile, itemDefs);
      })
    );
  };

  toggleFilter = () => {
    this.setState({ displayFilters: !this.state.displayFilters });
  };

  toggleFilterValue = filterValue => {
    const newFilter = {
      ...this.state.filter,
      [filterValue]: !this.state.filter[filterValue]
    };

    this.filterGroups(newFilter);

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
    ls.saveLanguage(newLang);

    this.setState({
      shit: 'poo',
      activeLanguage: newLang
    });

    this.fetchDefintionsWithLangage(newLang.code);
  };

  copyDebug = () => {
    localStorage.debug = localStorage.debug || 'destinySets:*';
    copy(JSON.stringify(this.profile));
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
      xurExtraText,
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
          onGoogleLogin={googleSignIn}
          onGoogleSignout={googleSignOut}
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
            <GoogleLoginUpsell onClick={googleSignIn}>
              BETA: Login with Google to store you inventory over time in Google
              Drive and track dismantled items.
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

        {hasInventory && <Xur items={xurItems} extraText={xurExtraText} />}

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
