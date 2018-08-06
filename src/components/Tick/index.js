import React from 'react';
import cx from 'classnames';

import Icon from 'app/components/Icon';

import s from './styles.styl';

export default function Tick({ className }) {
  return (
    <div className={cx(s.root, className)}>
      <Icon icon="check" />
    </div>
  );
}
