import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import Modal from 'app/components/Modal';
import Item from 'app/components/Item';

import s from './styles.styl';

function ItemModal({ isOpen, itemDefinitions, addItems }) {
  const [itemSearchInput, setItemSearchInput] = useState(null);

  function itemSearchOnChange(ev) {
    setItemSearchInput(ev.target.value);
  }

  function commitItems() {
    addItems(foundItems.map(i => i.hash));
  }

  const allItems = useMemo(() => {
    return Object.values(itemDefinitions || {});
  }, [itemDefinitions]);

  const foundItems = useMemo(() => {
    const searchAsNumber = parseInt(itemSearchInput, 10);

    return allItems.filter(item => {
      return item.hash === searchAsNumber;
    });
  }, [allItems, itemSearchInput]);

  console.log({ itemSearchInput, foundItems });

  return (
    <Modal isOpen={isOpen}>
      <div className={s.root}>
        <h2>Add item</h2>

        <input
          onChange={itemSearchOnChange}
          value={itemSearchInput}
          placeholder="Item hash"
        />

        {foundItems && foundItems.length && (
          <div>
            {foundItems.map(item => (
              <Item extended={true} itemHash={item.hash} />
            ))}
          </div>
        )}

        {foundItems.length > 0 && (
          <button onClick={commitItems}>Add item</button>
        )}
      </div>
    </Modal>
  );
}

function mapStateToProps(state) {
  const itemDefinitions = state.definitions.DestinyInventoryItemDefinition;

  return { itemDefinitions };
}

export default connect(mapStateToProps)(ItemModal);
