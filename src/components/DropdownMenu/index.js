import React, { Component } from 'react';
import cx from 'classnames';

import styles from './styles.styl';

export default class DropdownMenu extends Component {
  state = {
    visible: false
  };

  toggleDropdown = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const {
      inline,
      children,
      className,
      contentClassName,
      renderContent
    } = this.props;

    return (
      <div
        className={cx(styles.root, inline && styles.inline, className)}
        onClick={this.toggleDropdown}
      >
        {children}

        {this.state.visible && (
          <div className={cx(styles.content, contentClassName)}>
            {renderContent()}
          </div>
        )}
      </div>
    );
  }
}
