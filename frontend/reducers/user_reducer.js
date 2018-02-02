import {merge} from 'lodash';

import {RECEIVE_USERS} from '../actions/user_actions';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_USERS:
      return merge({}, action.users);
    case RECEIVE_USER:
      return merge({}, oldState, {[action.user.id]: action.user});
    default:
      return oldState;
  }
};

export default userReducer;
