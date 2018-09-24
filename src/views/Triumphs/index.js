import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import PresentationNodeChildren from 'app/components/PresentationNodeChildren';

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
    const { score, params } = this.props;

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
  const score = get(state, 'profile.profile.profileRecords.data.score');

  return { score };
};

export default connect(mapStateToProps)(Triumphs);
