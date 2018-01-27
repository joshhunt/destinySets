import 'isomorphic-fetch';
import 'app/lib/autotrack.build';

import React from 'react';
import ReactDOM from 'react-dom';
import { trackEvent } from 'app/lib/analytics';

import AppRouter from './AppRouter';
import * as ls from 'app/lib/ls';
import './index.styl';

window.DESTINYSETS_ENV = 'prod';
if (window.location.href.includes('localhost')) {
  window.DESTINYSETS_ENV = 'dev';
}

if (localStorage.forceDestinySetsEnv) {
  console.warn(
    'WARNING: Forcing window.DESTINYSETS_ENV to ' +
      localStorage.forceDestinySetsEnv,
  );
  window.DESTINYSETS_ENV = localStorage.forceDestinySetsEnv;
}

if (window.DESTINYSETS_ENV !== 'prod') {
  localStorage.debug = localStorage.debug || 'destinySets:*';
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));

ls.saveVisitCount(ls.getVisitCount() + 1);
trackEvent('visit-count', ls.getVisitCount());
