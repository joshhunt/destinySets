import React, { Component } from 'react';

export default function makeSplitComponent(getComponent) {
  class AsyncComponent extends Component {
    state = { View: null };
    componentDidMount() {
      getComponent().then(module => {
        console.log('loaded component', module);
        this.setState({
          View: module.default
        });
      });
    }

    render() {
      if (this.state.View) {
        return <this.state.View {...this.props} />;
      }

      return <div>Loading...</div>;
    }
  }

  return AsyncComponent;
}
