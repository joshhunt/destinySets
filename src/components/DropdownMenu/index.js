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
    return (
      <div
        className={cx(styles.root, this.props.className)}
        onClick={this.toggleDropdown}
      >
        {this.props.children}

        {this.state.visible && (
          <div className={cx(styles.content, this.props.contentClassName)}>
            {this.props.renderContent()}
          </div>
        )}
      </div>
    );
  }
}
