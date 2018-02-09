import {merge} from 'lodash';

import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';
import {RECEIVE_POST} from '../actions/post_actions';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_POST:
      return merge({}, oldState, action.payload.user);
    case RECEIVE_USERS:
      return merge({}, action.users);
    case RECEIVE_USER:
      const newUser = {[action.payload.user.id]: action.payload.user}
      return merge({}, newUser);
    default:
      return oldState;
  }
};

export default userReducer;
