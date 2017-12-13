import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import 'app/lib/autotrack.build';

import AppRouter from './AppRouter';
import './index.styl';

window.DESTINYSETS_ENV = 'prod';
if (window.location.href.includes('localhost')) {
  window.DESTINYSETS_ENV = 'dev';
}

if (localStorage.forceDestinySetsEnv) {
  console.warn(
    'WARNING: Forcing window.DESTINYSETS_ENV to ' +
      localStorage.forceDestinySetsEnv
  );
  window.DESTINYSETS_ENV = localStorage.forceDestinySetsEnv;
}

if (window.DESTINYSETS_ENV !== 'prod') {
  localStorage.debug = localStorage.debug || 'destinySets:*';
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
