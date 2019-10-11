import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
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
  makeItemVendorEntrySelector,
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

const ROLE_PERKS = [
  326979294,
  911695907,
  3047801520,
  1233336930,
  2575042148,
  3588389153,
  548249507,
  2684355120,
  4258500190,
  149961592,
  446122123,
  1263189958
];

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
      roleDef,
      displayItem,
      inventoryEntry,
      extended,
      hideMissing,
      richVendorEntries,
      itemObjectiveProgress
    } = this.props;

    const bgColor = getItemColor(itemDef);

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

            <img
              src={`https://www.bungie.net${icon}`}
              className={styles.image}
              style={{ backgroundColor: bgColor }}
              alt=""
            />

            {roleDef && (
              <BungieImage
                src={roleDef.displayProperties.icon}
                className={styles.role}
              />
            )}

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

function mapStateToProps() {
  const itemDefSelector = makeItemDefSelector();
  const itemInventoryEntrySelector = makeItemInventoryEntrySelector();
  const betterItemVendorEntrySelector = makeBetterItemVendorEntrySelector();
  const itemObjectiveProgressSelector = makeItemObjectiveProgressSelector();
  const itemPresentationSelector = makeItemPresentationSelector();

  return (state, ownProps) => {
    const displayItem = itemPresentationSelector(state, ownProps);

    const itemDef = itemDefSelector(state, ownProps);

    const firstPerk =
      itemDef && itemDef.sockets && itemDef.sockets.socketEntries[0];
    const roleHash =
      firstPerk &&
      ROLE_PERKS.includes(firstPerk.singleInitialItemHash) &&
      firstPerk.singleInitialItemHash;
    const roleDef =
      state.definitions.DestinyInventoryItemDefinition &&
      state.definitions.DestinyInventoryItemDefinition[roleHash];

    const vendorEntry = betterItemVendorEntrySelector(state, ownProps);

    const richVendorEntries = vendorEntry.map(ve => ({
      ...ve,
      costs: ve.costs.map(cost => ({
        ...cost,
        item: itemDefSelector(state, {
          itemHash: cost.itemHash
        })
      }))
    }));

    return {
      itemDef,
      roleDef,
      inventoryEntry: itemInventoryEntrySelector(state, ownProps),
      richVendorEntries,
      itemObjectiveProgress: itemObjectiveProgressSelector(state, ownProps),
      displayItem,
      cool: 'yes'
    };
  };
}

export default connect(mapStateToProps)(Item);
