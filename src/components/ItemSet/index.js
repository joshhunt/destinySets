import React from 'react';
import { connect } from 'react-redux';

import Item from 'app/components/NewItem';
import { makeSelectedItemDefsSelector } from './selectors';
import styles from './styles.styl';

function ItemSet({ name, sections, itemDefs }) {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{name}</h3>

      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h4 className={styles.sectionName}>{section.name}</h4>

          <div className={styles.itemList}>
            {section.items.map(itemHash => (
              <Item
                key={itemHash}
                className={styles.item}
                hash={itemHash}
                item={itemDefs[itemHash]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = () => {
  const selectedItemDefsSelector = makeSelectedItemDefsSelector();
  return (state, ownProps) => {
    return {
      hello: 'world',
      itemDefs: selectedItemDefsSelector(state, ownProps)
    };
  };
};

export default connect(mapStateToProps)(ItemSet);
