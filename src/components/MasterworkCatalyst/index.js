import React, { Component } from 'react';
import cx from 'classnames';

import {
  LEGENDARY,
  EXOTIC,
  UNCOMMON,
  RARE,
  COMMON,
  EMBLEM,
  CLASSES
} from 'app/lib/destinyEnums';

import Icon from 'app/components/Icon';
import BungieImage from 'app/components/BungieImage';
import ItemBanner from 'app/components/ItemBanner';

import s from './styles.styl';

const TIER_COLOR = {
  [EXOTIC]: '#ceae33',
  [LEGENDARY]: '#522f65',
  [UNCOMMON]: '#366f3c',
  [RARE]: '#5076a3',
  [COMMON]: '#c3bcb4'
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

const IS_MOBILE = isMobile();

function getItemColor(item) {
  if (!item) {
    return null;
  }

  const { red, green, blue } = item.backgroundColor || {
    red: 0,
    green: 0,
    blue: 0
  };
  const luminosity = red + green + blue;
  if (
    (item.itemCategoryHashes || []).includes(EMBLEM) &&
    luminosity > 10 &&
    luminosity < 735
  ) {
    return `rgb(${red}, ${green}, ${blue})`;
  } else {
    // use rarity color
    return TIER_COLOR[item.inventory.tierTypeHash];
  }
}

export default class MasterworkCatalyst extends Component {
  onClick = ev => {
    const { onClick, onItemClick, itemHash } = this.props;
    if (onClick) {
      onClick(ev);
      return;
    }

    onItemClick && onItemClick(itemHash);
  };

  getRef = ref => {
    this.ref = ref;
  };

  render() {
    const { className, item } = this.props;
    const bgColor = getItemColor(item);

    if (!item) {
      return (
        <div
          className={cx(className, s.placeholder)}
          style={{ backgroundColor: bgColor }}
        />
      );
    }

    return (
      <div
        onClick={this.onClick}
        ref={this.getRef}
        className={cx(className, s.root)}
      >
        <BungieImage className={s.screenshot} src={item.screenshot} />
        <ItemBanner item={item} />
      </div>
    );
  }
}
