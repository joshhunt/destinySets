import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import BungieImage from 'app/components/BungieImage';
import Record from 'app/components/Record';
import ItemBanner from 'app/components/ItemBanner';
import Icon from 'app/components/Icon';
import catalystRecordsByItemHash from 'app/extraData/catalystTriumphs';
import {
  makeItemInstanceSelector,
  objectiveDefsSelector,
  recordsSelector
} from 'app/store/selectors';

import { makeItemDefSelector } from 'app/components/Item/selectors';

import masterworkComplete from './masterwork-hammer.png';

import s from './styles.styl';

class MasterworkCatalyst extends Component {
  render() {
    const { className, itemDef, recordHash, recordState } = this.props;

    if (!itemDef) {
      return <div className={cx(className, s.placeholder)} />;
    }

    const completed =
      recordState &&
      (!recordState.objectiveNotCompleted || recordState.recordRedeemed);

    return (
      <div className={cx(className, s.root, completed && s.completed)}>
        <div className={s.inner}>
          {completed && (
            <div className={s.tick}>
              <Icon icon="check" />
            </div>
          )}

          <BungieImage className={s.screenshot} src={itemDef.screenshot} />
          <ItemBanner item={itemDef} />

          {completed ? (
            <p className={s.completeMessage}>
              <img
                className={s.masterworkComplete}
                src={masterworkComplete}
                alt=""
              />{' '}
              <span>Masterwork Complete</span>
            </p>
          ) : (
            <Record className={s.record} hash={recordHash} />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  const itemInstanceSelector = makeItemInstanceSelector();
  const itemDefSelector = makeItemDefSelector();

  return (state, ownProps) => {
    const recordHash = catalystRecordsByItemHash[ownProps.itemHash];

    const records = recordsSelector(state);
    const record = records[recordHash];
    const recordState = record && record.enumeratedState;

    return {
      itemDef: itemDefSelector(state, ownProps),
      instances: itemInstanceSelector(state, ownProps),
      objectiveDefs: objectiveDefsSelector(state),
      recordHash,
      recordState
    };
  };
}

export default connect(mapStateToProps)(MasterworkCatalyst);
