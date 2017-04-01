import React, { Component } from 'react';
import destinyAuth from 'app/lib/destinyAuth';

export default function DestinyAuthProvider(WrappedComponent, onlyRenderWhenAuthed) {

  return class DestinyAuthProviderWrapper extends Component {
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
      if (onlyRenderWhenAuthed) {
        return this.state.isAuthenticated
          ? <WrappedComponent {...this.props} isAuthenticated={this.state.isAuthenticated}/>
          : <em>Loading...</em>
      }

      return <WrappedComponent {...this.props} isAuthenticated={this.state.isAuthenticated}/>
    }
  }
}
