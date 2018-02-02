import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// Test imports
import {login, signup} from './util/session_api_util';
import {fetchPosts} from './util/post_api_util';
import {logout} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {

  // Test
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchPosts = fetchPosts;
  // window.logout = logout;
  const root = document.getElementById('root');

  let store = {};
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, root);
});
