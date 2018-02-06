import * as CommentAPIUtil from '../util/comment_api_util';
import {updatePost} from './post_actions';


export const requestComment = (comment) => dispatch => (
  CommentAPIUtil.fetchComment(comment).then(payload => dispatch(updatePost(payload)))
);

export const deleteLike = (comment) => dispatch  => (
  CommentAPIUtil.destroyComment(comment).then(payload => dispatch(updatePost(payload)))
);
