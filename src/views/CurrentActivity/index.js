/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';

import Loading from 'app/views/Loading';
import Activity from 'app/components/Activity';
import * as destiny from 'app/lib/destiny';

import styles from './styles.styl';

const STRIKE_DATA = require('!file-loader!../../../activity-drop-data.json');

class CurrentActivity extends Component {
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

        this.activityData = activityData;
        this.playerInventory = playerInventory;

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
        const currentActivities = [1084620606]

        // Assuming the first character will be the active one
        if (currentActivities[0] === 0) {
          this.setState({ loaded: true });
        }

        const activity = this.activityData.activities[currentActivities[0]]
        const dropList = this.activityData.dropLists[activity.dropListID]
        const drops = dropList && dropList.items.map((itemHash) => {
          const item = this.activityData.strikeItemHashes[itemHash];
          return {
            ...item,
            owned: this.playerInventory.includes(itemHash)
          }
        });

        this.setState({
          activity,
          drops,
          loaded: true,
        });

      // });
  }

  render() {
    if (!this.state.loaded) {
      return (<Loading>Loading...</Loading>);
    }

    if (!this.state.activity) {
      return (<Loading>Not currently in an activity</Loading>);
    }

    return (
      <div className={styles.root}>
        <Activity activity={this.state.activity} drops={this.state.drops} />
      </div>
    );
  }
}

export default CurrentActivity;
