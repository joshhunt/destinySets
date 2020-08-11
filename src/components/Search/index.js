import React from 'react';
import cx from 'classnames';

import Icon from 'app/components/Icon';

import s from './styles.styl';

export default function Search({ className, ...props }) {
  return (
    <div className={cx(className, s.root)}>
      <Icon className={s.icon} name="search" />
      <input className={s.input} type="text" placeholder="Search" {...props} />
    </div>
  );
}
