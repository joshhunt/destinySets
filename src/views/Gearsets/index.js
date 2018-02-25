import React, { Component } from 'react';
import { sortBy } from 'lodash';
import Modal from 'react-modal';

import { getDefinition } from 'app/lib/manifestData';

import copy from 'app/lib/copyToClipboard';
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
import FilterBar from 'app/components/FilterBar';
import ItemModal from 'app/components/ItemModal';
import ItemTooltip from 'app/components/ItemTooltip';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import filterSets, {
  DEFAULT_FILTER,
  FILTERS,
  SHOW_PS4_EXCLUSIVES
} from './filterSets';
import processSets from './processSets';
import { PLAYSTATION } from 'app/lib/destinyEnums';

import styles from './styles.styl';

const log = require('app/lib/log')('gearsets');

const MODAL_STYLES = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    marginTop: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: 'static',
    background: 'none',
    border: 'none'
  }
};

class Gearsets extends Component {
  trackedHashes = [];

  constructor(props) {
    super(props);

    this.trackedHashes = ls.getTrackedItems();

    this.state = {
      itemModal: undefined,
      countStyle: true,
      loading: true,
      items: [],
      selectedItems: [],
      trackedItems: [],
      trackedHashes: [],
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
      getDefinition('reducedCollectableInventoryItems', langCode, false),
      // getDefinition('DestinyInventoryItemDefinition', langCode),
      getDefinition('DestinyVendorDefinition', langCode),
      getDefinition('DestinyStatDefinition', langCode),
      getDefinition('DestinyObjectiveDefinition', langCode)
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
    if (this.processSetsScheduled) {
      return;
    }

    this.processSetsScheduled = true;

    this.dataPromise.then(result => {
      this.processSets(...result);
      this.processSetsScheduled = false;
    });
  }

  processSets = (itemDefs, vendorDefs, statDefs, objectiveDefs) => {
    const processPayload = {
      itemDefs,
      vendorDefs,
      statDefs,
      objectiveDefs,
      trackedHashes: this.trackedHashes,
      cloudInventory: this.cloudInventory,
      profile: this.profile,
      setData: this.props.route.setData,
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
      this.setState({ profiles, lastUpdate: new Date() });

      const { id, type } = ls.getPreviousAccount();
      if (!(id && type)) {
        return this.switchProfile(profiles[0]);
      }

      const prevProfile = profiles.find(({ profile }) => {
        return (
          profile.data.userInfo.membershipId === id &&
          profile.data.userInfo.membershipType === type
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

  onItemClick = (ev, item) => {
    ev.preventDefault();
    this.setState({
      itemModal: item
    });
  };

  closeModal = () => {
    this.setState({
      itemModal: null
    });
  };

  setUpPolling = () => {
    if (this.trackedHashes.length && !this.pollId) {
      this.pollId = window.setInterval(() => {
        this.fetchCharacters();
      }, 30 * 1000);
    }

    if (!this.trackedHashes.length && this.pollId) {
      window.clearInterval(this.pollId);
    }
  };

  trackOrnament = itemHash => {
    this.trackedHashes = [...this.trackedHashes, itemHash];
    this.scheduleProcessSets();
    ls.saveTrackedItems(this.trackedHashes);
    this.setUpPolling();
  };

  removeOrnament = item => {
    this.trackedHashes = this.trackedHashes.filter(hash => hash !== item.hash);

    const newTrackedItems = this.state.trackedItems.filter(
      trackedItem => trackedItem.hash !== item.hash
    );

    ls.saveTrackedItems(this.trackedHashes);
    this.setState({ trackedItems: newTrackedItems });
    this.setUpPolling();
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
      googleAuthSignedIn,
      itemModal,
      trackedItems
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

        {trackedItems.length > 0 && (
          <div className={styles.trackedItems}>
            {trackedItems.map(item => (
              <ItemTooltip
                item={item}
                small={true}
                dismiss={this.removeOrnament}
              />
            ))}
          </div>
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

          {this.props.isAuthenticated && (
            <FilterBar
              filters={FILTERS}
              filterValues={this.state.filter}
              profile={profile}
              hiddenItemsCount={hiddenItemsCount}
              itemCount={itemCount}
              obtainedCount={obtainedCount}
              countStyle={countStyle}
              displayFilters={displayFilters}
              toggleFilter={this.toggleFilter}
              toggleCountStyle={this.toggleCountStyle}
              toggleFilterValue={this.toggleFilterValue}
            />
          )}
        </div>

        {hasInventory && <Xur items={xurItems} extraText={xurExtraText} />}

        {(groups || []).map((group, index) => (
          <div key={index} id={`group_${index}`}>
            <ActivityList
              onItemClick={this.onItemClick}
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

        <Modal
          isOpen={!!itemModal}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          style={MODAL_STYLES}
        >
          <ItemModal
            item={itemModal}
            onRequestClose={this.closeModal}
            trackOrnament={this.trackOrnament}
          />
        </Modal>

        <Footer />
      </div>
    );
  }
}

export default DestinyAuthProvider(Gearsets);
