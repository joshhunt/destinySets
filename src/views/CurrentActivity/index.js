/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';
import vibrant from 'node-vibrant';
// import cx from 'classnames';

import Loading from 'app/views/Loading';
import Activity from 'app/components/Activity';
import * as destiny from 'app/lib/destiny';

import styles from './styles.styl';

const ARMOUR_DEFS_URL = 'https://destiny.plumbing/new/en/Armor.json';
const WEAPON_DEFS_URL = 'https://destiny.plumbing/new/en/Weapon.json';
const ACTIVITY_DEFS_URL = 'https://destiny.plumbing/new/en/DestinyActivityDefinition.json';
const ACTIVITY_TYPES_DEFS_URL = 'https://destiny.plumbing/new/en/DestinyActivityTypeDefinition.json';

const themeImg = require('app/the_shadow_thief.jpg');

class CurrentActivity extends Component {
  state = {
    loaded: false,
  };

  componentDidMount() {

    const promises = [
      destiny.get(ARMOUR_DEFS_URL),
      destiny.get(WEAPON_DEFS_URL),
      destiny.get(ACTIVITY_DEFS_URL),
      destiny.get(ACTIVITY_TYPES_DEFS_URL),
    ];

    Promise.all(promises)
      .then((results) => {
        const [
          armourDefs,
          weaponDefs,
          activityDefs,
          activityTypeDefs,
        ] = results;

        this.itemDefs = { ...armourDefs, ...weaponDefs };
        this.activityDefs = activityDefs;
        this.activityTypeDefs = activityTypeDefs;

        this.getCurrentActivity();
      });
  }

  getCurrentActivity() {
    this.setState({ loaded: false });

    destiny.getCurrentBungieAccount()
      .then((account) => {
        // I guess this doesnt handle people who have multiple destiny accounts? is that possible?
        // const currentActivities = account.destinyAccounts[0].characters.map(c => c.currentActivityHash);
        const currentActivities = [4227723347]

        // Assuming the first character will be the active one
        if (currentActivities[0] !== 0) {
          const baseActivity = this.activityDefs[currentActivities[0]];

          const type = this.activityTypeDefs[baseActivity.activityTypeHash.toString()];
          const img = `https://destinysets.imgix.net${baseActivity.pgcrImage}`;

          vibrant.from(img).getPalette((err, colors) => {
            console.log({ err, colors })

            const [r, g, b] = colors.Muted.rgb;

            const activity = {
              ...baseActivity,
              $type: type,
            };

            this.setState({
              activity,
              loaded: true,
              pageColor: `rgba(${r}, ${g}, ${b}, 1.5)`
            });

          })
        } else {
          this.setState({ loaded: true });
        }

      });
  }

  render() {
    if (!this.state.loaded) {
      return (<Loading>Loading...</Loading>);
    }

    if (!this.state.activity) {
      return (<Loading>Not currently in an activity</Loading>);
    }

    return (
      <div className={styles.root} style={{backgroundColor: this.state.pageColor}}>
        <Activity activity={this.state.activity} />
      </div>
    );
  }
}

export default CurrentActivity;
