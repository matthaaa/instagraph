import * as CommentAPIUtil from '../util/comment_api_util';
import {updatePost} from './post_actions';


export const requestComment = (comment) => dispatch => {
  console.log(comment);
  return (
  CommentAPIUtil.fetchComment(comment).then(comment => dispatch(receiveComment(comment)))
)};

export const deleteComment = (comment) => dispatch  => (
  CommentAPIUtil.destroyComment(comment).then(comment => dispatch(removeComment(comment)))
);

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
})

const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment,
})
