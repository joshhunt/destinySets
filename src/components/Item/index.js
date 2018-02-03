import React, { Component } from 'react';
import cx from 'classnames';

import ItemTooltip from 'app/components/ItemTooltip';
import { getInventoryStats } from 'app/lib/telemetry';

import ToolTip from 'app/components/ReactPortalTooltip';

import styles from './styles.styl';

const CLASS_TYPE = {
  0: 'Titan',
  1: 'Hunter',
  2: 'Warlock',
};

function isMobile() {
  return (
    window &&
    window.navigator &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent,
    )
  );
}

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

export default class Item extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state !== nextState) {
  //     return true;
  //   }

  //   if (
  //     this.props.hash !== nextProps.hash ||
  //     this.props.$obtained !== nextProps.$obtained
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  state = {
    isTooltipActive: false,
  };

  componentDidMount() {
    getInventoryStats().then(stats => {
      if (!stats) {
        return null;
      }

      this.setState({
        globalItemCount: stats[this.props.item.hash],
      });
    });
  }

  showTooltip = () => {
    if (!this.props.supressTooltip && !isMobile()) {
      this.setState({ isTooltipActive: true });
    }
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

    const globalItemCount = !!this.state.globalItemCount;
    const obtained = !globalItemCount && item.$obtained;
    const dismantled = !globalItemCount && (item.$obtained && item.$dismantled);

    const rootClassName = cx(styles.root, {
      [styles.small]: small,
      [styles.tiny]: tiny,
      [styles.globallyObtained]: globalItemCount,
      [styles.obtained]: obtained,
      [styles.dismantled]: dismantled,
      [styles.forSale]: item.forSale,
    });

    const { name, icon: _icon } = item.displayProperties || { name: 'no name' };
    const icon = _icon || '/img/misc/missing_icon_d2.png';

    return (
      <div onClick={onClick} className={cx(rootClassName, className)}>
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

        {item.inventory && (
          <ToolTip
            style={tooltipStyle}
            active={this.state.isTooltipActive}
            position="right"
            arrow="center"
            parent={`#item${item.hash}`}
            className={styles.tooltip}
            tooltipTimeout={0}
          >
            <ItemTooltip
              key={item.hash}
              item={item}
              globalItemCount={this.state.globalItemCount}
            />
          </ToolTip>
        )}
      </div>
    );
  }
}
