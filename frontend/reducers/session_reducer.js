import {merge} from 'lodash';

import {RECEIVE_USER} from '../actions/session_actions';

const _nullUser = Object.freeze({currentUser: null});

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);

  console.error(action);

  switch(action.type) {
    case RECEIVE_USER:
      const currentUser = action.currentUser;
      return merge({}, {currentUser});
    default:
      return oldState;
  }
};

export default sessionReducer;
