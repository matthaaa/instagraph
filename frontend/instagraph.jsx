import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

// Test imoprts
import {requestLogin, requestLogout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // Testing
  window.login = requestLogin;
  window.logout = requestLogout;

  // TODO: Add store as prop to Root.
  ReactDOM.render(<Root />, root);
});
