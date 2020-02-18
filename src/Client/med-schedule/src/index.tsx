import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

const getAuthToken = (): string => {
  return 'asdf';
};

axios.interceptors.request.use(config => {
  // ensure we have auth token
  config.headers = config.headers || {};
  config.headers.Authorization = `Bearer ${getAuthToken()}`

  return config;
});


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
