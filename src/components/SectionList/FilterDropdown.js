import React, { Fragment, Component } from 'react';

import DropdownMenu from 'app/components/DropdownMenu';
import Icon from 'app/components/Icon';
import {
  HUNTER,
  TITAN,
  WARLOCK,
  FILTER_SHOW_COLLECTED,
  FILTER_SHOW_PS4_EXCLUSIVES
} from 'app/lib/destinyEnums';

import styles from 'app/components/Header/dropdownStyles.styl';

const FILTER_NAMES = {
  [HUNTER]: 'Hunter',
  [TITAN]: 'Titan',
  [WARLOCK]: 'Warlock',
  [FILTER_SHOW_COLLECTED]: 'Collected items',
  [FILTER_SHOW_PS4_EXCLUSIVES]: 'PS4 Exclusives'
};

export default class FilterDropdown extends Component {
  renderContent = () => {
    const { filters, toggleFilter: _toggleFilter } = this.props;

    const toggleFilter = (...args) => {
      console.log('calling toggle filter', args);
      const err = new Error('test');
      console.log(err.stack);
      _toggleFilter(...args);
    };

    return (
      <Fragment>
        {Object.keys(filters).map(key => (
          <label
            key={key}
            className={styles.dropdownItem}
            onClick={() => toggleFilter(key)}
          >
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={filters[key]}
              readOnly
            />{' '}
            {FILTER_NAMES[key]}
          </label>
        ))}
      </Fragment>
    );
  };

  render() {
    return (
      <DropdownMenu
        stayOpen
        inline={this.props.inline}
        className={styles.root}
        renderContent={this.renderContent}
        contentClassName={styles.dropdownWide}
      >
        <div className={styles.main}>Filters</div>

        <div className={styles.fakeButton}>
          <Icon icon="chevron-down" />
        </div>
      </DropdownMenu>
    );
  }
}
