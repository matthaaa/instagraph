import * as CommentAPIUtil from '../util/comment_api_util';
import {updatePost} from './post_actions';


export const requestComment = (comment) => dispatch => {
  console.log(comment);
  return (
  CommentAPIUtil.fetchComment(comment).then(comment => dispatch(updatePost(comment.post)))
)};

export const deleteLike = (comment) => dispatch  => (
  CommentAPIUtil.destroyComment(comment).then(comment => dispatch(updatePost(comment.post)))
);
