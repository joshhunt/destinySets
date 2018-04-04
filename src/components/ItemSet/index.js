import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import Item from 'app/components/NewItem';
import {
  makeSelectedItemDefsSelector,
  inventorySelector
} from 'app/store/selectors';
import styles from './styles.styl';

function ItemSet({
  className,
  name,
  description,
  sections,
  inventory,
  itemDefs,
  setPopper,
  setModal
}) {
  return (
    <div className={cx(className, styles.root)}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h3 className={styles.title}>{name}</h3>
          {description && <p>{description}</p>}
        </div>

        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h4 className={styles.sectionName}>{section.name}</h4>

            <div className={styles.itemList}>
              {section.items.map(itemHash => (
                <Item
                  key={itemHash}
                  className={styles.item}
                  itemHash={itemHash}
                  item={itemDefs[itemHash]}
                  setPopper={setPopper}
                  inventoryEntry={inventory && inventory[itemHash]}
                  onItemClick={setModal}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  const selectedItemDefsSelector = makeSelectedItemDefsSelector();
  return (state, ownProps) => {
    return {
      inventory: inventorySelector(state),
      itemDefs: selectedItemDefsSelector(state, ownProps)
    };
  };
};

export default connect(mapStateToProps)(ItemSet);
