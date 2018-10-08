import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { flatMapDeep, get } from 'lodash';

import BungieImage from 'app/components/BungieImage';
import { enumerateState } from 'app/components/Record';
import { fakePresentationNode } from 'app/components/PresentationNodeChildren';

import s from './styles.styl';

export function PresentationNode({
  className,
  node,
  totalChildRecords,
  childRecordsCompleted
}) {
  if (!node) {
    return null;
  }

  return (
    <div className={cx(className, s.root)}>
      {node.displayProperties &&
        node.displayProperties.icon && (
          <div className={s.accessory}>
            <BungieImage className={s.icon} src={node.displayProperties.icon} />
          </div>
        )}

      <div className={s.main}>
        <div className={s.name}>{node.displayProperties.name}</div>
      </div>

      <div className={s.progress}>
        <div className={s.progressCount}>
          {childRecordsCompleted} / {totalChildRecords}
        </div>

        <div
          className={s.progressTrack}
          style={{
            width: `${Math.min(
              childRecordsCompleted / totalChildRecords * 100,
              100
            )}%`
          }}
        />
      </div>
    </div>
  );
}

function recursiveRecords(node, definitions) {
  if (!node || !node.children) {
    console.log('bailing early for', node);
    return [];
  }

  const fromChildren = flatMapDeep(
    node.children.presentationNodes,
    childNode => {
      const childPresentationNode =
        definitions.DestinyPresentationNodeDefinition[
          childNode.presentationNodeHash
        ];

      if (
        childPresentationNode &&
        childPresentationNode.children &&
        childPresentationNode.children.records &&
        childPresentationNode.children.records.length
      ) {
        return childPresentationNode.children.records
          .map(
            c =>
              definitions.DestinyRecordDefinition &&
              definitions.DestinyRecordDefinition[c.recordHash]
          )
          .filter(Boolean);
      }

      return recursiveRecords(childPresentationNode, definitions);
    }
  );

  const fromThis = node.children.records
    .map(
      c =>
        definitions.DestinyRecordDefinition &&
        definitions.DestinyRecordDefinition[c.recordHash]
    )
    .filter(Boolean);

  return [...fromThis, ...fromChildren];
}

const mapStateToProps = (state, ownProps) => {
  const { DestinyPresentationNodeDefinition: nodeDefs } = state.definitions;
  const node =
    ownProps.hash === 'tracked'
      ? fakePresentationNode('tracked', state.app.trackedRecords)
      : nodeDefs[ownProps.hash];

  const childRecordDefs = recursiveRecords(node, state.definitions);
  const records = get(state, 'profile.profile.profileRecords.data.records');

  const childRecordsCompleted = childRecordDefs.reduce((acc, recordDef) => {
    const record = records && records[recordDef.hash];
    const recordState = record && enumerateState(record.state);
    const completed = recordState && !recordState.objectiveNotCompleted;
    return completed ? acc + 1 : acc;
  }, 0);

  return {
    node,
    totalChildRecords: childRecordDefs.length,
    childRecordsCompleted
  };
};

export default connect(mapStateToProps)(PresentationNode);
