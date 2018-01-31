import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // TODO: Add store as prop to Root.
  ReactDOM.render(<Root />, root);
});
