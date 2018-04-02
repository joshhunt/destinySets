import React, { Component } from 'react';
import cx from 'classnames';

import Icon from 'app/components/Icon';

import styles from './styles.styl';

export default class Item extends Component {
  onMouseEnter = () => {
    const { setPopper, itemHash } = this.props;
    setPopper && setPopper(itemHash, this.ref);
  };

  onMouseLeave = () => {
    const { setPopper } = this.props;
    setPopper && setPopper(null);
  };

  onClick = () => {
    const { onItemClick, itemHash } = this.props;
    onItemClick && onItemClick(itemHash);
  };

  getRef = ref => {
    this.ref = ref;
  };

  render() {
    const { className, item, inventoryEntry } = this.props;

    if (!item) {
      return <div className={cx(className, styles.placeholder)} />;
    }

    const icon = item.displayProperties.icon || '/img/misc/missing_icon_d2.png';

    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
        ref={this.getRef}
        className={cx(
          className,
          styles.root,
          inventoryEntry && styles.obtained
        )}
      >
        <img
          src={`https://www.bungie.net${icon}`}
          className={styles.image}
          alt=""
        />

        {inventoryEntry && (
          <div className={styles.obtainedTick}>
            <span role="img" aria-label="Obtained">
              <Icon icon="check" />
            </span>
          </div>
        )}
      </div>
    );
  }
}
