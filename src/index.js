import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './service-worker';

import './index.scss';
import 'soft-ui-library/dist/css/neumorphism-ui.css';

serviceWorker.register();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
reportWebVitals();
