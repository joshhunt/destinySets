import React, { Component } from 'react';
import cx from 'classnames';
import { shallowCompareWithoutFunctions } from 'shallow-compare-without-functions';

import ItemTooltip from 'app/components/ItemTooltip';

import ToolTip from 'app/components/ReactPortalTooltip';

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

const tooltipStyle = {
  style: {
    background: '#20262d',
    padding: 0,
    boxShadow: '0px 2px 3px rgba(0,0,0,.5)'
  },
  arrowStyle: {
    color: '#20262d',
    borderColor: false
  }
};

export default class Item extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate = shallowCompareWithoutFunctions(
      this,
      nextProps,
      nextState
    );

    const nextItem = nextProps.item;
    const item = this.props.item;

    const itemChanged =
      item.$inventory !== nextItem.$inventory ||
      item.$dismantled !== nextItem.$dismantled ||
      item.$obtained !== nextItem.$obtained ||
      item.hash !== nextItem.hash;

    if (shouldUpdate || itemChanged) {
      return true;
    } else {
      return false;
    }
  }

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

  render() {
    const { className, onClick, item, dev, small, tiny } = this.props;

    const dtrLink = `http://db.destinytracker.com/d2/en/items/${item.hash}`;

    const dtrProps = {
      href: dtrLink,
      target: '_blank',
      'data-dtr-tooltip': 'no-show'
    };

    const rootClassName = cx(styles.root, {
      [styles.small]: small,
      [styles.tiny]: tiny,
      [styles.obtained]: item.$obtained,
      [styles.dismantled]: item.$obtained && item.$dismantled,
      [styles.forSale]: item.forSale
    });

    const { name, icon: _icon } = item.displayProperties;
    const icon = _icon || '/img/misc/missing_icon_d2.png';

    return (
      <div
        onClick={onClick}
        className={cx(rootClassName, className)}
        data-class={item.dClass}
      >
        <div className={styles.accessory}>
          <a className={styles.link} {...dtrProps}>
            <img
              className={styles.image}
              src={`https://www.bungie.net${icon}`}
              role="presentation"
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

        <ToolTip
          style={tooltipStyle}
          active={this.state.isTooltipActive}
          position="right"
          arrow="center"
          parent={`#item${item.hash}`}
          className={styles.tooltip}
          tooltipTimeout={0}
        >
          <ItemTooltip key={item.hash} item={item} />
        </ToolTip>
      </div>
    );
  }
}
