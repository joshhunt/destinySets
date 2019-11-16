import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { get, memoize } from 'lodash';
import cx from 'classnames';

import {
  LEGENDARY,
  EXOTIC,
  UNCOMMON,
  RARE,
  COMMON,
  EMBLEM,
  CLASSES,
  MASTERWORK_FLAG
} from 'app/lib/destinyEnums';
import Icon from 'app/components/Icon';
import BungieImage from 'app/components/BungieImage';

import {
  makeItemInventoryEntrySelector,
  makeBetterItemVendorEntrySelector,
  makeItemPresentationSelector
} from 'app/store/selectors';

import {
  makeItemDefSelector,
  makeItemObjectiveProgressSelector
} from './selectors';

import masterworkOutline from './masterwork-outline.png';
import styles from './styles.styl';

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
    return TIER_COLOR[item.inventory.tierTypeHash];
  }
}

const isMasterwork = inventoryEntry => {
  if (!inventoryEntry) {
    return false;
  }

  return !!inventoryEntry.instances.find(instance => {
    return instance.itemState & MASTERWORK_FLAG;
  });
};

export const ITEM_ELEMENT_CLASS_NAME = {
  // Stat type hashes
  3578062600: styles.itemAny,
  3779394102: styles.itemArc,
  3344745325: styles.itemSolar,
  2399985800: styles.itemVoid
};

class Item extends PureComponent {
  onMouseEnter = () => {
    const { setPopper, itemHash } = this.props;
    !IS_MOBILE && setPopper && setPopper(itemHash, this.ref);
  };

  onMouseLeave = () => {
    const { setPopper } = this.props;
    setPopper && setPopper(null);
  };

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
    const {
      className,
      itemDef,
      investmentStatItem,
      displayItem,
      inventoryEntry,
      extended,
      hideMissing,
      richVendorEntries,
      itemObjectiveProgress,
      modStyle
    } = this.props;

    const bgColor = getItemColor(itemDef);
    const overlayImage = get(investmentStatItem, 'displayProperties.icon');

    if (!itemDef) {
      if (hideMissing) {
        return null;
      }
      return (
        <div
          data-item-hash={this.props.itemHash}
          className={cx(className, styles.placeholder)}
          style={{ backgroundColor: bgColor }}
        />
      );
    }

    const icon =
      displayItem.displayProperties.icon || '/img/misc/missing_icon_d2.png';

    const firstVendorEntry = richVendorEntries && richVendorEntries[0];
    const firstSaleCurrency = firstVendorEntry && firstVendorEntry.costs[0];

    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
        ref={this.getRef}
        className={cx(
          className,
          styles.root,
          styles[itemDef.uiItemDisplayStyle],
          modStyle && styles.modStyle,
          inventoryEntry && inventoryEntry.obtained && styles.obtained,
          inventoryEntry && inventoryEntry.checklisted && styles.checklisted,
          inventoryEntry &&
            (inventoryEntry.dismantled || inventoryEntry.manuallyObtained) &&
            styles.dismantled
        )}
      >
        <div className={styles.imageWrapper}>
          <div className={styles.fadeOut}>
            {isMasterwork(inventoryEntry) && (
              <img
                className={styles.overlay}
                src={masterworkOutline}
                alt="Masterwork"
              />
            )}

            {overlayImage && (
              <BungieImage
                className={styles.overlay}
                alt=""
                src={overlayImage}
              />
            )}

            <img
              src={`https://www.bungie.net${icon}`}
              className={cx(
                styles.image,
                ITEM_ELEMENT_CLASS_NAME[
                  investmentStatItem && investmentStatItem.hash
                ]
              )}
              style={modStyle ? null : { backgroundColor: bgColor }}
              alt=""
            />

            {inventoryEntry && (
              <div className={styles.tick}>
                <Icon icon="check" />
              </div>
            )}

            {!inventoryEntry && firstVendorEntry && firstSaleCurrency && (
              <div
                className={cx(
                  styles.purchasable,
                  firstSaleCurrency.itemHash === 1022552290 &&
                    styles.legendaryShards
                )}
              >
                <BungieImage
                  className={styles.currency}
                  src={firstSaleCurrency.item.displayProperties.icon}
                />
              </div>
            )}
          </div>

          {itemObjectiveProgress !== 0 && itemObjectiveProgress !== 1 && (
            <div
              className={cx(
                styles.objectiveOverlay,
                itemObjectiveProgress === 1 && styles.objectivesComplete
              )}
            >
              <div
                className={styles.objectiveTrack}
                style={{
                  width: `${itemObjectiveProgress * 100}%`
                }}
              />
            </div>
          )}
        </div>

        {extended && (
          <div className={styles.extended}>
            <div>{displayItem.displayProperties.name}</div>
            <div className={styles.itemType}>
              {CLASSES[itemDef.classType]}{' '}
              {itemDef.itemTypeName || itemDef.itemTypeDisplayName}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const makeItemHashObj = memoize(itemHash => ({ itemHash }));

function mapStateToProps() {
  const itemDefSelector = makeItemDefSelector();
  const itemInventoryEntrySelector = makeItemInventoryEntrySelector();
  const betterItemVendorEntrySelector = makeBetterItemVendorEntrySelector();
  const itemObjectiveProgressSelector = makeItemObjectiveProgressSelector();
  const itemPresentationSelector = makeItemPresentationSelector();

  return (state, ownProps) => {
    const displayItem = itemPresentationSelector(state, ownProps);

    const itemDef = itemDefSelector(state, ownProps);
    const statDefs = state.definitions.DestinyStatDefinition || {};

    const investmentStatItem = ((itemDef && itemDef.investmentStats) || [])
      .map(is => {
        return statDefs[is.statTypeHash];
      })
      .filter(Boolean)[0];

    const vendorEntry = betterItemVendorEntrySelector(state, ownProps);

    const richVendorEntries = vendorEntry.map(ve => ({
      ...ve,
      costs: ve.costs.map(cost => ({
        ...cost,
        item: itemDefSelector(state, makeItemHashObj(cost.itemHash))
      }))
    }));

    return {
      itemDef,
      inventoryEntry: itemInventoryEntrySelector(state, ownProps),
      investmentStatItem,
      richVendorEntries,
      itemObjectiveProgress: itemObjectiveProgressSelector(state, ownProps),
      displayItem,
      cool: 'yes'
    };
  };
}

export default connect(mapStateToProps)(Item);
