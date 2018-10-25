import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { Tooltip } from 'react-tippy';

import {
  makeItemSelector,
  makeItemStatsSelector,
  statDefsSelector,
  makeItemInstanceSelector
} from 'app/store/selectors';
import BungieImage from 'app/components/BungieImage';
import ItemStats from 'app/components/ItemStats';
import ItemAttributes from 'app/components/ItemAttributes';
import Icon from 'app/components/Icon';

import 'react-tippy/dist/tippy.css';

import { makePerksSelector } from './selectors';

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

function Perk({ className, perk }) {
  if (!perk) {
    return null;
  }

  return (
    <Tooltip
      html={
        <Fragment>
          <div className={s.tooltipPerkName}>
            <BungieImage
              src={perk.displayProperties.icon}
              className={s.tooltipPerkIcon}
            />{' '}
            {perk.displayProperties.name}
          </div>
          <span className={s.tooltipPerkDescription}>
            {perk.displayProperties.description}
          </span>
        </Fragment>
      }
      position="top"
      arrow
      followCursor
    >
      <div className={className}>
        <BungieImage className={s.perkIcon} src={perk.displayProperties.icon} />
        <div className={s.perkName}>{perk.displayProperties.name}</div>
      </div>
    </Tooltip>
  );
}

function Perks({ perks }) {
  return (
    <div className={s.perks}>
      {perks &&
        perks.map((socket, index) => (
          <div className={s.socket}>
            {socket.mainPerk && (
              <Perk perk={socket.mainPerk} className={s.perk} />
            )}

            {socket.altPerks.map(perk => (
              <Perk
                perk={perk.plugItem}
                className={perk.enabled ? s.altPerkEnabled : s.altPerk}
              />
            ))}

            {socket.randomPerks && (
              <div className={s.randomRolls}>
                <div className={s.randomRollTitle}>Random perks:</div>
                {socket.randomPerks.map(perk => (
                  <Perk perk={perk} className={s.randomPerk} />
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

function ItemPage({
  item,
  stats,
  statDefs,
  collectible,
  perks,
  itemHash,
  instances
}) {
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

        <div className={s.perksSection}>
          <h2>Perks</h2>

          {perks && <Perks perks={perks} />}

          <h2>Instances</h2>
          {instances.map((instance, index) => (
            <div key={index}>
              {perks && <Perks perks={instance.$perks} />}
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps() {
  const itemSelector = makeItemSelector();
  const itemStatsSelector = makeItemStatsSelector();
  const perksSelector = makePerksSelector();
  const itemInstanceSelector = makeItemInstanceSelector();

  return (state, ownProps) => {
    const item = itemSelector(state, ownProps);
    const itemDefs = state.definitions.DestinyInventoryItemDefinition;

    const { perks, socketCategory } = perksSelector(state, ownProps);

    const instances = itemInstanceSelector(state, ownProps);
    const instancesWithPerks =
      instances &&
      instances.map(instance => {
        // debugger;
        return {
          ...instance,
          $perks:
            socketCategory &&
            socketCategory.socketIndexes.map(socketIndex => {
              const socket = instance.$sockets[socketIndex];
              return {
                // mainPerk: itemDefs[socket.plugHash],
                altPerks: socket.reusablePlugs.map(plug => ({
                  enabled: socket.plugHash === plug.plugItemHash,
                  plugItem: itemDefs[plug.plugItemHash]
                }))
                // altPerks: socket.reusablePlugItems
                //   .filter(
                //     ({ plugItemHash }) =>
                //       socket.singleInitialItemHash !== plugItemHash
                //   )
                //   .map(({ plugItemHash }) => itemDefs[plugItemHash])
              };
            })
        };
      });

    return {
      item: item,
      stats: itemStatsSelector(state, ownProps),
      statDefs: statDefsSelector(state),
      perks,
      instances: instancesWithPerks,
      collectible:
        state.definitions.DestinyCollectibleDefinition &&
        state.definitions.DestinyCollectibleDefinition[
          item && item.collectibleHash
        ]
    };
  };
}

export default connect(mapStateToProps)(ItemPage);
