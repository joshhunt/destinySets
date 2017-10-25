import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Gearsets from './views/Gearsets';
import DataExplorer from './views/DataExplorer';

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Gearsets} variation="sets" />
        <Route path="/all-items" component={Gearsets} variation="allItems" />
        <Route path="/data" component={DataExplorer} />
      </Router>
    );
  }
}
