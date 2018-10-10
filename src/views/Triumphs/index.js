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

function getBreadcrubLink(breadcrumbs, current) {
  const i = breadcrumbs.indexOf(current);
  const prev = i > -1 ? breadcrumbs.slice(0, i + 1) : [];
  return `/${prev.join('/')}`;
}

class Triumphs extends Component {
  getRef = ref => {
    this.scrollerRef = ref;
  };

  componentDidUpdate() {
    // this.scrollerRef.lastChild.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    //   inline: 'nearest'
    // });
  }

  render() {
    const { score, params, trackedRecords } = this.props;

    const breadcrumbs = [
      'triumphs',
      params.presentationNodeA,
      params.presentationNodeB,
      params.presentationNodeC
    ]
      .filter(Boolean)
      .map(hash => OVERRIDE[hash] || hash);

    const viewHash = breadcrumbs[breadcrumbs.length - 1];

    let view;

    if (viewHash === 'triumphs') {
      view = (
        <div className={s.view}>
        {trackedRecords.length ? (
          <PresentationNodeChildren hash="tracked" isNested />
        ) : null}

          <PresentationNodeChildren
            hash={ROOT_TRIUMPHS_NODE_HASH}
            linkPrefix={`/triumphs`}
            showChildren
          />

          <PresentationNodeChildren
            hash={ROOT_SEALS_NODE_HASH}
            linkPrefix={`/triumphs`}
          />
        </div>
      );
    } else {
      view = (
        <div className={s.view}>
          <PresentationNodeChildren
            hash={viewHash}
            showChildren={true}
            linkPrefix={`/${breadcrumbs.join('/')}`}
          />
        </div>
      );
    }

    return (
      <div className={s.root}>
        <div className={s.scoreBox}>
          <div className={s.scoreTitle}>Total score</div>
          <div className={s.scoreScore}>{score}</div>
        </div>

        <p>
          {breadcrumbs.map(crumb => (
            <span className={s.crumb}>
              <Link
                className={s.crumbLink}
                to={getBreadcrubLink(breadcrumbs, crumb)}
              >
                {crumb}
              </Link>
            </span>
          ))}
        </p>

        {view}
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
