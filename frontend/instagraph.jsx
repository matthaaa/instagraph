import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

// Test imoprts
import configureStore from './store/store';
import {login, logout, signup} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // Testing
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login =

  // TODO: Add store as prop to Root.
  ReactDOM.render(<Root store={store}/>, root);
});
