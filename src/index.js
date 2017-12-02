import 'isomorphic-fetch';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './AppRouter';
import './index.styl';

import 'autotrack/lib/plugins/clean-url-tracker';
import 'autotrack/lib/plugins/url-change-tracker';

window.DESTINYSETS_ENV = 'prod';
if (location.href.includes('localhost')) {
  window.DESTINYSETS_ENV = 'dev';
} else if (location.href.includes('beta')) {
  window.DESTINYSETS_ENV = 'beta';
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
