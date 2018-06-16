import React, { Component } from 'react';
import Loading from 'app/views/Loading';

export default function makeSplitComponent(getComponent) {
  class AsyncComponent extends Component {
    state = { View: null };
    componentDidMount() {
      getComponent().then(module => {
        this.setState({ View: module.default });
      });
    }

    render() {
      if (this.state.View) {
        return <this.state.View {...this.props} />;
      }

      return <Loading>Loading...</Loading>;
    }
  }

  return AsyncComponent;
}
