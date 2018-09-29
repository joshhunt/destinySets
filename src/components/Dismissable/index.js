import React, { Component } from 'react';

import Icon from 'app/components/Icon';

import s from './styles.styl';

export default class Dismissable extends Component {
  state = {
    active: true
  };

  toggle = e => {
    if (this.props.onDismissed) {
      this.props.onDismissed(e);
    }

    this.setState(prev => ({ active: !prev.active }));
  };

  render() {
    if (!this.state.active) {
      return null;
    }
    const { children, ...props } = this.props;

    return (
      <div {...props}>
        <button className={s.close} onClick={this.toggle}>
          <Icon icon="times" />
        </button>
        {children}
      </div>
    );
  }
}
