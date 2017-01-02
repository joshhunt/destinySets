import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './AppRouter.js';
import './index.styl';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
