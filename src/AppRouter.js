// eslint-disable no-console
import React, { Component } from 'react';
import { isString } from 'lodash';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import sets from './setData';
import DataExplorer from './views/DataExplorer';
import Diff from './views/Diff';
import Inventory from './views/Inventory';
import Debug from './views/Debug';

export default class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/debug" component={Debug} />

          <Route path="/" component={Inventory} setData={sets.allSeasons} />

          <Route
            path="/season-1"
            component={Inventory}
            setData={sets.baseGame}
          />

          <Route
            path="/curse-of-osiris"
            component={Inventory}
            setData={sets.dlc1}
          />

          <Route
            path="/strikes"
            component={Inventory}
            setData={sets.strikeGear}
          />

          <Route
            path="/all-items"
            component={Inventory}
            setData={sets.allItems}
          />

          <Route path="/data" component={DataExplorer} />
          <Route path="/data/:itemHash" component={DataExplorer} />
          <Route path="/diff" component={Diff} />
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
