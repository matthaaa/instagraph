import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// Test imoprts
import {login, logout, signup} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {sessions: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;

  } else {
    store = configureStore();
  }

  // Testing
  const root = document.getElementById('root');
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;

  ReactDOM.render(<Root store={store}/>, root);
});
