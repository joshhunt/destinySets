import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import cx from 'classnames';
import { connect } from 'react-redux';

import { fetchProfile as fetchProfileAction } from 'app/store/profile';
import { WARLOCK, HUNTER, TITAN, CLASSES } from 'app/lib/destinyEnums';
import Footer from 'app/components/Footer';
import BungieImage from 'app/components/BungieImage';
import Icon from 'app/components/Icon';
import {
  inventorySelector,
  objectiveInstancesSelector
} from 'app/store/selectors';
import Objectives from 'app/components/Objectives';

import s from './styles.styl';

const DRAINED_WARLOCK = 1432280527;
const DRAINED_HUNTER = 2557471208;
const DRAINED_TITAN = 2946324356;

const RENEWED_WARLOCK = 1432280512;
const RENEWED_HUNTER = 2557471207;
const RENEWED_TITAN = 2946324363;

const MAJESTIC_WARLOCK = 1432280513;
const MAJESTIC_HUNTER = 2557471206;
const MAJESTIC_TITAN = 2946324362;

const DRAINED = [DRAINED_WARLOCK, DRAINED_HUNTER, DRAINED_TITAN];
const RENEWED = [RENEWED_WARLOCK, RENEWED_HUNTER, RENEWED_TITAN];
const MAJESTIC = [MAJESTIC_WARLOCK, MAJESTIC_HUNTER, MAJESTIC_TITAN];

const ALL_SETS = [DRAINED, RENEWED, MAJESTIC];

const CLASS_MAP = {
  [DRAINED_WARLOCK]: CLASSES[WARLOCK],
  [DRAINED_HUNTER]: CLASSES[HUNTER],
  [DRAINED_TITAN]: CLASSES[TITAN],
  [RENEWED_WARLOCK]: CLASSES[WARLOCK],
  [RENEWED_HUNTER]: CLASSES[HUNTER],
  [RENEWED_TITAN]: CLASSES[TITAN],
  [MAJESTIC_WARLOCK]: CLASSES[WARLOCK],
  [MAJESTIC_HUNTER]: CLASSES[HUNTER],
  [MAJESTIC_TITAN]: CLASSES[TITAN]
};

const WARLOCK_ICON_NODE = 7761993;
const TITAN_ICON_NODE = 272447096;
const HUNTER_ICON_NODE = 308119616;

const CLASS_ICON_NODE_MAP = {
  [DRAINED_WARLOCK]: WARLOCK_ICON_NODE,
  [DRAINED_HUNTER]: HUNTER_ICON_NODE,
  [DRAINED_TITAN]: TITAN_ICON_NODE,
  [RENEWED_WARLOCK]: WARLOCK_ICON_NODE,
  [RENEWED_HUNTER]: HUNTER_ICON_NODE,
  [RENEWED_TITAN]: TITAN_ICON_NODE,
  [MAJESTIC_WARLOCK]: WARLOCK_ICON_NODE,
  [MAJESTIC_HUNTER]: HUNTER_ICON_NODE,
  [MAJESTIC_TITAN]: TITAN_ICON_NODE
};

const FINISHED_IF_MAP = {
  [DRAINED_WARLOCK]: 381563628,
  [DRAINED_HUNTER]: 2826719795,
  [DRAINED_TITAN]: 808331801,

  [RENEWED_WARLOCK]: 3359671646,
  [RENEWED_HUNTER]: 1597235361,
  [RENEWED_TITAN]: 536106547
};

const _g = (gear, field) =>
  (gear.item && !gear.item.redacted && get(gear.item, field)) ||
  get(gear.collectible, field);

const isCompleted = (gear, objectiveHashes, objectiveInstances) => {
  return (
    gear.hasBeenUpgraded ||
    (objectiveHashes.length > 0 &&
      objectiveHashes.every(objectiveHash => {
        const objInstance = objectiveInstances[objectiveHash];
        return objInstance && objInstance.complete;
      }))
  );
};

const countCompletedGear = (gearSet, objectiveInstances) => {
  return gearSet.filter(gear => {
    const objectiveHashes = get(gear.item, 'objectives.objectiveHashes', []);
    return isCompleted(gear, objectiveHashes, objectiveInstances);
  }).length;
};

