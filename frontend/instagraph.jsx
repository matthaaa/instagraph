import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// Test imports
import {login, signup} from './util/session_api_util';
import {fetchPosts} from './util/post_api_util';
import {logout} from './actions/session_actions';

import {createPost} from './actions/post_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store = {};
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Test
  // window.fetchPosts = fetchPosts;
  window.getState = store.getState;
  window.logout = logout;
  window.dispatch = store.dispatch;

  window.createPost = createPost;

  ReactDOM.render(<Root store={store}/>, root);
});
