import React from 'react';
import cx from 'classnames';

import s from './styles.styl';

const ELEMENTAL_DAMAGE_CLASS = {
  // 0: None,
  1: s.kineticDamage,
  2: s.arcDamage,
  3: s.solarDamage,
  4: s.voidDamage
  // 5: Raid,
};

const AMMO_TYPE = {
  0: <span>None</span>,
  1: (
    <span>
      <img className={s.ammoIcon} src={require('./primary.png')} alt="" />{' '}
      Primary
    </span>
  ),
  2: (
    <span>
      <img className={s.ammoIcon} src={require('./special.png')} alt="" />{' '}
      Special
    </span>
  ),
  3: (
    <span>
      <img className={s.ammoIcon} src={require('./heavy.png')} alt="" /> Heavy
    </span>
  ),
  4: <span>Unknown</span>
};

export default function ItemAttributes({ className, item }) {
  if (!item) {
    return null;
  }

  const ammoType = item.equippingBlock && item.equippingBlock.ammoType;
  const elementalDamageClass =
    item && item.damageTypes && item.damageTypes.length > 0
      ? ELEMENTAL_DAMAGE_CLASS[item.damageTypes[0]]
      : null;

  if (!(elementalDamageClass || ammoType)) {
    return null;
  }

  return (
    <div className={cx(className, s.root)}>
      {elementalDamageClass && (
        <div className={elementalDamageClass}>
          <div className={s.elementalDamageIcon} />
          <div>600</div>
        </div>
      )}

      {ammoType && (
        <div className={s.ammoType}>
          <div>{AMMO_TYPE[ammoType]}</div>
        </div>
      )}
    </div>
  );
}
