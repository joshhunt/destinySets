import React from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';

const DRAINED = [
  1432280527, // warlock
  2557471208, // hunter
  2946324356 // titan
];

const RENEWED = [
  1432280512, // warlock
  2557471207, // hunter
  2946324363 // titan
];

const MAJESTIC = [
  1432280513, // warlock
  2557471206, // hunter
  2946324362 // titan
];

const ALL_SETS = [DRAINED, RENEWED, MAJESTIC];

function SolsticeOfHeroes({ viewData, classDefs }) {
  console.log('viewData:', viewData);
  return (
    <div>
      <h1>solstice of heroes</h1>

      {viewData.map(sets => {
        const baseSet = sets.node;

        return (
          <div>
            <h2>{baseSet && baseSet.displayProperties.name}</h2>

            <div>
              {sets.sets.map(set => {
                return (
                  <div>
                    <h3>for class</h3>
                    <div>
                      {set.map(gear => {
                        const name =
                          (gear.item &&
                            !gear.item.redacted &&
                            get(gear.item, 'displayProperties.name')) ||
                          get(gear.collectible, 'displayProperties.name');
                        return <div>{name}</div>;
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
  // const classDefs = state.definitions.DestinyClassDefinition;

  if (!itemDefs || !presentationNodeDefs) {
    return { viewData: [] };
  }

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

          return childItems;
        })
        .filter(Boolean)
    };
  });

  return { viewData };
}

export default connect(mapStateToProps)(SolsticeOfHeroes);
