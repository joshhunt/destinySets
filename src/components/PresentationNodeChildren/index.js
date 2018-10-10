import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import PresentationNode from 'app/components/PresentationNode';
import Record from 'app/components/Record';
import BungieImage from 'app/components/BungieImage';

import s from './styles.styl';

function PresentationNodeChildren({ node, linkPrefix, isCollapsed }) {
  if (!node) {
    return null;
  }

  return (
    <div className={s.root}>
      <div className={s.top}>
        {node.displayProperties.icon && (
          <div className={s.iconWrapper}>
            <div className={s.iconCornersTop} />
            <div className={s.iconCornersBottom} />
            <BungieImage className={s.icon} src={node.displayProperties.icon} />
          </div>
        )}
        <h2>{node.displayProperties.name}</h2>
      </div>

      <div className={s.children}>
        {node.children.presentationNodes.map(({ presentationNodeHash }) => (
          <Link
            className={s.node}
            key={presentationNodeHash}
            to={`${linkPrefix}/${presentationNodeHash}`}
          >
            <PresentationNode hash={presentationNodeHash} />
          </Link>
        ))}

        {node.children.records.map(({ recordHash }) => (
          <Record className={s.record} key={recordHash} hash={recordHash} />
        ))}
      </div>
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

  if (ownProps.hash === 'tracked') {
    return { node: fakePresentationNode('tracked', state.app.trackedRecords) };
  }

  return {
    node: nodeDefs && nodeDefs[ownProps.hash]
  };
};

export default connect(mapStateToProps)(PresentationNodeChildren);
