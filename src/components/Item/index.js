import React, { Component } from 'react';
import cx from 'classnames';

import styles from './styles.styl';

class FancyImage extends Component {
  state = {
    loaded: false,
  };

  onLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { className, ...props } = this.props;
    const styles = {
      opacity: 0,
      transition: 'opacity 300ms ease-in-out',
    };

    if (this.state.loaded) {
      styles.opacity = 1;
    }

    return (
      <img
        className={cx(className)}
        style={styles}
        {...props}
        onLoad={this.onLoad}
      />
    );
  }
}

export default function Item({ className, onClick, item, dev, small, tiny }) {
  const dtrLink = `http://db.destinytracker.com/d2/en/items/${item.hash}`;

  const dtrProps = {
    href: dtrLink,
    target: '_blank',
    'data-dtr-tooltip': 'no-show',
  };

  const rootClassName = cx(styles.root, {
    [styles.small]: small,
    [styles.tiny]: tiny,
    [styles.obtained]: item.$obtained,
    [styles.forSale]: item.forSale,
  });

  const { name, icon } = item.displayProperties;

  return (
    <div
      onClick={onClick}
      className={cx(rootClassName, className)}
      data-class={item.dClass}
    >
      <div className={styles.accessory}>
        <a className={styles.link} {...dtrProps}>
          <img
            className={styles.image}
            src={`https://www.bungie.net${icon}`}
            role="presentation"
          />
        </a>
      </div>

      <div className={styles.main}>
        <div className={styles.name}>
          <a className={styles.link} {...dtrProps}>
            {name}
          </a>
        </div>
        <div className={styles.type}>
          {dev ? item.itemHash : item.itemTypeName || item.itemTypeDisplayName}
        </div>
      </div>
    </div>
  );
}