function Gear({
  gear,
  objectiveDefs,
  objectiveInstances,
  viewAllObjectives,
  isLoggedIn
}) {
  const icon = _g(gear, 'displayProperties.icon');
  const name = _g(gear, 'displayProperties.name');

  const objectiveHashes = get(gear.item, 'objectives.objectiveHashes', []);

  const obtained = gear.inventory;

  const isObjectivesComplete = isCompleted(
    gear,
    objectiveHashes,
    objectiveInstances
  );

  const isPartiallyCompleted = gear.inventory && !isObjectivesComplete;

  const showDescription = viewAllObjectives || !isObjectivesComplete;
  const showObjectives =
    viewAllObjectives || (gear.inventory && !isObjectivesComplete);

  return (
    <div
      className={cx(
        s.gear,
        obtained && s.obtained,
        !isLoggedIn && s.notLoggedIn,
        isPartiallyCompleted && s.partiallyCompleted
      )}
    >
      <div className={s.iconWell}>
        {isObjectivesComplete && (
          <div className={s.tick}>
            <Icon icon="check" />
          </div>
        )}
        <BungieImage src={icon} className={s.gearIcon} />
      </div>

      <div className={s.gearMain}>
        <strong>{name}</strong>
        {showDescription && (
          <p className={s.gearDescription}>
            <span>{gear.collectible.displayProperties.description}</span>
          </p>
        )}

        {showObjectives && (
          <Objectives
            className={s.objectives}
            objectiveHashes={objectiveHashes}
            objectiveInstances={objectiveInstances}
            objectiveDefs={objectiveDefs}
          />
        )}

        {isObjectivesComplete && (
          <p className={s.gearDescription}>
            {' '}
            <span>
              <em>All objectives complete</em>
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

const REFRESH_INTERVAL = 30 * 1000;

function SolsticeOfHeroes({
  viewData,
  objectiveDefs,
  objectiveInstances,
  fetchProfile,
  isLoggedIn
}) {
  useEffect(() => {
    console.log('effect running');
    const intervalId = window.setInterval(() => {
      console.log('fetch...');
      fetchProfile && fetchProfile();
    }, REFRESH_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, []);

  const [viewAllObjectives, setViewAllObjectives] = useState();

  return (
    <div className={s.page}>
      <h1 className={s.heading}>Solstice of Heroes 2019</h1>

      {!viewData.length ? <p className={s.loading}>Loading...</p> : null}

      <p className={s.explainer}>
        Complete all objectives on all items in a set to unlock the next set.
        Complete objectives on Majestic gear to masterwork it.
      </p>

      {viewData.length > 0 && (
        <button
          className={s.toggleButton}
          onClick={() => setViewAllObjectives(!viewAllObjectives)}
        >
          {viewAllObjectives
            ? 'Relevent objectives only'
            : 'View all objectives'}
        </button>
      )}

      {viewData.map(sets => {
        const baseSet = sets.node;

        return (
          <div className={cx(s.set, s.legendary)}>
            <h2 className={s.heading}>
              {baseSet && baseSet.displayProperties.name}
            </h2>

            <div className={s.setsList}>
              {sets.sets.map(set => {
                return (
                  <div className={s.setForClass}>
                    <h3 className={s.heading}>
                      <div className={s.splitHeading}>
                        <div>
                          <BungieImage
                            src={set.classIcon}
                            className={cx(s.classIcon, set.theClassName)}
                          />

                          {set.theClassName}
                        </div>

                        <div className={s.gearCount}>
                          {countCompletedGear(
                            set.childItems,
                            objectiveInstances
                          )}{' '}
                          / 5
                        </div>
                      </div>
                    </h3>
                    <div>
                      {set.childItems.map(gear => {
                        return (
                          <Gear
                            viewAllObjectives={viewAllObjectives}
                            gear={gear}
                            isLoggedIn={isLoggedIn}
                            objectiveDefs={objectiveDefs}
                            objectiveInstances={objectiveInstances}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <br />

      <Footer>
        Special thanks to{' '}
        <a
          href="https://twitter.com/mr_niris"
          target="_blank"
          rel="noopener noreferrer"
        >
          Niris
        </a>{' '}
        for the incredible design inspiration.{' '}
        <a
          href="https://www.niris.tv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out his stuff.
        </a>
      </Footer>
    </div>
  );
}

function mapStateToProps(state) {
  const inventory = inventorySelector(state) || {};
  const itemDefs = state.definitions.DestinyInventoryItemDefinition;
  const collectibleDefs = state.definitions.DestinyCollectibleDefinition;
  const objectiveDefs = state.definitions.DestinyObjectiveDefinition;
  const presentationNodeDefs =
    state.definitions.DestinyPresentationNodeDefinition;
  // const classDefs = state.definitions.DestinyClassDefinition;

  if (!itemDefs || !presentationNodeDefs || !objectiveDefs) {
    return { viewData: [] };
  }

  const isLoggedIn = !!state.profile.profile;

  // const classDefItems = Object.values(classDefs);

  const viewData = ALL_SETS.map(sets => {
    return {
      node: presentationNodeDefs[sets[0]],
      sets: sets
        .map(presentationNodeHash => {
          const node = presentationNodeDefs[presentationNodeHash];
          if (
            !node ||
            !(
              node.children &&
              node.children.collectibles &&
              node.children.collectibles
            )
          ) {
            return null;
          }

          const upgradedInventoryEntry =
            inventory[FINISHED_IF_MAP[presentationNodeHash]];

          const childItems = node.children.collectibles.map(
            ({ collectibleHash }) => {
              const collectible = collectibleDefs[collectibleHash];
              const item = collectible && itemDefs[collectible.itemHash];

              return {
                hasBeenUpgraded: upgradedInventoryEntry,
                collectible,
                inventory: inventory[collectible.itemHash],
                item
              };
            }
          );

          // const classDef = classDefItems.find(
          //   c => c.classType === CLASS_MAP[presentationNodeHash]
          // );

          const iconNode =
            presentationNodeDefs[CLASS_ICON_NODE_MAP[presentationNodeHash]];

          return {
            // classDef,
            theClassName: CLASS_MAP[presentationNodeHash],
            classIcon: iconNode && iconNode.displayProperties.icon,
            childItems
          };
        })
        .filter(Boolean)
    };
  });

  return {
    viewData,
    objectiveDefs,
    isLoggedIn,
    objectiveInstances: objectiveInstancesSelector(state)
  };
}

export default connect(
  mapStateToProps,
  { fetchProfile: fetchProfileAction }
)(SolsticeOfHeroes);
