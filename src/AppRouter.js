import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './views/App';
import Home from './views/Home';

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory} component={App}>
        <Route component={App}>
          <Route path="/" component={Home} />
        </Route>
      </Router>
    );
  }
}
