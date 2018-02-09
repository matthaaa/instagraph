import {merge} from 'lodash';

import {RECEIVE_POSTS, RECEIVE_POST} from '../actions/post_actions';
import {RECEIVE_USER} from '../actions/user_actions';

const postReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  console.log(action);

  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, action.payload.post);
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      console.log("ACTION", action);
      return merge({}, oldState, {[action.payload.post.id]: action.payload.post});
    default:
      return oldState;
  }
};

export default postReducer;
