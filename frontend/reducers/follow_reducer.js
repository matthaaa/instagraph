import {merge} from 'lodash';
import {RECEIVE_USER} from '../actions/user_actions';

const followReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, action.payload.follows);
    default:
      return oldState;
  }
};

export default followReducer;
