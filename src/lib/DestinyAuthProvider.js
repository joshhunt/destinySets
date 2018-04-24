import React, { Component } from 'react';
import destinyAuth from 'app/lib/destinyAuth';

const log = require('app/lib/log')('authProvider');

export default function DestinyAuthProvider(
  WrappedComponent,
  onlyRenderWhenAuthed
) {
  return class DestinyAuthProviderWrapper extends Component {
    state = {
      isAuthenticated: false,
      authLoaded: false
    };

    componentDidMount() {
      destinyAuth((err, { isAuthenticated, isFinal }) => {
        log('Auth state update', { err, isAuthenticated, isFinal });

        if (err) {
          throw err;
        }

        this.setState({ isAuthenticated, authLoaded: isFinal });
      });
    }

    render() {
      if (onlyRenderWhenAuthed) {
        return this.state.isAuthenticated ? (
          <WrappedComponent
            {...this.props}
            authLoaded={this.state.authLoaded}
            isAuthenticated={this.state.isAuthenticated}
          />
        ) : (
          <em>Loading...</em>
        );
      }

      return (
        <WrappedComponent
          {...this.props}
          authLoaded={this.state.authLoaded}
          isAuthenticated={this.state.isAuthenticated}
        />
      );
    }
  };
}
