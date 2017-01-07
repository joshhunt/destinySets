/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';
import cx from 'classnames';
import { mapValues, uniqBy } from 'lodash';

import * as destiny from 'app/lib/destiny';
import { authUrl } from 'app/lib/destinyAuth';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import Loading from 'app/views/Loading';
import Activity from 'app/components/Activity';
import Header from 'app/components/Header';

import styles from './styles.styl';

const STRIKE_DATA = require('!file-loader!../../../activity-drop-data.json');

class CurrentActivity extends Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    this.doEverything(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated) {
      this.doEverything(newProps);
    }
  }

  doEverything(props) {

    const promises = [
      destiny.get(STRIKE_DATA),
      props.isAuthenticated && destiny.getAllInventoryItems(),
    ];

    Promise.all(promises)
      .then((results) => {
        const [
          activityData,
          playerInventory,
        ] = results;

        const activities = mapValues(activityData.activities, (activity) => {
          const dropList = activityData.dropLists[activity.dropListID]

          const drops = dropList && dropList.items.map((itemHash) => {
            const item = activityData.strikeItemHashes[itemHash];
            return {
              ...item,
              owned: playerInventory && playerInventory.includes(itemHash)
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

        this.setState({ activities, activitiesWithDrops, loaded: true });

        this.getCurrentActivity();

        setInterval(() => {
          this.getCurrentActivity();
        }, 60 * 1000);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ err })
      });
  }

  getCurrentActivity() {
    console.log('running getCurrentActivity');

    if (!this.props.isAuthenticated) {
      return;
    }

    destiny.getCurrentBungieAccount()
      .then((account) => {

        // I guess this doesnt handle people who have multiple destiny accounts? is that possible?
        const currentActivities = account.destinyAccounts[0].characters.map(c => c.currentActivityHash);
        // const currentActivities = [1084620606]
        // const currentActivities = [0]

        // Assuming the first character will be the active one
        if (currentActivities[0] === 0) {
          return;
        }

        const activity = this.state.activities[currentActivities[0]]

        this.setState({
          activity,
        });

      });
  }

  refresh = () => {
    this.doEverything(this.props);
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
        <div className={cx(styles.hero, this.state.activity && styles.large)}>
          <Header />

          { this.state.activity &&
            <div className={styles.currentActivity}>
              <div className={styles.caTop}>
                <h2 className={styles.heading}>Current activity</h2>
                <button className={styles.refreshBtn} onClick={this.refresh}>Refresh</button>
              </div>
              <Activity activity={this.state.activity} drops={this.state.activity.drops} />
            </div>
          }

          { (this.props.isAuthenticated && !this.state.activity) &&
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
              drops={activity.drops}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DestinyAuthProvider(CurrentActivity);
