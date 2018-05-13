import React, { Component } from 'react';
import cx from 'classnames';

import styles from './styles.styl';

const CLASS_TYPE = {
  0: 'Titan',
  1: 'Hunter',
  2: 'Warlock'
};

function isMobile() {
  return (
    window &&
    window.navigator &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    )
  );
}

export default class Item extends Component {
  state = {
    isTooltipActive: false
  };

  showTooltip = () => {
    if (!this.props.supressTooltip && !isMobile()) {
      this.setState({ isTooltipActive: true });
    }
  };
  hideTooltip = () => {
    this.setState({ isTooltipActive: false });
  };

  onClick = ev => {
    this.props.onClick && this.props.onClick(ev, this.props.item);
  };

  render() {
    const { className, item, dev, small, tiny } = this.props;

    const dtrLink = `http://db.destinytracker.com/d2/en/items/${item.hash}`;

    const dtrProps = {
      href: dtrLink,
      target: '_blank',
      'data-dtr-tooltip': 'no-show'
    };

    const globalItemCount = !!this.state.globalItemCount;
    const obtained = !globalItemCount && item.$obtained;
    const dismantled = !globalItemCount && (item.$obtained && item.$dismantled);

    const rootClassName = cx(styles.root, {
      [styles.small]: small,
      [styles.tiny]: tiny,
      [styles.globallyObtained]: globalItemCount,
      [styles.obtained]: obtained,
      [styles.dismantled]: dismantled,
      [styles.forSale]: item.forSale
    });

    const { name, icon: _icon } = item.displayProperties || { name: 'no name' };
    const icon = _icon || '/img/misc/missing_icon_d2.png';

    return (
      <div
        onClick={this.onClick}
        className={cx(rootClassName, className)}
        data-class={item.dClass}
      >
        {globalItemCount && (
          <div className={styles.countOverlay}>
            {Math.round(this.state.globalItemCount * 100)}%
          </div>
        )}

        <div className={styles.accessory}>
          <a className={styles.link} {...dtrProps}>
            <img
              className={styles.image}
              src={`https://www.bungie.net${icon}`}
              alt=""
              id={`item${item.hash}`}
              onMouseEnter={this.showTooltip}
              onMouseLeave={this.hideTooltip}
            />
          </a>
        </div>

        {!small && (
          <div className={styles.main}>
            <div className={styles.name}>
              <a className={styles.link} {...dtrProps}>
                {name}
              </a>
            </div>
            <div className={styles.type}>
              {CLASS_TYPE[item.classType]}{' '}
              {dev
                ? item.itemHash
                : item.itemTypeName || item.itemTypeDisplayName}
            </div>
          </div>
        )}
      </div>
    );
  }
}
