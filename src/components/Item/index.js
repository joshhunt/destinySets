import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
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

import {
  makeItemInventoryEntrySelector,
  makeItemVendorEntrySelector
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
      inventoryEntry,
      extended,
      isMasterwork,
      hideMissing,
      vendorEntry,
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
      itemDef.displayProperties.icon || '/img/misc/missing_icon_d2.png';

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
            {isMasterwork && (
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

            {inventoryEntry && (
              <div className={styles.tick}>
                <Icon icon="check" />
              </div>
            )}

            {!inventoryEntry && vendorEntry && (
              <div className={styles.purchasableTick}>
                <Icon icon="dollar-sign" />
              </div>
            )}
          </div>

          {itemObjectiveProgress !== 0 && (
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
            <div>{itemDef.displayProperties.name}</div>
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
  const itemVendorEntrySelector = makeItemVendorEntrySelector();
  const itemObjectiveProgressSelector = makeItemObjectiveProgressSelector();

  return (state, ownProps) => {
    return {
      itemDef: itemDefSelector(state, ownProps),
      inventoryEntry: itemInventoryEntrySelector(state, ownProps),
      vendorEntry: itemVendorEntrySelector(state, ownProps),
      itemObjectiveProgress: itemObjectiveProgressSelector(state, ownProps)
    };
  };
}

export default connect(mapStateToProps)(Item);
