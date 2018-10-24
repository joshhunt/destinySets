import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { get } from 'lodash';

import PresentationNodeChildren from 'app/components/PresentationNodeChildren';

import s from './styles.styl';

const ROOT_TRIUMPHS_NODE_HASH = 1024788583;
const ROOT_SEALS_NODE_HASH = 1652422747;

const OVERRIDE = {
  1664035662: 3319885427
};

function getBreadcrubLink(breadcrumbs, current) {
  const i = breadcrumbs.indexOf(current);
  const prev = i > -1 ? breadcrumbs.slice(0, i + 1) : [];
  return `/${prev.map(c => c.id).join('/')}`;
}

class Triumphs extends Component {
  render() {
    const { score, trackedRecords, breadcrumbs } = this.props;

    const viewCrumb = breadcrumbs[breadcrumbs.length - 1];

    let view;

    if (viewCrumb.id === 'triumphs') {
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
            hash={viewCrumb.id}
            showChildren={true}
            linkPrefix={`/${breadcrumbs.map(bc => bc.id).join('/')}`}
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
            <span className={s.crumb} key={crumb.id}>
              <Link
                className={s.crumbLink}
                to={getBreadcrubLink(breadcrumbs, crumb)}
              >
                {crumb.node ? crumb.node.displayProperties.name : crumb.id}
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

  const breadcrumbs = [
    'triumphs',
    ownProps.params.presentationNodeA,
    ownProps.params.presentationNodeB,
    ownProps.params.presentationNodeC
  ]
    .filter(Boolean)
    .map(hash => OVERRIDE[hash] || hash)
    .map(hash => {
      return {
        id: hash,
        node:
          state.definitions.DestinyPresentationNodeDefinition &&
          state.definitions.DestinyPresentationNodeDefinition[hash]
      };
    });

  return {
    score,
    trackedRecords: state.app.trackedRecords,
    breadcrumbs
  };
};

export default connect(mapStateToProps)(Triumphs);
