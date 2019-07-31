import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { flagEnum } from 'app/lib/destinyUtils';

import {
  objectiveInstancesSelector,
  recordsSelector
} from 'app/store/selectors';

import Objectives from 'app/components/Objectives';

import s from './styles.styl';

function Record({
  className,
  record,
  recordState,
  recordInstance,
  objectiveInstances,
  objectiveDefs
}) {
  if (!record) {
    return null;
  }

  const completed =
    recordState &&
    (!recordState.objectiveNotCompleted || recordState.recordRedeemed);

  return (
    <div className={cx(className, s.root, completed && s.completed)}>
      <div className={s['bot-left']} />

      <div className={s.main}>
        <div className={s.description}>
          <small>{record.displayProperties.description}</small>
        </div>

        {recordInstance && recordInstance.objectives && (
          <Objectives
            className={s.objectives}
            objectives={recordInstance.objectives}
            objectiveInstances={objectiveInstances}
            objectiveDefs={objectiveDefs}
          />
        )}

        {!recordState && <p className={s.small}>Missing data</p>}
      </div>
    </div>
  );
}

export const enumerateState = state => ({
  none: flagEnum(state, 0),
  recordRedeemed: flagEnum(state, 1),
  rewardUnavailable: flagEnum(state, 2),
  objectiveNotCompleted: flagEnum(state, 4),
  obscured: flagEnum(state, 8),
  invisible: flagEnum(state, 16),
  entitlementUnowned: flagEnum(state, 32),
  canEquipTitle: flagEnum(state, 64)
});

const mapStateToProps = (state, ownProps) => {
  const { DestinyRecordDefinition: recordDefs } = state.definitions;
  const records = recordsSelector(state);
  const record = records[ownProps.hash];
  const recordState = record && record.enumeratedState;

  return {
    objectiveInstances: objectiveInstancesSelector(state),
    record: recordDefs && recordDefs[ownProps.hash],
    recordState,
    recordInstance: record,
    objectiveDefs: state.definitions.DestinyObjectiveDefinition
  };
};

export default connect(mapStateToProps)(Record);
