// eslint-disable no-console
import React, { Component } from 'react';
import { isString } from 'lodash';
import { Redirect, Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './views/App';
import Diff from './views/Diff';
import Inventory from './views/Inventory';
import Triumphs from './views/Triumphs';
import ItemPage from './views/ItemPage';
import SolsticeOfHeroes from './views/SolsticeOfHeroes';
import DataExplorerRedirect from './views/DataExplorerRedirect';

import store from './store';
import sets from './setData';

export default class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={App}>
            <Route path="/solstice-2019" component={SolsticeOfHeroes} />

            <Route path="/" component={Inventory} setData={sets.yearTwo} />

            <Route
              path="/year-1"
              component={Inventory}
              setData={sets.yearOne}
            />

            <Route
              path="/year-2"
              component={Inventory}
              setData={sets.yearTwo}
            />

            <Route path="/base" component={Inventory} setData={sets.baseGame} />

            <Route
              path="/catalysts"
              component={Inventory}
              setData={sets.catalysts}
              refreshOnInterval
              preventFiltering
            />

            <Route
              path="/collections"
              component={Inventory}
              setData={sets.collections}
              isCollections
            />

            <Route
              path="/strike-gear"
              component={Inventory}
              setData={sets.strikeGear}
            />

            <Route
              path="/all-items"
              component={Inventory}
              setData={sets.allItems}
            />

            <Route
              path="/all-items-deluxe"
              component={Inventory}
              setData={sets.allItemsDeluxe}
            />

            <Route refreshOnInterval path="/triumphs" component={Triumphs} />
            <Route
              refreshOnInterval
              path="/triumphs/:presentationNodeA"
              component={Triumphs}
            />
            <Route
              refreshOnInterval
              path="/triumphs/:presentationNodeA/:presentationNodeB"
              component={Triumphs}
            />
            <Route
              refreshOnInterval
              path="/triumphs/:presentationNodeA/:presentationNodeB/:presentationNodeC"
              component={Triumphs}
            />

            <Route path="/item/:itemHash" components={ItemPage} />

            <Route path="/data(/:itemHash)" component={DataExplorerRedirect} />
            <Route path="/diff" component={Diff} />

            <Redirect from="/curse-of-osiris" to="year-1" />
            <Redirect from="/warmind" to="year-1" />
            <Redirect from="/all-seasons" to="year-1" />
          </Route>
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
