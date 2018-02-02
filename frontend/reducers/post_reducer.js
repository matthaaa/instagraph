import {merge} from 'lodash';

import {RECEIVE_POSTS} from '../actions/post_actions';

const postReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    default:
      return oldState;
  }
};

export default postReducer;
