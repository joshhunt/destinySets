import React from 'react';
import { connect } from 'react-redux';

import BunigeImage from 'app/components/BungieImage';

import s from './styles.styl';

const CHALICE_HASH = 1115550924;

function Slot({ runes, itemDefs }) {
  return (
    <div className={s.slot}>
      {runes.map(hash => {
        const item = itemDefs[hash];
        return (
          item && (
            <div className={s.rune}>
              <BunigeImage
                className={s.icon}
                src={item.displayProperties.icon}
              />
            </div>
          )
        );
      })}
    </div>
  );
}

function ChaliceRecipie({ itemDefs, recipie }) {
  const chalice = itemDefs[CHALICE_HASH];
  const [slot1, slot2] = recipie;

  return (
    <div className={s.root}>
      Crafted in{' '}
      {chalice ? chalice.displayProperties.name : 'Chalice of Opulence'} with:
      <div className={s.recipie}>
        <Slot runes={slot1} itemDefs={itemDefs} />
        <div className={s.and}>and</div>
        <Slot runes={slot2} itemDefs={itemDefs} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    itemDefs: state.definitions.DestinyInventoryItemDefinition || {}
  };
}

export default connect(mapStateToProps)(ChaliceRecipie);
