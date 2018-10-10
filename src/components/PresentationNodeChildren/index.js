import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import PresentationNode from 'app/components/PresentationNode';
import Record from 'app/components/Record';
import BungieImage from 'app/components/BungieImage';

import s from './styles.styl';

function PresentationNodeChildren({
  node,
  linkPrefix,
  isNested,
  showChildren
}) {
  if (!node) {
    return null;
  }

  return (
    <div className={s.root}>
      <div className={isNested ? s.nestedTop : s.top}>
        <Link to={linkPrefix} className={s.topLink}>
          {node.displayProperties.icon && (
            <div className={s.iconWrapper}>
              <BungieImage
                className={s.icon}
                src={node.displayProperties.icon}
              />
            </div>
          )}

          <h2>{node.displayProperties.name}</h2>
        </Link>
      </div>

      {node.children.presentationNodes.length > 0 && (
        <div
          className={showChildren ? s.nestedChildren : s.childPresentationNodes}
        >
          {node.children.presentationNodes.map(
            ({ presentationNodeHash }) =>
              showChildren ? (
                <ConnectedPresentationNodeChildren
                  hash={presentationNodeHash}
                  showChildren={false}
                  isNested={true}
                  linkPrefix={`${linkPrefix}/${presentationNodeHash}`}
                />
              ) : (
                <Link
                  className={s.node}
                  key={presentationNodeHash}
                  to={`${linkPrefix}/${presentationNodeHash}`}
                >
                  <PresentationNode hash={presentationNodeHash} />
                </Link>
              )
          )}
        </div>
      )}

      {node.children.records.length > 0 && (
        <div className={s.childRecords}>
          {node.children.records.map(({ recordHash }) => (
            <Record className={s.record} key={recordHash} hash={recordHash} />
          ))}
        </div>
      )}
    </div>
  );
}

export function fakePresentationNode(hash, recordHashes) {
  return {
    displayProperties: {
      name: 'Tracked triumphs'
    },
    hash,
    children: {
      records: recordHashes.map(recordHash => ({ recordHash })),
      presentationNodes: []
    }
  };
}

const mapStateToProps = (state, ownProps) => {
  const { DestinyPresentationNodeDefinition: nodeDefs } = state.definitions;

  if (!nodeDefs) {
    return {};
  }

  if (ownProps.hash === 'tracked') {
    return { node: fakePresentationNode('tracked', state.app.trackedRecords) };
  }

  const node = nodeDefs[ownProps.hash];

  const childrenHaveRecords =
    node.children.presentationNodes &&
    node.children.presentationNodes.find(child => {
      const childNode = nodeDefs[child.presentationNodeHash];
      return childNode.children.records.length > 0;
    });

  return {
    node,
    childrenHaveRecords: !!childrenHaveRecords
  };
};

const ConnectedPresentationNodeChildren = connect(mapStateToProps)(
  PresentationNodeChildren
);

export default ConnectedPresentationNodeChildren;
