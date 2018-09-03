import React from 'react';

import BungieImage from 'app/components/BungieImage';

import s from './styles.styl';

export default function ItemPerks({ perks, className }) {
  return (
    <div className={className}>
      {perks &&
        perks.map(perk => (
          <div key={perk.hash} className={s.perk}>
            <div className={s.accessory}>
              <BungieImage
                className={s.perkImage}
                src={perk.displayProperties.icon}
              />
            </div>
            <div className={s.main}>
              <div className={s.name}>{perk.displayProperties.name}</div>
              <p className={s.description}>
                {perk.displayProperties.description}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
