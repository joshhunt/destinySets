import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

// import App from './views/App';
// import Home from './views/Home';
import CurrentStrike from './views/CurrentStrike';
import RaidDrops from './views/RaidDrops';
import AllItems from './views/AllItems';

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={CurrentStrike} />
        <Route path="/raid" component={RaidDrops} />
        <Route path="/items" component={AllItems} />
      </Router>
    );
  }
}
