import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import PresentationNode from 'app/components/PresentationNode';
import Record from 'app/components/Record';

import s from './styles.styl';

const OVERRIDE = {
  1664035662: 3319885427
};

function PresentationNodeChildren({ node, linkPrefix }) {
  return (
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
  );
}

class Triumphs extends Component {
  render() {
    const {
      rootTriumphNode,
      rootSealsNode,
      subNodeA,
      subNodeB,
      subNodeC
    } = this.props;

    if (!rootTriumphNode) {
      return null;
    }

    return (
      <div>
        <div className={s.panes}>
          <div className={s.pane}>
            <h2>Triumphs</h2>
            <div className={s.children}>
              {rootTriumphNode.children.presentationNodes.map(node => (
                <Link
                  className={s.node}
                  key={node.presentationNodeHash}
                  to={`/triumphs/${OVERRIDE[node.presentationNodeHash] ||
                    node.presentationNodeHash}`}
                >
                  <PresentationNode hash={node.presentationNodeHash} />
                </Link>
              ))}
            </div>

            <h2>Seals</h2>
            <div className={s.children}>
              {rootSealsNode.children.presentationNodes.map(node => (
                <Link
                  className={s.node}
                  key={node.presentationNodeHash}
                  to={`/triumphs/${node.presentationNodeHash}`}
                >
                  <PresentationNode hash={node.presentationNodeHash} />
                </Link>
              ))}
            </div>
          </div>

          {subNodeA && (
            <div className={s.pane}>
              <h2>{subNodeA.displayProperties.name}</h2>
              <PresentationNodeChildren
                node={subNodeA}
                linkPrefix={`/triumphs/${subNodeA.hash}`}
              />
            </div>
          )}

          {subNodeB && (
            <div className={s.pane}>
              <h2>{subNodeB.displayProperties.name}</h2>
              <PresentationNodeChildren
                node={subNodeB}
                linkPrefix={`/triumphs/${subNodeA.hash}/${subNodeB.hash}`}
              />
            </div>
          )}

          {subNodeC && (
            <div className={s.pane}>
              <h2>{subNodeC.displayProperties.name}</h2>
              <PresentationNodeChildren
                node={subNodeC}
                linkPrefix={`/triumphs/${subNodeA.hash}/${subNodeB.hash}/${
                  subNodeC.hash
                }`}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const ROOT_TRIUMPHS_NODE_HASH = 1024788583;
const ROOT_SEALS_NODE_HASH = 1652422747;

const mapStateToProps = (state, ownProps) => {
  const {
    DestinyPresentationNodeDefinition: nodeDefs,
    DestinyRecordDefinition: recordDefs
  } = state.definitions;

  if (!nodeDefs) {
    return {};
  }

  return {
    rootTriumphNode: nodeDefs[ROOT_TRIUMPHS_NODE_HASH],
    rootSealsNode: nodeDefs[ROOT_SEALS_NODE_HASH],
    subNodeA: nodeDefs[ownProps.params.presentationNodeA],
    subNodeB: nodeDefs[ownProps.params.presentationNodeB],
    subNodeC: nodeDefs[ownProps.params.presentationNodeC],
    nodeDefs,
    recordDefs
  };
};

export default connect(mapStateToProps)(Triumphs);
