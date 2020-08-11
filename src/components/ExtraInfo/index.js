import React from 'react';
import { connect } from 'react-redux';

import getItemExtraInfo, { DISMANTLED_MESSAGE } from 'app/lib/getItemExtraInfo';

import Icon from 'app/components/Icon';

import styles from './styles.styl';

const TICK_STYLE = {
  [DISMANTLED_MESSAGE]: styles.greyTick
};

function ExtraInfo({
  className,
  item,
  inventoryEntry,
  richVendorEntry,
  inCollection,
  vendorDefs
}) {
  const extraInfo = getItemExtraInfo(item, inventoryEntry).map(location => {
    return (
      <span>
        <span className={TICK_STYLE[location] || styles.greenTick}>
          <Icon name="check" />
        </span>{' '}
        {location}
      </span>
    );
  });

  if (inCollection && inventoryEntry) {
    extraInfo.push(
      <span>
        <span className={styles.blueTick}>
          <Icon name="check" />
        </span>{' '}
        {inventoryEntry.obtained
          ? 'Unlocked in Collections'
          : 'Dismantled & unlocked in Collections'}
      </span>
    );
  }

  if (!richVendorEntry && extraInfo.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {richVendorEntry &&
        richVendorEntry.map((ve, index) => {
          const vendor = vendorDefs[ve.vendorHash];

          console.log('extraInfo ve', ve);

          return (
            <div key={index}>
              <span className={styles.orangeTick}>
                <Icon name="dollar-sign" />
              </span>{' '}
              Available from{' '}
              {vendor ? vendor.displayProperties.name : 'unknown vendor'}
              {ve.costs.length && (
                <span>
                  {' for '}

                  {ve.costs
                    .map(cost => {
                      return (
                        <span>
                          {cost.quantity}{' '}
                          {cost.item && cost.item.displayProperties.name}
                        </span>
                      );
                    })
                    .reduce((prev, curr) => [prev, ' and ', curr])}
                </span>
              )}
            </div>
          );
        })}

      {extraInfo.map((info, index) => (
        <div key={index}>{info}</div>
      ))}
    </div>
  );
}

export default connect(state => ({
  vendorDefs: state.definitions.DestinyVendorDefinition
}))(ExtraInfo);
