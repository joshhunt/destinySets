import React, { useEffect, useState, useMemo } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { flatMapDeep } from 'lodash';

import { fetchProfile as fetchProfileAction } from 'app/store/profile';
import Footer from 'app/components/Footer';
import Item from 'app/components/Item';
import BungieImage from 'app/components/BungieImage';

import Popper from 'app/components/Popper';
import ItemTooltip from 'app/components/ItemTooltip';
import ItemModal from 'app/components/ItemModal';

import s from './styles.styl';

const ELEMENT_CLASS_NAME = {
  1198124803: s.Any,
  728351493: s.Arc,
  591714140: s.Solar,
  4069572561: s.Void
};

const ITEM_ELEMENT_CLASS_NAME = {
  1198124803: s.itemAny,
  728351493: s.itemArc,
  591714140: s.itemSolar,
  4069572561: s.itemVoid
};

function Mods({
  route: { setData },
  fetchProfile,
  modDefinitions,
  DestinyEnergyTypeDefinition
}) {
  useEffect(() => {
    fetchProfile && fetchProfile();
  }, []);

  const [itemTooltip, setItemTooltip] = useState();
  const [itemModal, setItemModalState] = useState();
  const [modSearch, setModSearch] = useState();

  const setPopper = (itemHash, element) => {
    setItemTooltip(itemHash ? { itemHash, element } : null);
  };

  const setItemModal = itemHash => setItemModalState(itemHash);

  const modSets = setData[0].sets;

  const searchResults = useMemo(() => {
    const compareSearch = modSearch && modSearch.toLowerCase();

    if (!modSearch || modSearch.length == 0) {
      return [];
    }

    return modDefinitions.filter(mod => {
      const compareName = mod.displayProperties.name.toLowerCase();
      return compareName.includes(compareSearch);
    });
  }, [modSearch, modDefinitions]);

  return (
    <div className={s.page}>
      <h1 className={s.heading}>Mods</h1>

      <p className={s.explainer}>
        Very beta, completely untested. No guarantees made about accuracy. You
        will need to have an armour piece the mod goes into for it to be marked
        as collected.
      </p>

      <input
        onChange={ev => setModSearch(ev.target.value)}
        placeholder="search"
      />

      {searchResults && searchResults.length > 0 && (
        <React.Fragment>
          <h2 className={s.heading}>Search results</h2>
          <div className={s.searchResultsList}>
            {searchResults &&
              searchResults.length > 0 &&
              searchResults.map(mod => (
                <Item
                  className={s.searchResultMod}
                  itemHash={mod.hash}
                  extended
                  key={mod.hash}
                  modStyle
                  setPopper={setPopper}
                  onItemClick={setItemModal}
                />
              ))}
          </div>
        </React.Fragment>
      )}

      {modSets.map(modSet => {
        return (
          <div className={cx(s.set, s.legendary)}>
            <h2 className={s.heading}>{modSet.name}</h2>

            <div className={s.setsList}>
              {modSet.sections.map(modSection => {
                const energyType =
                  DestinyEnergyTypeDefinition[modSection.nameHash];

                return (
                  <div className={s.setForElement}>
                    <h3
                      className={cx(
                        s.heading,
                        ELEMENT_CLASS_NAME[modSection.nameHash]
                      )}
                    >
                      {energyType ? (
                        <span>
                          <BungieImage
                            src={energyType.displayProperties.icon}
                            className={s.energyIcon}
                          />{' '}
                          {energyType.displayProperties.name}
                        </span>
                      ) : (
                        modSection.name
                      )}
                    </h3>

                    {modSection.groups.map(group => {
                      return (
                        <div className={s.group}>
                          <h4 className={s.heading}>{group.name}</h4>

                          <div className={s.itemGroup}>
                            {group.items.map(modItemHash => {
                              return (
                                <Item
                                  className={cx(
                                    s.item,
                                    ITEM_ELEMENT_CLASS_NAME[modSection.nameHash]
                                  )}
                                  itemHash={modItemHash}
                                  key={modItemHash}
                                  modStyle
                                  setPopper={setPopper}
                                  onItemClick={setItemModal}
                                />
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
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

      {/* Modal/tooltip stuff */}

      {itemTooltip && (
        <Popper key={itemTooltip.hash} element={itemTooltip.element}>
          <ItemTooltip itemHash={itemTooltip.itemHash} />
        </Popper>
      )}

      <ItemModal
        itemHash={itemModal}
        isOpen={!!itemModal}
        onRequestClose={() => setItemModalState(null)}
      />
    </div>
  );
}

function mapStateToProps(state, { route: { setData } }) {
  const DestinyEnergyTypeDefinition =
    (state.definitions && state.definitions.DestinyEnergyTypeDefinition) || {};

  const DestinyInventoryItemDefinition =
    (state.definitions && state.definitions.DestinyInventoryItemDefinition) ||
    {};

  const modDefinitions = flatMapDeep(
    setData.map(category =>
      category.sets.map(set =>
        set.sections.map(section => section.groups.map(group => group.items))
      )
    )
  )
    .map(itemHash => DestinyInventoryItemDefinition[itemHash])
    .filter(Boolean);

  console.log('modDefinitions:', modDefinitions);

  return {
    DestinyEnergyTypeDefinition,
    modDefinitions
  };
}

export default connect(
  mapStateToProps,
  { fetchProfile: fetchProfileAction }
)(Mods);
