import React, { Component } from 'react';
import cx from 'classnames';

import {
  getHideGoogleLoginTooltip,
  saveHideGoogleLoginTooltip
} from 'app/lib/ls';
import Icon from 'app/components/Icon';

import styles from './styles.styl';

export default class GoogleAuthButton extends Component {
  state = {
    showTooltip: false
  };

  componentDidMount() {
    this.setState({
      showTooltip: !getHideGoogleLoginTooltip()
    });
  }

  hideTooltip = () => {
    saveHideGoogleLoginTooltip(true);
    this.setState({ showTooltip: false });
  };

  render() {
    const { showTooltip } = this.state;

    return (
      <div className={styles.root}>
        <button
          className={cx(styles.button, !showTooltip && styles.subtle)}
          onClick={this.props.onClick}
        >
          <Icon icon="google-drive" brand /> Connect Google Drive
        </button>

        {showTooltip && (
          <div className={styles.tooltip} onClick={this.hideTooltip}>
            <Icon icon="times" className={styles.closeButton} />
            Sync your inventory with Google Drive to track dismantled items.
          </div>
        )}
      </div>
    );
  }
}
