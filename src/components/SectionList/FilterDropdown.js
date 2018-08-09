import React, { Fragment, Component } from 'react';

import DropdownMenu from 'app/components/DropdownMenu';
import Icon from 'app/components/Icon';
import {
  HUNTER,
  TITAN,
  WARLOCK,
  FILTER_SHOW_COLLECTED,
  FILTER_SHOW_PS4_EXCLUSIVES,
  FILTER_SHOW_HIDDEN_SETS
} from 'app/lib/destinyEnums';

import styles from 'app/components/Header/dropdownStyles.styl';

const FILTER_NAMES = {
  [HUNTER]: 'Hunter',
  [TITAN]: 'Titan',
  [WARLOCK]: 'Warlock',
  [FILTER_SHOW_COLLECTED]: 'Collected items',
  [FILTER_SHOW_PS4_EXCLUSIVES]: 'PS4 Exclusives',
  [FILTER_SHOW_HIDDEN_SETS]: 'Hidden sets'
};

export default class FilterDropdown extends Component {
  renderContent = () => {
    const { filters, setFilterItem } = this.props;

    return (
      <Fragment>
        {Object.keys(filters).map(key => (
          <label key={key} className={styles.dropdownItem}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={filters[key]}
              onChange={ev => setFilterItem(key, ev.target.checked)}
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
