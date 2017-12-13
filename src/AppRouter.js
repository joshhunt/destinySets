import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import sets from 'app/setData';
import Gearsets from './views/Gearsets';
import DataExplorer from './views/DataExplorer';

const onEnter = () => {
  window.rg4js &&
    window.rg4js('trackEvent', {
      type: 'pageView',
      path: window.location.pathname
    });
};

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route
          path={sets[0].path}
          component={Gearsets}
          setData={sets[0].setData}
          onEnter={onEnter}
        />

        <Route
          path={sets[1].path}
          component={Gearsets}
          setData={sets[1].setData}
          onEnter={onEnter}
        />

        <Route
          path={sets[2].path}
          component={Gearsets}
          setData={sets[2].setData}
          onEnter={onEnter}
        />

        <Route path="/data" component={DataExplorer} onEnter={onEnter} />
      </Router>
    );
  }
}
