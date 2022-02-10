// eslint-disable no-console
import React, { useEffect } from 'react';
import { isString } from 'lodash';
import { Redirect, Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './views/App';
import Inventory from './views/Inventory';
import ItemPage from './views/ItemPage';
import Triumphs from './views/Triumphs';
import SolsticeOfHeroes from './views/SolsticeOfHeroes';
import Mods from './views/Mods';
import DataExplorerRedirect from './views/DataExplorerRedirect';

import store from './store';
import sets from './setData';
import * as ls from './lib/ls';

export default function AppRouter() {
  useEffect(() => {
    const loc = browserHistory.getCurrentLocation();
    ls.setLastPage(loc.pathname);
    browserHistory.listen(ev => ls.setLastPage(ev.pathname));
  }, []);

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={App}>
          <Redirect from="/solstice-2019" to="/solstice" />
          <Redirect from="/solstice-2020" to="/solstice" />
          <Route path="/solstice" component={SolsticeOfHeroes} />

          <Route path="/" component={Inventory} setData={sets.yearFive} />

          <Route path="/base" component={Inventory} setData={sets.baseGame} />

          <Redirect from="/mods-new" to="/mods" />
          <Redirect from="/mods-sorted" to="/mods" />
          <Route path="/mods" component={Mods} setData={sets.modsGenerated} />

          <Route
            path="/mods-classic"
            component={Inventory}
            setData={sets.modsGenerated}
          />

          <Route path="/year-1" component={Inventory} setData={sets.yearOne} />

          <Route path="/year-2" component={Inventory} setData={sets.yearTwo} />

          <Route
            path="/year-3"
            component={Inventory}
            setData={sets.yearThree}
          />

          <Route path="/year-4" component={Inventory} setData={sets.yearFour} />

          <Route path="/year-5" component={Inventory} setData={sets.yearFive} />

          <Route
            path="/eververseandevents"
            component={Inventory}
            setData={sets.eververseAndEvents}
          />

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

          <Redirect from="/curse-of-osiris" to="year-1" />
          <Redirect from="/warmind" to="year-1" />
          <Redirect from="/all-seasons" to="year-1" />
        </Route>
      </Router>
    </Provider>
  );
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
