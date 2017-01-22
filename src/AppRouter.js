import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import CurrentStrike from './views/CurrentStrike';
import RaidDrops from './views/RaidDrops';
import Drops from './views/Drops';
import AllItems from './views/AllItems';

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Drops} variation="strike" />
        <Route path="/raid" component={Drops} variation="raid" />
        <Route path="/items" component={AllItems} />
      </Router>
    );
  }
}
