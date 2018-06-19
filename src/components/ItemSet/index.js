import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import Item from 'app/components/NewItem';
import Icon from 'app/components/Icon';
import {
  makeSelectedItemDefsSelector,
  inventorySelector
} from 'app/store/selectors';
import styles from './styles.styl';

function ItemSet({ className, inventory, itemDefs, setPopper, setModal, set }) {
  const { name, description, sections, image } = set;
  return (
    <div className={cx(className, styles.root)}>
      <div className={styles.inner}>
        <div className={styles.header}>
          {image && (
            <img
              alt=""
              className={styles.headerImage}
              src={`https://www.bungie.net${image}`}
            />
          )}
          <div className={styles.headerText}>
            <div className={styles.split}>
              <div className={styles.splitMain}>
                <h3 className={styles.title}>{name}</h3>
              </div>
              <div className={styles.headerAccessory}>
                <Icon name="minus-square" />
              </div>
            </div>
            {description && <p className={styles.desc}>{description}</p>}
          </div>
        </div>

        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h4 className={styles.sectionName}>
              {section.name}{' '}
              {section.season && (
                <span className={styles.seasonLabel}>S{section.season}</span>
              )}
            </h4>

            <div className={styles.itemListWrapper}>
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
                      extended={section.bigItems}
                    />
                  ))}
                </div>
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
