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
          {description && <p className={styles.desc}>{description}</p>}
        </div>

        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h4 className={styles.sectionName}>
              {section.name}{' '}
              {section.season && (
                <span className={styles.seasonLabel}>S{section.season}</span>
              )}
            </h4>

            {section.itemGroups.map((itemList, index2) => (
              <div className={styles.itemList} key={index2}>
                {itemList.map(itemHash => (
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
            ))}
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
