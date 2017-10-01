import React, { Component } from 'react';
import cx from 'classnames';

import styles from './styles.styl';

class FancyImage extends Component {
  state = {
    loaded: false,
  };

  onLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { className, ...props } = this.props;
    const styles = {
      opacity: 0,
      transition: 'opacity 300ms ease-in-out',
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
  const tier = (item.inventory.tierTypeName || '').toLowerCase();
  const icon = item.displayProperties.icon || '/img/misc/missing_icon_d2.png';

  return (
    <div className={cx(styles.tooltip, styles[tier])}>
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
      </div>
    </div>
  );
}
