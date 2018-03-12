// eslint-disable no-console
import React, { Component } from 'react';
import { isString } from 'lodash';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import sets from './setData';
import Gearsets from './views/Gearsets';
import DataExplorer from './views/DataExplorer';
import Diff from './views/Diff';
import Inventory from './views/Inventory';

export default class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route
            path={sets[0].path}
            component={Gearsets}
            setData={sets[0].setData}
          />

          <Route
            path={sets[1].path}
            component={Gearsets}
            setData={sets[1].setData}
          />

          <Route
            path={sets[2].path}
            component={Gearsets}
            setData={sets[2].setData}
          />

          <Route
            path={sets[3].path}
            component={Gearsets}
            setData={sets[3].setData}
          />

          <Route path="/data" component={DataExplorer} />
          <Route path="/data/:itemHash" component={DataExplorer} />
          <Route path="/diff" component={Diff} />

          <Route
            path="/inventory"
            component={Inventory}
            setData={sets[1].setData}
          />
        </Router>
      </Provider>
    );
  }
}

/**
 * Warning from React Router, caused by react-hot-loader.
 * The warning can be safely ignored, so filter it from the console.
 * Otherwise you'll see it every time something changes.
 * See https://github.com/gaearon/react-hot-loader/issues/298
 */
if (module.hot) {
  const orgError = console.error;
  console.error = (...args) => {
    if (
      args &&
      args.length === 1 &&
      isString(args[0]) &&
      args[0].indexOf('You cannot change <Router routes>;') > -1
    ) {
      // React route changed
    } else {
      // Log the error as normally
      orgError.apply(console, args);
    }
  };
}
