import React, { Component } from 'react';
import cx from 'classnames';

import styles from './styles.styl';

export default class Item extends Component {
  onMouseEnter = () => {
    const { setPopper, hash, item, inventoryEntry } = this.props;
    setPopper && setPopper(hash, item, inventoryEntry, this.ref);
  };

  onMouseLeave = () => {
    const { setPopper } = this.props;
    setPopper && setPopper(null);
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
              ✅
            </span>
          </div>
        )}
      </div>
    );
  }
}
