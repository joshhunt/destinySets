import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import cx from 'classnames';
import { connect } from 'react-redux';

import { fetchProfile as fetchProfileAction } from 'app/store/profile';
import { HUNTER, TITAN, WARLOCK, CLASSES } from 'app/lib/destinyEnums';
import Footer from 'app/components/Footer';
import BungieImage from 'app/components/BungieImage';
import Icon from 'app/components/Icon';
import {
  inventorySelector,
  objectiveInstancesSelector
} from 'app/store/selectors';
import Objectives from 'app/components/Objectives';

import s from './styles.styl';

const RENEWED_HUNTER = 3270435520;
const RENEWED_TITAN = 689787436;
const RENEWED_WARLOCK = 2223917119;

const MAJESTIC_HUNTER = 3270435523;
const MAJESTIC_TITAN = 689787439;
const MAJESTIC_WARLOCK = 2223917116;

const MAGNIFICENT_HUNTER = 3270435522;
const MAGNIFICENT_TITAN = 689787438;
const MAGNIFICENT_WARLOCK = 2223917117;

const RENEWED = [RENEWED_HUNTER, RENEWED_TITAN, RENEWED_WARLOCK];
const MAJESTIC = [MAJESTIC_HUNTER, MAJESTIC_TITAN, MAJESTIC_WARLOCK];
const MAGNIFICENT = [
  MAGNIFICENT_HUNTER,
  MAGNIFICENT_TITAN,
  MAGNIFICENT_WARLOCK
];

const ALL_SETS = [RENEWED, MAJESTIC, MAGNIFICENT];

const CLASS_MAP = {
  [RENEWED_HUNTER]: CLASSES[HUNTER],
  [RENEWED_TITAN]: CLASSES[TITAN],
  [RENEWED_WARLOCK]: CLASSES[WARLOCK],
  [MAJESTIC_HUNTER]: CLASSES[HUNTER],
  [MAJESTIC_TITAN]: CLASSES[TITAN],
  [MAJESTIC_WARLOCK]: CLASSES[WARLOCK],
  [MAGNIFICENT_HUNTER]: CLASSES[HUNTER],
  [MAGNIFICENT_TITAN]: CLASSES[TITAN],
  [MAGNIFICENT_WARLOCK]: CLASSES[WARLOCK]
};

const HUNTER_ICON_NODE = 308119616;
const TITAN_ICON_NODE = 272447096;
const WARLOCK_ICON_NODE = 7761993;

const CLASS_ICON_NODE_MAP = {
  [RENEWED_HUNTER]: HUNTER_ICON_NODE,
  [RENEWED_TITAN]: TITAN_ICON_NODE,
  [RENEWED_WARLOCK]: WARLOCK_ICON_NODE,
  [MAJESTIC_HUNTER]: HUNTER_ICON_NODE,
  [MAJESTIC_TITAN]: TITAN_ICON_NODE,
  [MAJESTIC_WARLOCK]: WARLOCK_ICON_NODE,
  [MAGNIFICENT_HUNTER]: HUNTER_ICON_NODE,
  [MAGNIFICENT_TITAN]: TITAN_ICON_NODE,
  [MAGNIFICENT_WARLOCK]: WARLOCK_ICON_NODE
};

const FINISHED_IF_MAP = {
  [RENEWED_HUNTER]: 2479769639,
  [RENEWED_TITAN]: 4153787689,
  [RENEWED_WARLOCK]: 4116537170,
  [MAJESTIC_HUNTER]: 510413482,
  [MAJESTIC_TITAN]: 4116309852,
  [MAJESTIC_WARLOCK]: 3162915011
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
            <Icon name="check" />
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
            showObjectivesAsCompletedOverride={
              isObjectivesComplete ? true : false
            }
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
    const intervalId = window.setInterval(() => {
      fetchProfile && fetchProfile();
    }, REFRESH_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, []);

  const [viewAllObjectives, setViewAllObjectives] = useState();

  return (
    <div className={s.page}>
      <h1 className={s.heading}>Solstice of Heroes 2021</h1>

      {!viewData.length ? <p className={s.loading}>Loading...</p> : null}

      {!viewData.length ? null : (
        <p className={s.explainer}>
          Complete all objectives on all items in a set to unlock the next set.
          Complete objectives on Magnificent gear to masterwork it.
        </p>
      )}

      {viewData.length > 0 && (
        <button
          className={s.toggleButton}
          onClick={() => setViewAllObjectives(!viewAllObjectives)}
        >
          {viewAllObjectives
            ? 'View only relevent objectives'
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
            inventory[FINISHED_IF_MAP[presentationNodeHash]] &&
            inventory[FINISHED_IF_MAP[presentationNodeHash]].checklisted !==
              null
              ? inventory[FINISHED_IF_MAP[presentationNodeHash]].checklisted
              : false;

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

export default connect(mapStateToProps, { fetchProfile: fetchProfileAction })(
  SolsticeOfHeroes
);
