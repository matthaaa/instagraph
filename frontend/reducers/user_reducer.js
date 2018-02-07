import {merge} from 'lodash';

import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';
import {RECEIVE_POST} from '../actions/post_actions';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_POST:
      return action.payload.user;
    case RECEIVE_USERS:
      return merge({}, action.users);
    case RECEIVE_USER:
      return merge({}, oldState, {[action.currentUser.id]: action.currentUser});
    default:
      return oldState;
  }
};

export default userReducer;
