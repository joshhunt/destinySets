import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { get } from 'lodash';

import PresentationNodeChildren from 'app/components/PresentationNodeChildren';
import PresentationNode from 'app/components/PresentationNode';

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
    this.scrollerRef.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  render() {
    const { score, params, trackedRecords } = this.props;

    return (
      <div>
        <div className={s.panes} ref={this.getRef}>
          <div className={s.pane}>
            <div className={s.scoreBox}>
              <div className={s.scoreTitle}>Total score</div>
              <div className={s.scoreScore}>{score}</div>
            </div>

            {trackedRecords && (
              <Link to="/triumphs/tracked">
                <PresentationNode hash="tracked" />
              </Link>
            )}

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
                isCollapsed={!!params.presentationNodeB}
                hash={params.presentationNodeA}
                linkPrefix={`/triumphs/${params.presentationNodeA}`}
              />
            </div>
          )}

          {params.presentationNodeB && (
            <div className={s.pane}>
              <PresentationNodeChildren
                isCollapsed={!!params.presentationNodeC}
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
  const score = get(state, 'profile.profile.profileRecords.data.score');

  return {
    score,
    trackedRecords: state.app.trackedRecords
  };
};

export default connect(mapStateToProps)(Triumphs);
