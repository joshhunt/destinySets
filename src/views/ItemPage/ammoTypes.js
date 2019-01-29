import React from 'react';

import s from './styles.styl';

export const AMMO_TYPE = {
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
