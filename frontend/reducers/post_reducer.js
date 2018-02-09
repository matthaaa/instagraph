import {merge} from 'lodash';

import {RECEIVE_POSTS, RECEIVE_POST} from '../actions/post_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {REMOVE_COMMENT} from '../actions/comment_actions';

const postReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, action.payload.post);
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      return merge({}, oldState, {[action.payload.post.id]: action.payload.post});
    case REMOVE_COMMENT:
      let newState = merge({}, oldState);
      newState[action.payload.post.id] = action.payload.post;
      return newState;
    default:
      return oldState;
  }
};

export default postReducer;
