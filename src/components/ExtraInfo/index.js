import React from 'react';

import getItemExtraInfo from 'app/lib/getItemExtraInfo';
import Icon from 'app/components/Icon';

import styles from './styles.styl';

export default function ExtraInfo({
  item,
  inventoryEntry,
  inCollection,
  className
}) {
  const extraInfo = getItemExtraInfo(item, inventoryEntry).map(location => {
    return (
      <span>
        <span className={styles.greenTick}>
          <Icon icon="check" />
        </span>{' '}
        {location}
      </span>
    );
  });

  if (inCollection) {
    extraInfo.push(
      <span>
        <span className={styles.blueTick}>
          <Icon icon="check" />
        </span>{' '}
        {inventoryEntry.obtained
          ? 'Unlocked in Forsaken checklist'
          : 'Dismantled & and unlocked in Forsaken checklist'}
      </span>
    );
  }

  return (
    <div className={className}>
      {extraInfo.map((info, index) => <div key={index}>{info}</div>)}
    </div>
  );
}
