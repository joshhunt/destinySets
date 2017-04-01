import React, { Component } from 'react';
import cx from 'classnames';

import styles from './styles.styl';

class FancyImage extends Component {
  state = {
    loaded: false,
  };

  onLoad = () => {
    this.setState({ loaded: true });
  }

  render() {
    const { className, ...props } = this.props;
    const styles = {
      opacity: 0,
      transition: 'opacity 300ms ease-in-out',
    }

    if (this.state.loaded) {
      styles.opacity = 1;
    }

    return <img className={cx(className)} style={styles} {...props} onLoad={this.onLoad} />
  }
}

export default function Item({ item, dev, small, tiny }) {
  const dtrLink = 'http://db.destinytracker.com/items/' + item.itemHash;
  const dtrProps = {
    href: dtrLink,
    'data-dtr-tooltip': dev ? 'no-show' : undefined,
  };

  const rootClassName = cx(
    styles.filterRoot,
    small && styles.small,
    tiny && styles.tiny
  );

  return (
    <div className={rootClassName} data-class={item.dClass}>
      <div className={cx(styles.root, { [styles.obtained]: item.owned})} key={item.itemHash}>
        <div className={styles.accessory}>
          <a className={styles.link} {...dtrProps}>
            <img className={styles.image} src={item.icon} role="presentation" />
          </a>
        </div>

        <div className={styles.main}>
          <div className={styles.name}>
            <a className={styles.link} {...dtrProps}>{item.itemName}</a>
          </div>
          <div className={styles.type}>
            {dev ? item.itemHash : item.itemTypeName}
          </div>
        </div>

      </div>
    </div>
  )
}
