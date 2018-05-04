import React, { Component } from 'react';
import { Link, scrollSpy } from 'react-scroll';

import FilterDropdown from './FilterDropdown';
import styles from './styles.styl';

export default class SectionList extends Component {
  componentDidMount() {
    setTimeout(() => scrollSpy.update(), 1);
  }

  render() {
    const { setData, filters, toggleFilter } = this.props;

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

          <div>
            <FilterDropdown filters={filters} toggleFilter={toggleFilter} />
          </div>
        </div>
      </div>
    );
  }
}
