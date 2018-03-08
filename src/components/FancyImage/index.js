import React, { Component } from 'react';

export default class FancyImage extends Component {
  state = {
    loaded: false
  };

  onLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { className, ...props } = this.props;
    const styles = {
      opacity: 0,
      transition: 'opacity 300ms ease-in-out'
    };

    if (this.state.loaded) {
      styles.opacity = 1;
    }

    return (
      <img
        alt=""
        className={className}
        style={styles}
        {...props}
        onLoad={this.onLoad}
      />
    );
  }
}
