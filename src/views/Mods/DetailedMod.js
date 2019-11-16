import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import BungieImage from 'app/components/BungieImage';
import Item from 'app/components/Item';
import s from './detailedMod.styl';

export const STAT_TO_ENERGY = {
  3578062600: 1198124803, // any
  3779394102: 728351493, // arc
  3344745325: 591714140, // solar
  2399985800: 4069572561 // void
};

const ELEMENT_CLASS_NAME = {
  // 1198124803: s.Any,
  728351493: s.arc,
  591714140: s.solar,
  4069572561: s.void
};

function DetailedMod({
  itemHash,
  armourSlot,
  setPopper,
  onItemClick,
  itemDef,
  energyCost,
  energyDef
}) {
  if (!itemDef) {
    return null;
  }

  return (
    <div className={cx(s.root)} onClick={() => onItemClick(itemHash)}>
      <div className={s.accessory}>
        <Item itemHash={itemHash} modStyle setPopper={setPopper} />
      </div>

      <div className={s.main}>
        <div className={s.name}>{itemDef.displayProperties.name}</div>
        <div className={s.description}>
          {energyDef && (
            <span className={ELEMENT_CLASS_NAME[energyDef.hash]}>
              <BungieImage
                className={s.energyType}
                src={energyDef && energyDef.displayProperties.icon}
              />{' '}
              {energyCost.value} {energyDef.displayProperties.name} energy
            </span>
          )}
          , {armourSlot}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemDefs = state.definitions.DestinyInventoryItemDefinition;
  const itemDef = itemDefs && itemDefs[ownProps.itemHash];

  const energyCost = (itemDef.investmentStats || []).find(
    st => st.statTypeHash && st.hasOwnProperty('value')
  );

  console.log({ energyCost });

  const energyDefs = state.definitions.DestinyEnergyTypeDefinition;
  const energyDef =
    energyDefs &&
    energyCost &&
    energyDefs[STAT_TO_ENERGY[energyCost.statTypeHash]];

  return {
    itemDef,
    energyDef,
    energyCost
  };
};

export default connect(mapStateToProps)(DetailedMod);
