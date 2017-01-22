/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';
import cx from 'classnames';
import { mapValues, uniqBy, clone, toPairs } from 'lodash';

import * as destiny from 'app/lib/destiny';
import { authUrl } from 'app/lib/destinyAuth';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import Loading from 'app/views/Loading';
import Activity from 'app/components/Activity';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';

import styles from './styles.styl';

function getClassFromTypeName(itemTypeName) {
  const name = itemTypeName.toLowerCase();
  if (name.includes('warlock')) {
    return 'warlock';
  } else if (name.includes('titan')) {
    return 'titan';
  } else if (name.includes('hunter')) {
    return 'hunter';
  } else {
    return 'noclass';
  }
}

const CUSTOM_ACTIVITY_NAME = {
  260765522: 'Wrath of the Machine (Normal)',
  1387993552: 'Wrath of the Machine (Hard)',
}

const DATA_URL_FOR_VARIATION = {
  strike: 'https://destiny.plumbing/en/collections/combinedStrikeDrops.json',
  raid: 'https://destiny.plumbing/en/collections/combinedWoTMDrops.json',
};

class Drops extends Component {
  constructor(props) {
    super(props);

    this.variation = props.route.variation;
    this.dataUrl = DATA_URL_FOR_VARIATION[this.variation];

    this.state = {
      loaded: false,
      filterCss: '',
    };
  }

  componentDidMount() {
    this.fetchActivityData();

    if (this.props.isAuthenticated) {
      this.fetchUserData();
    }
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated){
      this.fetchUserData(newProps);
    }

    if (this.props.route.variation !== newProps.route.variation) {
      this.variation = newProps.route.variation;
      this.dataUrl = DATA_URL_FOR_VARIATION[this.variation];
      this.fetchActivityData();
    }
  }

  fetchUserData(props = this.props) {
    this.fetchAccount(props)
      .then(() => this.fetchInventory());
  }

  fetchActivityData() {
    destiny.get(this.dataUrl)
      .then(activityData => {
        this.activityData = activityData;
        this.activityData.items = activityData.items || activityData.strikeItemHashes;
        this.updateState();
      });
  }

  fetchInventory() {
    destiny.getAllInventoryItems(this.destinyAccount)
      .then((inventory) => {
        this.inventory = inventory;
        this.updateState();
      })
  }

  fetchAccount(props = this.props) {
    if (!props.isAuthenticated) { return; }

    return destiny.getCurrentBungieAccount()
      .then((account) => {
        this.destinyAccount = account;
        this.updateState();
        return this.destinyAccount;
      });
  }

  transformItemList(itemList, activityData) {
    return (itemList || []).map((itemHash) => {
      const item = activityData.items[itemHash];
      const dClass = getClassFromTypeName(item.itemTypeName);
      window.inventory = this.inventory;

      return {
        ...item,
        dClass,
        owned: this.inventory && this.inventory.includes(itemHash)
      }
    })
  }

  updateState() {
    if (!this.activityData) {
      return;
    }

    const activityData = clone(this.activityData);

    const activities = mapValues(activityData.activities, (activity) => {
      const dropList = activityData.dropLists[activity.dropListID];
      const activityName = CUSTOM_ACTIVITY_NAME[activity.activityHash] || activity.activityName;

      if (!dropList) {
        return {
          ...activity,
          activityName,
        };
      }

      const drops = this.transformItemList(dropList.items, activityData);
      const sections = (dropList.sections || []).map((section) => {


        return {
          ...section,
          items: this.transformItemList(section.items, activityData),
        }
      });

      return {
        ...activity,
        activityName,
        drops,
        sections
      };
    });

    const activitiesWithDrops = uniqBy(
      Object.values(activities).filter(activity => activity.drops),
      'activityName'
    );

    let currentActivity;
    if (this.destinyAccount) {
      const currentActivities = this.destinyAccount.characters.map(c => c.currentActivityHash);
      currentActivity = activities[currentActivities[0]];
    }

    this.setState({ currentActivity, activities, activitiesWithDrops, loaded: true });
  }

  poll() {
    setInterval(() => {
      window.ga && window.ga('send', 'event', 'ping', 'raid-activity-check');
    }, 60 * 1000);

    setInterval(() => {
      this.fetchAccount();
    }, 30 * 1000);
  }

  refresh = () => {
    this.fetchUserData();
  };

  updateFilter = (opts) => {
    const filterCss = toPairs(opts).map(([ dClass, shouldDisplay ]) => {
      return `[data-class="${dClass}"] { display: ${shouldDisplay ? 'inline-block' : 'none'} }`
    }).join('\n');

    this.setState({ filterCss });
  }

  render() {
    const { err, loaded, filterCss } = this.state;

    if (err) {
      return (<Loading>An error occurred! {this.state.err.message}</Loading>);
    }

    if (!loaded) {
      return (<Loading>Loading...</Loading>);
    }

    return (
      <div className={styles.root}>
        <div className={cx(styles.hero, this.state.currentActivity && styles.large)}>
          <Header onFilterChange={this.updateFilter}/>

          <style dangerouslySetInnerHTML={{__html: filterCss}}></style>

          { this.state.currentActivity &&
            <div className={styles.currentActivity}>
              <div className={styles.caTop}>
                <h2 className={styles.heading}>Current activity</h2>
                <button className={styles.refreshBtn} onClick={this.refresh}>Refresh</button>
              </div>
              <Activity activity={this.state.currentActivity} />
            </div>
          }

          { (this.props.isAuthenticated && !this.state.currentActivity) &&
            <div className={styles.panel}>
              Looks like you're not currently in a raid. Check back here next time you raid.
            </div>
          }

          { !this.props.isAuthenticated &&
            <div className={styles.loginUpsell}>
              <h2 className={styles.heading}>Login for more features</h2>
              <p>
                See the items you've already collected, plus track your currently active raid.
              </p>

              <a className={styles.authLink} href={authUrl}>Authorize with Bungie.net</a>
            </div>
          }
        </div>

        <div className={styles.allActivites}>
          <div className={styles.spacer}>
            <h2 className={styles.heading}>All Raids</h2>
          </div>

          <div className={styles.spacer} />
          <div className={styles.spacerForLargeScreens} />
          <div className={styles.spacerForSuperLargeScreens} />

          { this.state.activitiesWithDrops.map((activity) => (
            <Activity
              key={activity.activityHash}
              className={styles.activity}
              activity={activity}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default DestinyAuthProvider(Drops);
