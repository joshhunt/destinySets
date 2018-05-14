import React from 'react';
import { groupBy } from 'lodash';

import Item from 'app/components/NewItem';

import s from './vendorStyles.styl';

export default function Vendor({ data, defs, onItemClick }) {
  const itemsByDisplayCategory = groupBy(data.itemList, 'displayCategoryIndex');

  return (
    <div>
      <h3>Items</h3>
      {data.displayCategories.map((cat, catIndex) => (
        <div key={cat.identifier}>
          <h4 className={s.categoryHeading}>{cat.displayProperties.name}</h4>

          <div className={s.itemList}>
            {itemsByDisplayCategory[catIndex].map(vendorItem => (
              <Item
                onClick={ev => onItemClick(defs.item[vendorItem.itemHash], ev)}
                key={vendorItem.itemHash}
                className={s.item}
                item={defs.item[vendorItem.itemHash]}
                extended
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
