import React, { Component } from 'react';
import cx from 'classnames';

import styles from './styles.styl';

import {
  LEGENDARY,
  EXOTIC,
  UNCOMMON,
  RARE,
  COMMON
} from 'app/views/DataExplorer/definitionSources';

const TIER_STYLE = {
  [EXOTIC]: styles.exotic,
  [LEGENDARY]: styles.legendary,
  [UNCOMMON]: styles.common,
  [RARE]: styles.rare,
  [COMMON]: styles.basic
};

const LOCATION_MAP = {
  characterEquipment: 'Equipped',
  characterInventory: 'Inventory',
  profileInventory: 'In vault',
  profileKiosk: 'Profile kiosk',
  characterKiosk: 'Character kiosk'
};

class FancyImage extends Component {
  state = {
    loaded: false
  };

  onLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { className, ...props } = this.props;
    const styles = {
      opacity: 0,
      transition: 'opacity 300ms ease-in-out'
    };

    if (this.state.loaded) {
      styles.opacity = 1;
    }

    return (
      <img
        className={cx(className)}
        style={styles}
        {...props}
        onLoad={this.onLoad}
      />
    );
  }
}

export default function ItemTooltip({ item }) {
  const tier = item.inventory.tierTypeHash || '';
  const icon = item.displayProperties.icon || '/img/misc/missing_icon_d2.png';

  return (
    <div className={cx(styles.tooltip, TIER_STYLE[tier])}>
      <div className={styles.header}>
        <div className={styles.img}>
          <FancyImage src={`https://bungie.net${icon}`} />
        </div>
        <div className={styles.headerContent}>
          <div className={styles.title}>{item.displayProperties.name}</div>
          <div className={styles.subtitle}>
            <span>{item.itemTypeDisplayName}</span>
            <span>{item.inventory.tierTypeName}</span>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.description}>
          <em>{item.displayProperties.description}</em>
        </p>

        {item.screenshot && (
          <div className={styles.screenshotWrapper}>
            <FancyImage
              className={styles.screenshot}
              src={`https://bungie.net${item.screenshot}`}
            />
          </div>
        )}

        {item.$inventory && (
          <div className={styles.inventory}>
            <ul>
              {item.$inventory.map((inv, i) => (
                <li key={i}>
                  {LOCATION_MAP[inv.$location] || 'unknown location'}{' '}
                  {inv.$characterHash && `on character ${inv.$characterHash}`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
