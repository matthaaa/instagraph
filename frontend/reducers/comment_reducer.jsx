import {merge} from 'lodash';

import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';

const commentReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      delete newState[action.commentId];
      return newState;
    default:
      return oldState;
  }
};

export default commentReducer;
