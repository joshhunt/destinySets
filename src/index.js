import 'app/lib/autotrack.build';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ReactModal from 'react-modal';

import './setupEnv';
import { trackEvent } from 'app/lib/analytics';
import AppRouter from './AppRouter';
import * as ls from 'app/lib/ls';
import 'app/lib/destinyAuth';
import './index.styl';

const isAuthRefreshiFrame =
  window.self !== window.top && window.parent.__HIDDEN_IFRAME_REFRESH_AUTH;

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

if (!isAuthRefreshiFrame) {
  ls.cleanUp();

  render(AppRouter);
  ReactModal.setAppElement('#root');

  ls.saveVisitCount(ls.getVisitCount() + 1);
  trackEvent('visit-count', ls.getVisitCount());

  // Webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./AppRouter', () => render(AppRouter));
  }
} else {
  console.log('Page is iFramed');
}
