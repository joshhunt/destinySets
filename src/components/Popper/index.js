import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Popper from 'popper.js';

export default class PopperWrapper extends Component {
  state = { el: null };

  componentDidMount() {
    const el = document.createElement('div');
    document.body.appendChild(el);
    this.setState({ el });
  }

  componentWillUnmount() {
    this.popper.destroy();
    this.state.el && document.body.removeChild(this.state.el);
  }

  setPosition = () => {
    this.popper = new Popper(this.props.element, this.ref, {
      placement: 'right',
      modifiers: {
        applyStyle: { enabled: false },
        applyReactStyle: {
          enabled: true,
          fn: data =>
            this.setState({
              style: { ...data.styles, pointerEvents: 'none' },
              arrowStyles: data.arrowStyles
            }),
          order: 900
        }
      }
    });

    window.lastPopper = this.popper;

    window.requestAnimationFrame(() => {
      this.popper.update();
    });
  };

  getRef = ref => {
    this.ref = ref;
    if (this.ref) {
      this.setPosition();
    }
  };

  render() {
    const { el, style, arrowStyles } = this.state;
    if (!el) {
      return null;
    }

    return createPortal(
      <div ref={this.getRef} style={{ ...style, zIndex: 99999 }}>
        {this.props.children}
        <div style={arrowStyles} />
      </div>,
      this.state.el
    );
  }
}
