import React from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import cx from 'classnames';

import { flagEnum } from 'app/lib/destinyUtils';

import { objectiveInstancesSelector } from 'app/store/selectors';

import BungieImage from 'app/components/BungieImage';
import Objectives from 'app/components/Objectives';

import s from './styles.styl';

function Record({
  className,
  node,
  recordState,
  recordInstance,
  objectiveInstances,
  objectiveDefs
}) {
  if (!node) {
    return null;
  }

  const completed = recordState && !recordState.objectiveNotCompleted;

  return (
    <div className={cx(className, s.root, completed && s.completed)}>
      {node.displayProperties &&
        node.displayProperties.icon && (
          <div className={s.accessory}>
            <BungieImage className={s.icon} src={node.displayProperties.icon} />
          </div>
        )}

      <div className={s.main}>
        <div className={s.name}>{node.displayProperties.name}</div>
        <div className={s.description}>
          <small>{node.displayProperties.description}</small>
        </div>

        {recordInstance &&
          recordInstance.objectives && (
            <Objectives
              className={s.objectives}
              objectives={recordInstance.objectives}
              objectiveInstances={objectiveInstances}
              objectiveDefs={objectiveDefs}
            />
          )}
      </div>
    </div>
  );
}

const enumerateState = state => ({
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
  const records = get(state, 'profile.profile.profileRecords.data.records');
  const record = records && records[ownProps.hash];
  const recordState = record && enumerateState(record.state);

  return {
    objectiveInstances: objectiveInstancesSelector(state),
    node: recordDefs[ownProps.hash],
    recordState,
    recordInstance: record,
    objectiveDefs: state.definitions.DestinyObjectiveDefinition
  };
};

export default connect(mapStateToProps)(Record);
