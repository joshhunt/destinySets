import React from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import cx from 'classnames';

import { flagEnum } from 'app/lib/destinyUtils';

import { objectiveInstancesSelector } from 'app/store/selectors';
import { trackRecords, removeTrackedRecord } from 'app/store/reducer';

import BungieImage from 'app/components/BungieImage';
import Objectives from 'app/components/Objectives';
import Icon from 'app/components/Icon';

import s from './styles.styl';
import trackButtonBg from './037e-00001686.png';
import trackButtonFg from './037e-00001685.png';

function Record({
  className,
  record,
  recordState,
  recordInstance,
  objectiveInstances,
  objectiveDefs,
  isTracked,
  trackRecords,
  removeTrackedRecord
}) {
  if (!record) {
    return null;
  }

  const completed = recordState && !recordState.objectiveNotCompleted;

  return (
    <div
      className={cx(
        className,
        s.root,
        completed && s.completed,
        isTracked && s.tracked
      )}
    >
      {completed && (
        <div className={s.tick}>
          <Icon icon="check" />
        </div>
      )}

      <div className={s['bot-left']} />

      {!completed && (
        <button
          className={s.trackButton}
          onClick={() =>
            isTracked
              ? removeTrackedRecord(record.hash)
              : trackRecords([record.hash])
          }
        >
          <img className={s.trackButtonBg} src={trackButtonBg} alt="" />
          <img className={s.trackButtonFg} src={trackButtonFg} alt="" />
        </button>
      )}

      {record.displayProperties &&
        record.displayProperties.icon && (
          <div className={s.accessory}>
            <BungieImage
              className={s.icon}
              src={record.displayProperties.icon}
            />
          </div>
        )}

      <div className={s.main}>
        <div className={s.name}>
          <div className={s.nameName}>{record.displayProperties.name}</div>
          <div className={s.points}>
            {record.completionInfo && record.completionInfo.ScoreValue} pts
          </div>
        </div>

        <div className={s.description}>
          <small>{record.displayProperties.description}</small>
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
  const records = get(state, 'profile.profile.profileRecords.data.records');
  const record = records && records[ownProps.hash];
  const recordState = record && enumerateState(record.state);
  const isTracked = state.app.trackedRecords.includes(ownProps.hash);

  return {
    objectiveInstances: objectiveInstancesSelector(state),
    record: recordDefs[ownProps.hash],
    recordState,
    recordInstance: record,
    isTracked,
    objectiveDefs: state.definitions.DestinyObjectiveDefinition
  };
};

export default connect(mapStateToProps, { trackRecords, removeTrackedRecord })(
  Record
);
