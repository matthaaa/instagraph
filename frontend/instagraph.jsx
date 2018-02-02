import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// Test imoprts
import {login, signup} from './util/session_api_util';
import {logout} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  // Test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;

  ReactDOM.render(<Root store={store}/>, root);
});
