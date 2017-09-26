import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Drops from './views/Drops';
import Gearsets from './views/Gearsets';
import DataExplorer from './views/DataExplorer';

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Drops} variation="raid" />
        <Route path="/gearsets" component={Gearsets} />
        <Route path="/data" component={DataExplorer} />
      </Router>
    );
  }
}
