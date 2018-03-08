import React, { Component } from 'react';

import destinyAuth from 'app/lib/destinyAuth';
import Loading from 'app/views/Loading';

export default class App extends Component {
  state = {
    authReady: false
  };

  componentDidMount() {
    destinyAuth(err => {
      if (err) {
        throw err;
      }

      this.setState({ authReady: true });
    });
  }

  render() {
    if (this.state.authReady) {
      return this.props.children;
    } else {
      return <Loading>Authenticating...</Loading>;
    }
  }
}
