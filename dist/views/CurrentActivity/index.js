/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';
import { mapValues, uniqBy } from 'lodash';

import Loading from 'app/views/Loading';
import Activity from 'app/components/Activity';
import * as destiny from 'app/lib/destiny';

import styles from './styles.styl';

const STRIKE_DATA = require('!file-loader!../../../activity-drop-data.json');

export default class CurrentActivity extends Component {
  state = {
    loaded: false,
  };

  componentDidMount() {

    const promises = [
      destiny.get(STRIKE_DATA),
      destiny.getAllInventoryItems(),
    ];

    Promise.all(promises)
      .then((results) => {
        const [
          activityData,
          playerInventory,
        ] = results;

        // this.activityData = activityData;
        this.playerInventory = playerInventory;

        const activities = mapValues(activityData.activities, (activity) => {
          const dropList = activityData.dropLists[activity.dropListID]

          const drops = dropList && dropList.items.map((itemHash) => {
            const item = activityData.strikeItemHashes[itemHash];
            return {
              ...item,
              owned: this.playerInventory.includes(itemHash)
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

        this.setState({ activities, activitiesWithDrops });

        this.getCurrentActivity();

        // setInterval(() => {
        //   this.getCurrentActivity();
        // }, 5 * 1000);
      });
  }

  getCurrentActivity() {
    this.setState({ loaded: false });
    console.log('running getCurrentActivity');

    // destiny.getCurrentBungieAccount()
    //   .then((account) => {

        // I guess this doesnt handle people who have multiple destiny accounts? is that possible?
        // const currentActivities = account.destinyAccounts[0].characters.map(c => c.currentActivityHash);
        // const currentActivities = [1084620606]
        const currentActivities = [0]

        // Assuming the first character will be the active one
        if (currentActivities[0] === 0) {
          return this.setState({ loaded: true });
        }

        const activity = this.state.activities[currentActivities[0]]

        this.setState({
          activity,
          loaded: true,
        });

      // });
  }

  render() {
    if (!this.state.loaded) {
      return (<Loading>Loading...</Loading>);
    }

    return (
      <div className={styles.root}>

        { this.state.activity &&
          <div className={styles.currentActivity}>
            <div>
              <h2 className={styles.heading}>Current activity</h2>
              <Activity activity={this.state.activity} drops={this.state.activity.drops} />
            </div>
          </div>
        }

        { !this.state.activity &&
          <div className={styles.currentActivityInfo}>
            <p>
              Looks like youre not currently in an activity. Check back here when you're playing a strike.
            </p>
          </div>
        }

        <h2 className={styles.heading}>All Strikes</h2>
        <div className={styles.allActivites}>
          { this.state.activitiesWithDrops.map((activity) => {
          return <Activity className={styles.activity} activity={activity} drops={activity.drops} />
          }) }
        </div>
      </div>
    );
  }
}
