import React, { Component } from 'react';
import destinyAuth from 'app/lib/destinyAuth';

export default function DestinyAuthProvider(WrappedComponent) {

  return class PP extends Component {
    state = {
      isAuthenticated: false,
    };

    componentDidMount() {
      destinyAuth((err, isAuthenticated) => {
        console.log('DestinyAuthProvider', { err, isAuthenticated })
        if (err) {
          throw err;
        }

        this.setState({ isAuthenticated });
      });
    }

    render() {
      return <WrappedComponent {...this.props} isAuthenticated={this.state.isAuthenticated}/>
    }
  }
}
