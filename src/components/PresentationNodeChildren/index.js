import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { Link } from 'react-router';

import PresentationNode from 'app/components/PresentationNode';
import Record from 'app/components/Record';

import s from './styles.styl';

function PresentationNodeChildren({ node, linkPrefix }) {
  return (
    <div>
      <h2>{node.displayProperties.name}</h2>

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

const mapStateToProps = (state, ownProps) => {
  const {
    DestinyPresentationNodeDefinition: nodeDefs
    // DestinyRecordDefinition: recordDefs
  } = state.definitions;

  return {
    node: nodeDefs[ownProps.hash]
  };
};

export default connect(mapStateToProps)(PresentationNodeChildren);
