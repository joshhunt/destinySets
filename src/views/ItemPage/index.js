import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import {
  makeItemSelector,
  makeItemStatsSelector,
  statDefsSelector
} from 'app/store/selectors';
import BungieImage from 'app/components/BungieImage';
import ItemStats from 'app/components/ItemStats';
import ItemAttributes from 'app/components/ItemAttributes';
import Icon from 'app/components/Icon';

import s from './styles.styl';

const FORCE_SKELETONS = false;

function SkeletonText({ content }) {
  if (FORCE_SKELETONS || !content) {
    return <div className={s.skeleton} />;
  }

  return content;
}

function SkeletonImage({ src, className }) {
  if (FORCE_SKELETONS || !src) {
    return <div className={cx(s.skeletonImage, className)} />;
  }

  return <BungieImage className={className} src={src} />;
}

// TODO: not localised properly
const WEAPON_SLOT = {
  1498876634: 'Kinetic',
  2465295065: 'Energy',
  953998645: 'Power'
};

function ItemPage({ item, stats, statDefs, collectible, itemHash }) {
  const weaponSlot =
    item &&
    item.equippingBlock &&
    WEAPON_SLOT[item.equippingBlock.equipmentSlotTypeHash];

  return (
    <div className={s.root}>
      <div className={s.pageFlex}>
        <div className={s.nameIconLockup}>
          <SkeletonImage
            className={s.itemIcon}
            src={item && item.displayProperties && item.displayProperties.icon}
          />

          <div className={s.nameIconLockupMain}>
            <h1 className={s.itemName}>
              <SkeletonText content={item && item.displayProperties.name} />
            </h1>

            <div className={s.itemTypeName}>
              <SkeletonText content={item && item.itemTypeAndTierDisplayName} />
              {weaponSlot && ` - ${weaponSlot}`}
            </div>
          </div>
        </div>

        <div className={s.itemMain}>
          {item && <ItemAttributes className={s.itemAttributes} item={item} />}

          {item &&
            item.displayProperties.description && (
              <p className={s.description}>
                {item.displayProperties.description}
              </p>
            )}

          {collectible &&
            collectible.sourceString &&
            collectible.sourceString.length > 1 && (
              <p className={s.itemSource}>
                <Icon name="info-circle" /> {collectible.sourceString}
              </p>
            )}

          {stats &&
            statDefs && (
              <ItemStats
                className={s.stats}
                stats={stats}
                statDefs={statDefs}
              />
            )}
        </div>

        <div className={s.itemExtra}>
          <BungieImage className={s.screenshot} src={item && item.screenshot} />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps() {
  const itemSelector = makeItemSelector();
  const itemStatsSelector = makeItemStatsSelector();

  return (state, ownProps) => {
    const itemDef = itemSelector(state, ownProps);
    return {
      item: itemDef,
      stats: itemStatsSelector(state, ownProps),
      statDefs: statDefsSelector(state),
      collectible:
        state.definitions.DestinyCollectibleDefinition &&
        state.definitions.DestinyCollectibleDefinition[
          itemDef && itemDef.collectibleHash
        ]
    };
  };
}

export default connect(mapStateToProps)(ItemPage);
