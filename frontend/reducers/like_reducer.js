import {merge} from 'lodash';
import {RECEIVE_POST} from '../actions/post_actions';

const likeReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_POST:
      return action.payload.likes;
    default:
      return oldState;
  }
};

export default likeReducer;
