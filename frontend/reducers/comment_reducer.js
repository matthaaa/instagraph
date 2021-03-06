import {merge} from 'lodash';

import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/comment_actions';

import {RECEIVE_POST} from '../actions/post_actions';


const commentReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_POST:
      return merge({}, oldState, action.payload.comments);
    case RECEIVE_COMMENTS:
      return merge({}, oldState, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, oldState, {[action.comment.id]: action.comment});
    // case REMOVE_COMMENT:
    //   delete newState[action.commentId];
    //   return newState;
    default:
      return oldState;
  }
};

export default commentReducer;
