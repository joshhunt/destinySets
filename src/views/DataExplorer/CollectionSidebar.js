import React, { Component } from 'react';
import cx from 'classnames';

import s from './sidebarStyles.styl';
import cross from './cross.svg';

export default class DataView extends Component {
  render() {
    const { className, sections, removeItem } = this.props;

    return (
      <div className={cx(className, s.root)}>
        {sections.map(section => (
          <div>
            <h4 className={s.sectionTitle}>{section.title}</h4>
            <div className={s.itemList}>
              {section.items.map(item => (
                <div className={s.item}>
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
      </div>
    );
  }
}
