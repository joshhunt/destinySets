import 'isomorphic-fetch';
import 'babel-polyfill';
import 'app/lib/autotrack.build';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ReactModal from 'react-modal';

import './setupEnv';
import { trackEvent } from 'app/lib/analytics';
import AppRouter from './AppRouter';
import * as ls from 'app/lib/ls';
import './index.styl';

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(AppRouter);
ReactModal.setAppElement('#root');

ls.saveVisitCount(ls.getVisitCount() + 1);
trackEvent('visit-count', ls.getVisitCount());

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./AppRouter', () => render(AppRouter));
}
