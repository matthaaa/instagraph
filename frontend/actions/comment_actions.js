import * as CommentAPIUtil from '../util/comment_api_util';
import {receivePost} from './post_actions';


export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const requestComments = () => dispatch => (
  CommentAPIUtil.fetchComments().then(comments => dispatch(receiveComments(comments)))
);

export const addComment = (comment) => dispatch => (
  CommentAPIUtil.createComment(comment).then(post => dispatch(receivePost(post)))
);

export const deleteComment = (comment) => dispatch  => (
  CommentAPIUtil.destroyComment(comment).then(comment => dispatch(removeComment(comment)))
);

const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments,
})

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
})

const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment,
})