// eslint-disable no-console
import React, { Component } from 'react';
import { isString } from 'lodash';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './views/App';
import Diff from './views/Diff';
import Inventory from './views/Inventory';
import Debug from './views/Debug';

import store from './store';
import sets from './setData';

import makeSplitComponent from './makeSplitComponent';

const DataExplorer = makeSplitComponent(() =>
  import(/* webpackChunkName: "DataExplorer" */ './views/DataExplorer')
);

const InventoryRoute = ({ path, exact, setData }) => (
  <Route
    path={path}
    exact={exact}
    render={props => <Inventory {...props} setData={setData} />}
  />
);

export default class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App>
            <Switch>
              <InventoryRoute path="/" exact setData={sets.baseGame} />
              <InventoryRoute path="/curse-of-osiris" setData={sets.dlc1} />
              <InventoryRoute path="/warmind" setData={sets.dlc2} />
              <InventoryRoute path="/catalysts" setData={sets.catalysts} />
              <InventoryRoute path="/strike-gear" setData={sets.strikeGear} />
              <InventoryRoute path="/all-seasons" setData={sets.allSeasons} />
              <InventoryRoute path="/all-items" setData={sets.allItems} />

              <InventoryRoute
                path="/all-items-deluxe"
                setData={sets.allItemsDeluxe}
              />

              <Route path="/data" component={DataExplorer} />
              <Route path="/data/:itemHash" component={DataExplorer} />

              <Route path="/diff" component={Diff} />
              <Route path="/debug" component={Debug} />
            </Switch>
          </App>
        </BrowserRouter>
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
