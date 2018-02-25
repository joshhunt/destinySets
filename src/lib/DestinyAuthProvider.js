import React, { Component } from 'react';
import destinyAuth from 'app/lib/destinyAuth';

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
      destinyAuth((err, isAuthenticated) => {
        if (err) {
          throw err;
        }

        this.setState({ isAuthenticated, authLoaded: true });
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
