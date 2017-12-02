import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Gearsets from './views/Gearsets';
import DataExplorer from './views/DataExplorer';

const onEnter = () => {
  window.rg4js('trackEvent', { type: 'pageView', path: location.pathname });
};

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route
          path="/"
          component={Gearsets}
          variation="sets"
          onEnter={onEnter}
        />
        <Route
          path="/all-items"
          component={Gearsets}
          variation="allItems"
          onEnter={onEnter}
        />
        <Route path="/data" component={DataExplorer} onEnter={onEnter} />
      </Router>
    );
  }
}
