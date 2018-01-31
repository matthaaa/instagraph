import {createStore, applyMiddleware} from 'redux';

const configureStore = (preloadedState = {}) => (
  createStore(
    preloadedState,
    applyMiddleware(thunk)
  );
);

export default configureStore;
