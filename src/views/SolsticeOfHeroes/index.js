import React from 'react';
import { get } from 'lodash';
import cx from 'classnames';
import { connect } from 'react-redux';
import { WARLOCK, HUNTER, TITAN } from 'app/lib/destinyEnums';
import BungieImage from 'app/components/BungieImage';

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
  [DRAINED_WARLOCK]: WARLOCK,
  [DRAINED_HUNTER]: HUNTER,
  [DRAINED_TITAN]: TITAN,
  [RENEWED_WARLOCK]: WARLOCK,
  [RENEWED_HUNTER]: HUNTER,
  [RENEWED_TITAN]: TITAN,
  [MAJESTIC_WARLOCK]: WARLOCK,
  [MAJESTIC_HUNTER]: HUNTER,
  [MAJESTIC_TITAN]: TITAN
};

const _g = (gear, field) =>
  (gear.item && !gear.item.redacted && get(gear.item, field)) ||
  get(gear.collectible, field);

function Gear({ gear }) {
  const icon = _g(gear, 'displayProperties.icon');
  const name = _g(gear, 'displayProperties.name');
  return (
    <div className={s.gear}>
      <div className={s.iconWell}>
        <BungieImage src={icon} className={s.gearIcon} />
      </div>

      <div>
        <strong>{name}</strong>
        <br />
        <p className={s.gearDescription}>
          {gear.collectible.displayProperties.description}
        </p>
      </div>
    </div>
  );
}

function SolsticeOfHeroes({ viewData, classDefs }) {
  console.log('viewData:', viewData);
  return (
    <div className={s.page}>
      <h1>solstice of heroes</h1>

      {viewData.map(sets => {
        const baseSet = sets.node;

        return (
          <div className={cx(s.set, s.legendary)}>
            <h2>{baseSet && baseSet.displayProperties.name}</h2>

            <div className={s.setsList}>
              {sets.sets.map(set => {
                return (
                  <div className={s.setForClass}>
                    <h3>{set.classDef.displayProperties.name}</h3>
                    <div>
                      {set.childItems.map(gear => {
                        // const name =
                        //   (gear.item &&
                        //     !gear.item.redacted &&
                        //     get(gear.item, 'displayProperties.name')) ||
                        //   get(gear.collectible, 'displayProperties.name');

                        return <Gear gear={gear} />;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  const itemDefs = state.definitions.DestinyInventoryItemDefinition;
  const collectibleDefs = state.definitions.DestinyCollectibleDefinition;
  const presentationNodeDefs =
    state.definitions.DestinyPresentationNodeDefinition;
  const classDefs = state.definitions.DestinyClassDefinition;

  if (!itemDefs || !presentationNodeDefs || !classDefs) {
    return { viewData: [] };
  }

  const classDefItems = Object.values(classDefs);

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

          const childItems = node.children.collectibles.map(
            ({ collectibleHash }) => {
              const collectible = collectibleDefs[collectibleHash];
              const item = collectible && itemDefs[collectible.itemHash];

              return {
                collectible,
                item
              };
            }
          );

          const classDef = classDefItems.find(
            c => c.classType === CLASS_MAP[presentationNodeHash]
          );

          return {
            classDef,
            childItems
          };
        })
        .filter(Boolean)
    };
  });

  return { viewData };
}

export default connect(mapStateToProps)(SolsticeOfHeroes);
