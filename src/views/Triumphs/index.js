import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { get } from 'lodash';

import PresentationNode from 'app/components/PresentationNode';
import PresentationNodeChildren from 'app/components/PresentationNodeChildren';
import Record from 'app/components/Record';

import s from './styles.styl';

const ROOT_TRIUMPHS_NODE_HASH = 1024788583;
const ROOT_SEALS_NODE_HASH = 1652422747;

const OVERRIDE = {
  1664035662: 3319885427
};

class Triumphs extends Component {
  getRef = ref => {
    this.scrollerRef = ref;
  };

  componentDidUpdate() {
    this.scrollerRef.scroll({
      top: 0,
      left: this.scrollerRef.scrollWidth,
      behavior: 'smooth'
    });
  }

  render() {
    const {
      rootTriumphNode,
      rootSealsNode,
      subNodeA,
      subNodeB,
      subNodeC,
      score,
      params
    } = this.props;

    if (!rootTriumphNode) {
      return null;
    }

    return (
      <div>
        <div className={s.panes} ref={this.getRef}>
          <div className={s.pane}>
            <div className={s.scoreBox}>
              <div className={s.scoreTitle}>Total score</div>
              <div className={s.scoreScore}>{score}</div>
            </div>

            <PresentationNodeChildren
              hash={ROOT_TRIUMPHS_NODE_HASH}
              linkPrefix={`/triumphs`}
            />

            <PresentationNodeChildren
              hash={ROOT_SEALS_NODE_HASH}
              linkPrefix={`/triumphs`}
            />
          </div>

          {params.presentationNodeA && (
            <div className={s.pane}>
              <PresentationNodeChildren
                hash={params.presentationNodeA}
                linkPrefix={`/triumphs/${params.presentationNodeA}`}
              />
            </div>
          )}

          {params.presentationNodeB && (
            <div className={s.pane}>
              <PresentationNodeChildren
                hash={params.presentationNodeB}
                linkPrefix={`/triumphs/${params.presentationNodeA}/${
                  params.presentationNodeB
                }`}
              />
            </div>
          )}

          {params.presentationNodeC && (
            <div className={s.pane}>
              <PresentationNodeChildren
                hash={params.presentationNodeC}
                linkPrefix={`/triumphs/${params.presentationNodeA}/${
                  params.presentationNodeB
                }/${params.presentationNodeC}`}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    DestinyPresentationNodeDefinition: nodeDefs,
    DestinyRecordDefinition: recordDefs
  } = state.definitions;

  if (!nodeDefs) {
    return {};
  }

  const score = get(state, 'profile.profile.profileRecords.data.score');

  return {
    rootTriumphNode: nodeDefs[ROOT_TRIUMPHS_NODE_HASH],
    rootSealsNode: nodeDefs[ROOT_SEALS_NODE_HASH],
    subNodeA: nodeDefs[ownProps.params.presentationNodeA],
    subNodeB: nodeDefs[ownProps.params.presentationNodeB],
    subNodeC: nodeDefs[ownProps.params.presentationNodeC],
    nodeDefs,
    score,
    scoresdf: 'hesdf',
    recordDefs
  };
};

export default connect(mapStateToProps)(Triumphs);
