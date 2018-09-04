import React, { Component } from 'react';
import cx from 'classnames';
import { Link, scrollSpy } from 'react-scroll';

import Search from 'app/components/Search';

import FilterDropdown from './FilterDropdown';
import styles from './styles.styl';

export default class SectionList extends Component {
  componentDidMount() {
    setTimeout(() => scrollSpy.update(), 1);
  }

  render() {
    const {
      setData,
      filters,
      setFilterItem,
      searchValue,
      onSearchChange
    } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.fixed}>
          <ul className={styles.list}>
            {setData.map(({ name, slug }) => (
              <Link
                spy={true}
                smooth={true}
                to={slug}
                offset={-95}
                className={styles.item}
                activeClass={styles.itemActive}
                key={slug}
              >
                {name}
              </Link>
            ))}
          </ul>

          <Search value={searchValue} onChange={onSearchChange} />

          <div
            className={cx(
              styles.filter,
              searchValue && searchValue.length > 2 && styles.disabled
            )}
          >
            <FilterDropdown filters={filters} setFilterItem={setFilterItem} />
          </div>
        </div>
      </div>
    );
  }
}
