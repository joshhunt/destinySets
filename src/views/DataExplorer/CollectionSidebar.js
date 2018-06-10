import React, { Component } from 'react';
import cx from 'classnames';

import s from './sidebarStyles.styl';
import cross from './cross.svg';

export default class DataView extends Component {
  render() {
    const {
      className,
      sections,
      removeItem,
      addAllFromSearch,
      copyAsArray,
      onCopyAsArrayChanged
    } = this.props;

    return (
      <div className={cx(className, s.root)}>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h4 className={s.sectionTitle}>{section.name}</h4>
            <div className={s.itemList}>
              {section.items.map(item => (
                <div className={s.item} key={item.hash}>
                  <img
                    alt=""
                    className={s.itemImage}
                    src={`https://www.bungie.net${item.displayProperties.icon}`}
                  />

                  <div className={s.itemName}>
                    {item.displayProperties.name}
                  </div>

                  <div
                    className={s.removeItem}
                    onClick={() => removeItem(item.hash)}
                  >
                    <img className={s.cross} src={cross} alt="Close" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className={s.para}>
          Items are automatically copied to your clipboard
        </p>

        {sections &&
          sections.length === 1 && (
            <p>
              <label>
                <input
                  type="checkbox"
                  value={copyAsArray}
                  onChange={onCopyAsArrayChanged}
                />{' '}
                Copy as simple array{' '}
              </label>
            </p>
          )}

        <button className={s.addAllButton} onClick={addAllFromSearch}>
          Add all from search
        </button>
      </div>
    );
  }
}
