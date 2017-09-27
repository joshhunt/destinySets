import React, { Component } from 'react';
import cx from 'classnames';

import ItemTooltip from 'app/components/ItemTooltip';

import ToolTip from 'react-portal-tooltip';

import styles from './styles.styl';

const tooltipStyle = {
  style: {
    background: '#20262d',
    padding: 0,
    boxShadow: '0px 2px 3px rgba(0,0,0,.5)',
  },
  arrowStyle: {
    color: '#20262d',
    borderColor: false,
  },
};

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

export default class Item extends Component {
  state = {
    isTooltipActive: false,
  };

  showTooltip = () => {
    this.setState({ isTooltipActive: true });
  };
  hideTooltip = () => {
    this.setState({ isTooltipActive: false });
  };

  render() {
    const { className, onClick, item, dev, small, tiny } = this.props;

    const dtrLink = `http://db.destinytracker.com/d2/en/items/${item.hash}`;

    const dtrProps = {
      href: dtrLink,
      target: '_blank',
      'data-dtr-tooltip': 'no-show',
    };

    const rootClassName = cx(styles.root, {
      [styles.small]: small,
      [styles.tiny]: tiny,
      [styles.obtained]: item.$obtained,
      [styles.forSale]: item.forSale,
    });

    const { name, icon: _icon } = item.displayProperties;
    const icon = _icon || '/img/misc/missing_icon_d2.png';

    return (
      <div
        onClick={onClick}
        className={cx(rootClassName, className)}
        data-class={item.dClass}
        id={`item${item.hash}`}
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
      >
        <div className={styles.accessory}>
          <a className={styles.link} {...dtrProps}>
            <img
              className={styles.image}
              src={`https://www.bungie.net${icon}`}
              role="presentation"
            />
          </a>
        </div>

        <div className={styles.main}>
          <div className={styles.name}>
            <a className={styles.link} {...dtrProps}>
              {name}
            </a>
          </div>
          <div className={styles.type}>
            {dev ? (
              item.itemHash
            ) : (
              item.itemTypeName || item.itemTypeDisplayName
            )}
          </div>
        </div>

        <ToolTip
          style={tooltipStyle}
          active={this.state.isTooltipActive}
          position="right"
          arrow="center"
          parent={`#item${item.hash}`}
          className={styles.tooltip}
        >
          <ItemTooltip item={item} />
        </ToolTip>
      </div>
    );
  }
}
