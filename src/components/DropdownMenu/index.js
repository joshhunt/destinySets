import React, { Component } from 'react';
import cx from 'classnames';
import ClickOutside from 'react-click-outside';

import styles from './styles.styl';

export default class DropdownMenu extends Component {
  state = {
    visible: false
  };

  toggleDropdown = () => {
    this.setState({ visible: !this.state.visible });
  };

  clickedOutside = () => {
    this.state.visible && this.setState({ visible: false });
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
      <ClickOutside
        className={cx(styles.root, inline && styles.inline, className)}
        onClick={this.toggleDropdown}
        onClickOutside={this.clickedOutside}
      >
        {children}

        {this.state.visible && (
          <div className={cx(styles.content, contentClassName)}>
            {renderContent()}
          </div>
        )}
      </ClickOutside>
    );
  }
}
