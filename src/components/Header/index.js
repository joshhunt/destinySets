import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import styles from './styles.styl';

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    const fallback = '{ "warlock": true, "titan": true, "hunter": true }';
    const prevFilterJSON = localStorage.getItem('filter') || fallback;
    const filter = JSON.parse(prevFilterJSON);

    this.state = {
      filterMenuOpen: false,
      filter,
    };
  }

  componentDidMount() {
    this.props.onFilterChange && this.props.onFilterChange(this.state.filter);
  }

  onFilterChange = ev => {
    const filter = {
      ...this.state.filter,
      [ev.target.name]: ev.target.checked,
    };

    localStorage.setItem('filter', JSON.stringify(filter));

    this.setState({ ...this.state, filter });
    this.props.onFilterChange && this.props.onFilterChange(filter);
  };

  toggleFilterMenu = () => {
    this.setState({
      ...this.state,
      filterMenuOpen: !this.state.filterMenuOpen,
    });
  };

  render() {
    const { legacy, bg } = this.props;
    const { filterMenuOpen } = this.state;
    const filterButtonClassName = cx(
      styles.navItem,
      styles.filterButton,
      filterMenuOpen && styles.active
    );

    const style = {};

    if (bg) {
      style.backgroundImage = `url(https://bungie.net${bg})`;
    }

    return (
      <div className={styles.root}>
        <div className={styles.header} style={style}>
          <div className={styles.main}>
            <Link to="/" className={styles.siteName}>
              Destiny Sets{' '}
              <span className={styles.version}>{legacy ? '1' : '2'}</span>
            </Link>

            <Link
              to="/"
              className={styles.navItem}
              activeClassName={styles.active}
            >
              Sets
            </Link>

            <Link
              to="/data"
              className={styles.navItem}
              activeClassName={styles.active}
            >
              Data Explorer
            </Link>
          </div>

          <div className={styles.social}>
            <a
              className={styles.socialItem}
              target="_blank"
              href="https://twitter.com/joshhunt"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              className={styles.socialItem}
              target="_blank"
              href="https://github.com/joshhunt/destinySets"
            >
              <i className="fa fa-github" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
