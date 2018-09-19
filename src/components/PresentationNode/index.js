import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import BungieImage from 'app/components/BungieImage';

import s from './styles.styl';

function PresentationNode({ className, node }) {
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
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { DestinyPresentationNodeDefinition: nodeDefs } = state.definitions;

  return {
    node: nodeDefs[ownProps.hash]
  };
};

export default connect(mapStateToProps)(PresentationNode);
