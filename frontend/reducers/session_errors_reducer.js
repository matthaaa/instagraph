import {merge} from 'lodash';
import {RECEIVE_ERRORS, RECEIVE_USER} from '../actions/session_actions';

export default (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge([], oldState, action.errors);
    case RECEIVE_USER:
      return null;
    default:
      return oldState;
  }
};
