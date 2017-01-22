/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';
import cx from 'classnames';
import { mapValues, uniqBy, clone } from 'lodash';

import * as destiny from 'app/lib/destiny';
import { authUrl } from 'app/lib/destinyAuth';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import Loading from 'app/views/Loading';
import Activity from 'app/components/Activity';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';

import styles from './styles.styl';

const ACTIVITY_DATA = 'https://destiny.plumbing/en/collections/combinedStrikeDrops.json';

class CurrentStrike extends Component {
  state = {
    loaded: false,
  };

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
  }

  fetchUserData(props = this.props) {
    this.fetchAccount(props)
      .then(() => this.fetchInventory());
  }

  fetchActivityData() {
    destiny.get(ACTIVITY_DATA)
      .then(activityData => {
        this.activityData = activityData;
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

  updateState() {
    if (!this.activityData) {
      return
    }

    // if (!(this.destinyAccount && this.inventory && this.activityData)) {
    //   return;
    // }

    const activityData = clone(this.activityData);
    const activities = mapValues(activityData.activities, (activity) => {
      const dropList = activityData.dropLists[activity.dropListID]

      const drops = dropList && dropList.items.map((itemHash) => {
        const item = activityData.strikeItemHashes[itemHash];
        return {
          ...item,
          owned: this.inventory && this.inventory.includes(itemHash)
        }
      });

      return {
        ...activity,
        drops,
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

    // if (currentActivity.activityHash !== this.state.currentActivity.activityHash) {
    //   // If the user has changed activity, fetch their new inventory. The updateState()
    //   // call at the end of fetchInventory will do all this work again for us
    //   this.fetchInventory();
    // }

    this.setState({ currentActivity, activities, activitiesWithDrops, loaded: true });
  }

  poll() {
    setInterval(() => {
      window.ga && window.ga('send', 'event', 'ping', 'current-activity-check');
    }, 60 * 1000);

    setInterval(() => {
      this.fetchAccount();
    }, 30 * 1000);
  }

  refresh = () => {
    this.fetchUserData();
  };

  render() {
    if (this.state.err) {
      return (<Loading>An error occurred! {this.state.err.message}</Loading>);
    }

    if (!this.state.loaded) {
      return (<Loading>Loading...</Loading>);
    }

    return (
      <div className={styles.root}>
        <div className={cx(styles.hero, this.state.currentActivity && styles.large)}>
          <Header />

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
              Looks like you're not currently playing Destiny. Check back here when you're in a strike.
            </div>
          }

          { !this.props.isAuthenticated &&
            <div className={styles.loginUpsell}>
              <h2 className={styles.heading}>Login for more features</h2>
              <p>
                See the items you've already collected, plus track your currently active strike.
              </p>

              <a className={styles.authLink} href={authUrl}>Authorize with Bungie.net</a>
            </div>
          }
        </div>

        <div className={styles.allActivites}>
          <div className={styles.spacer}>
            <h2 className={styles.heading}>All Strikes</h2>
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

export default DestinyAuthProvider(CurrentStrike);
