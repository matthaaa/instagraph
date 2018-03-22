import {merge} from 'lodash';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const _nullUser = Object.freeze({currentUser: null});

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      console.log(action);
      console.log(action.payload.user);
      return merge({}, oldState, {currentUser: action.payload.user});
    default:
      return oldState;
  }
};

export default sessionReducer;
