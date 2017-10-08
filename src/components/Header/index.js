import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import styles from './styles.styl';

export default class Header extends React.Component {
  render() {
    const { className, bg } = this.props;

    const style = {};

    if (bg) {
      style.backgroundImage = `url(https://bungie.net${bg})`;
    }

    return (
      <div className={cx(className, styles.root)}>
        <div className={styles.header} style={style}>
          <div className={styles.main}>
            <Link to="/" className={styles.siteName}>
              Destiny Sets <span className={styles.version}>2</span>
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
