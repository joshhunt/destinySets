/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';
import cx from 'classnames';
import { mapValues, uniqBy, clone, toPairs } from 'lodash';

import * as destiny from 'app/lib/destiny';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import Loading from 'app/views/Loading';
import LoginUpsell from 'app/components/LoginUpsell';
import Activity from 'app/components/Activity';
import ActivityList from 'app/components/ActivityList';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';

import styles from './styles.styl';

window.destiny = destiny;

const NO_ACTIVITY_MESSAGE = {
  strike: "Looks like you're not currently in an activity. Check back here next time you're in a strike.",
  raid: "Looks like you're not currently in a raid. Check back here next time you raid."
}

const HEADER_TEXT = {
  strike: 'All Activities',
  raid: 'Other Raids',
}

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
  raid: 'https://destiny.plumbing/en/collections/combinedRaidDrops.json',
};

class Drops extends Component {
  constructor(props) {
    super(props);

    this.variation = props.route.variation;
    this.dataUrl = DATA_URL_FOR_VARIATION[this.variation];

    this.state = {
      loaded: false,
      loadedAccount: false,
      filterCss: '',
    };
  }

  componentDidMount() {
    this.fetchActivityData();

    if (this.props.isAuthenticated) {
      this.fetchUserData();
      this.poll();
    }
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated){
      this.fetchUserData(newProps);
      this.poll();
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
        localStorage.setItem('uid', account.bungieNetUser.membershipId);
        if (window.ga) {
          window.ga('set', 'userId', account.bungieNetUser.membershipId);
        }
        this.destinyAccount = account;
        this.updateState();
        this.setState({ loadedAccount: true });
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
    console.log('starting to poll');
    setInterval(() => {
      window.ga && window.ga('send', 'event', 'ping', 'raid-activity-check');
    }, 60 * 1000);

    setInterval(() => {
      console.log('polling');
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
    const { err, loaded, filterCss, loadedAccount } = this.state;

    if (err) {
      return (<Loading>An error occurred! {this.state.err.message}</Loading>);
    }

    if (!loaded) {
      return (<Loading>Loading...</Loading>);
    }

    const noActivityMessage = NO_ACTIVITY_MESSAGE[this.props.route.variation];

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

          { (this.props.isAuthenticated && loadedAccount && !this.state.currentActivity) &&
            <div className={styles.panel}>
              {noActivityMessage}
            </div>
          }

          { !this.props.isAuthenticated &&
            <LoginUpsell>
              See the items you've already collected, plus track your currently active raid.
            </LoginUpsell>
          }
        </div>

        <ActivityList
          title={HEADER_TEXT[this.props.route.variation]}
          activities={this.state.activitiesWithDrops}
        />

        <Footer />
      </div>
    );
  }
}

export default DestinyAuthProvider(Drops);
