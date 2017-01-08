import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

// import App from './views/App';
// import Home from './views/Home';
import CurrentActivity from './views/CurrentActivity';
import AllItems from './views/AllItems';

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={CurrentActivity} />
        <Route path="/all-items" component={AllItems} />

        {/*<Route component={App}>
          <Route path="/raid" component={Home} />
        </Route>*/}
      </Router>
    );
  }
}
