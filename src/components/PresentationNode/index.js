import React from 'react';
import { toPairs, groupBy } from 'lodash';
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

  const groupedItems = toPairs(
    groupBy(
      node.children.collectibles.map(collectableEntry => {
        return collectibleDefs[collectableEntry.collectibleHash];
      }),
      c => c.sourceString
    )
  ).map(([source, collectables]) => {
    return {
      source,
      items: collectables.map(c => c.itemHash)
    };
  });

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

        <div className={s.ggg}>
          {groupedItems.map((gi, i) => (
            <div class={s.border} key={i}>
              <p>
                <em>{gi.source}</em>
              </p>
              <div className={s.itemList}>
                {gi.items.map(itemHash => (
                  <Item
                    itemHash={itemHash}
                    onclick={setModal}
                    setPopper={setPopper}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
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
