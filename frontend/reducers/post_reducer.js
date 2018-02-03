import {merge} from 'lodash';

import {RECEIVE_POSTS, RECEIVE_POST} from '../actions/post_actions';

const postReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      return merge({}, oldState, {[action.post.id]: action.post});
    default:
      return oldState;
  }
};

export default postReducer;
