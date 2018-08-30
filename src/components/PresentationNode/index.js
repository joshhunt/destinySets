import React from "react";
import { toPairs, groupBy, flatMapDeep } from "lodash";
import { connect } from "react-redux";

import Item from "app/components/Item";

import s from "./styles.styl";

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

function recurseNodes(node, collectibleDefs, presentationNodeDefs) {
  return flatMapDeep(node.children.presentationNodes, childNode => {
    const childPresentationNode =
      presentationNodeDefs[childNode.presentationNodeHash];

    if (
      childPresentationNode.children.collectibles &&
      childPresentationNode.children.collectibles.length
    ) {
      return childPresentationNode.children.collectibles.map(
        c => collectibleDefs[c.collectibleHash]
      );
    }

    return recurseNodes(
      childPresentationNode,
      collectibleDefs,
      presentationNodeDefs
    );
  });
}

function collectItems(node, collectibleDefs, presentationNodeDefs) {
  const ddd = recurseNodes(node, collectibleDefs, presentationNodeDefs);
  return Object.entries(groupBy(ddd, "sourceString")).map(
    ([source, collectables]) => ({ source, collectables })
  );
}

function PresentationNode({
  node,
  setModal,
  setPopper,
  collectibleDefs,
  presentationNodeDefs
}) {
  if (!node) {
    return null;
  }

  const collectables = collectItems(
    node,
    collectibleDefs,
    presentationNodeDefs
  );

  return (
    <div className={s.root}>
      {collectables.map(col => (
        <div>
          <p>
            <em>{col.source}</em>
          </p>
          <div className={s.itemList}>
            {col.collectables.map(colItem => (
              <Item
                itemHash={colItem.itemHash}
                onclick={setModal}
                setPopper={setPopper}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // const groupedItems = toPairs(
  //   groupBy(
  //     node.children.collectibles.map(collectableEntry => {
  //       return collectibleDefs[collectableEntry.collectibleHash];
  //     }),
  //     c => c.sourceString
  //   )
  // ).map(([source, collectables]) => {
  //   return {
  //     source,
  //     items: collectables.map(c => c.itemHash)
  //   };
  // });

  // return (
  //   <div className={s.root}>
  //     <div className={s.title}>{node.displayProperties.name}</div>
  //     <div className={s.children}>
  //       {node.children &&
  //         node.children.presentationNodes.map(childNode => (
  //           <ConnectedPresentationNode
  //             hash={childNode.presentationNodeHash}
  //             setModal={setModal}
  //             setPopper={setPopper}
  //           />
  //         ))}

  //       <div className={s.ggg}>
  //         {groupedItems.map((gi, i) => (
  //           <div class={s.border} key={i}>
  //             <p>
  //               <em>{gi.source}</em>
  //             </p>
  //             <div className={s.itemList}>
  //               {gi.items.map(itemHash => (
  //                 <Item
  //                   itemHash={itemHash}
  //                   onclick={setModal}
  //                   setPopper={setPopper}
  //                 />
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
}

const mapStateToProps = (state, ownProps) => {
  return {
    collectibleDefs: state.definitions.DestinyCollectibleDefinition,
    presentationNodeDefs: state.definitions.DestinyPresentationNodeDefinition,
    node:
      state.definitions.DestinyPresentationNodeDefinition &&
      state.definitions.DestinyPresentationNodeDefinition[ownProps.hash]
  };
};

const ConnectedPresentationNode = connect(mapStateToProps)(PresentationNode);

export default ConnectedPresentationNode;
