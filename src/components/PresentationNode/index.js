import React from 'react';
import { uniq } from 'lodash';
import { connect } from 'react-redux';

import Item from 'app/components/Item';

import s from './styles.styl';

function Collectable({ collectable, setModal, setPopper }) {
  return (
    collectable && (
      <Item
        itemHash={collectable.itemHash}
        onClick={setModal}
        setPopper={setPopper}
      />
    )
  );
}

const ConnectedCollectable = connect((state, ownProps) => ({
  collectable:
    state.definitions.DestinyCollectibleDefinition &&
    state.definitions.DestinyCollectibleDefinition[ownProps.hash]
}))(Collectable);

function PresentationNode({ node, setModal, setPopper, collectibleDefs }) {
  if (!node) {
    return null;
  }

  const sources = uniq(
    node.children.collectibles.map(e => {
      const c = collectibleDefs[e.collectibleHash];
      return c.sourceString;
    })
  ).filter(d => d.length > 2);

  return (
    <div className={s.root}>
      <div className={s.title}>{node.displayProperties.name}</div>
      <div className={s.children}>
        {node.children &&
          node.children.presentationNodes.map(childNode => (
            <ConnectedPresentationNode
              hash={childNode.presentationNodeHash}
              setModal={setModal}
              setPopper={setPopper}
            />
          ))}

        {node.children && (
          <div>
            {sources.map((s, i) => (
              <p key={i}>
                <em>{s}</em>
              </p>
            ))}
            <div className={s.itemList}>
              {node.children.collectibles.map(collectableEntry => {
                return (
                  <ConnectedCollectable
                    hash={collectableEntry.collectibleHash}
                    setModal={setModal}
                    setPopper={setPopper}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    collectibleDefs: state.definitions.DestinyCollectibleDefinition,
    node:
      state.definitions.DestinyPresentationNodeDefinition &&
      state.definitions.DestinyPresentationNodeDefinition[ownProps.hash]
  };
};

const ConnectedPresentationNode = connect(mapStateToProps)(PresentationNode);

export default ConnectedPresentationNode;
