import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import { fetchProfile as fetchProfileAction } from 'app/store/profile';
import Footer from 'app/components/Footer';
import Item from 'app/components/Item';

import Popper from 'app/components/Popper';
import ItemTooltip from 'app/components/ItemTooltip';
import ItemModal from 'app/components/ItemModal';

import s from './styles.styl';

function Mods({ route: { setData }, fetchProfile, isLoggedIn }) {
  useEffect(() => {
    fetchProfile && fetchProfile();
  }, []);

  const [itemTooltip, setItemTooltip] = useState();
  const [itemModal, setItemModalState] = useState();

  const setPopper = (itemHash, element) => {
    setItemTooltip(itemHash ? { itemHash, element } : null);
  };

  const setItemModal = itemHash => setItemModalState(itemHash);

  const modSets = setData[0].sets;

  return (
    <div className={s.page}>
      <h1 className={s.heading}>Mods</h1>

      <p className={s.explainer}>Work-in-progress for a dedicated mods UI</p>

      {modSets.map(modSet => {
        return (
          <div className={cx(s.set, s.legendary)}>
            <h2 className={s.heading}>{modSet.name}</h2>

            <div className={s.setsList}>
              {modSet.sections.map(modSection => {
                return (
                  <div className={s.setForClass}>
                    <h3 className={s.heading}>{modSection.name}</h3>

                    {modSection.itemGroups.map(modList => {
                      return (
                        <div className={s.itemGroup}>
                          {modList.map(modItemHash => {
                            return (
                              <Item
                                itemHash={modItemHash}
                                key={modItemHash}
                                extended={false}
                                className={s.item}
                                invertObtainedStyle
                                setPopper={setPopper}
                                onItemClick={setItemModal}
                              />
                            );
                          })}
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

function mapStateToProps(state) {
  const itemDefs = state.definitions.DestinyInventoryItemDefinition;

  if (!itemDefs) {
    return { viewData: [] };
  }

  const isLoggedIn = !!state.profile.profile;

  return {
    isLoggedIn
  };
}

export default connect(
  mapStateToProps,
  { fetchProfile: fetchProfileAction }
)(Mods);
