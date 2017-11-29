import React, { Component } from 'react';

import * as ls from 'app/lib/ls';

import styles from './styles.styl';

export default class GoogleLoginUpsell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: ls.getGoogleLoginUpsell()
    };
  }

  hide = () => {
    ls.saveGoogleLoginUpsell(true);
    this.setState({ hidden: true });
  };

  render() {
    const { children, onClick } = this.props;

    if (this.state.hidden) {
      return null;
    }

    return (
      <div className={styles.loginUpsell}>
        {children && <p className={styles.text}>{children}</p>}

        <button onClick={onClick} className={styles.button}>
          Login with Google
        </button>

        <button className={styles.closeButton} onClick={this.hide}>
          ✕
        </button>
      </div>
    );
  }
}
