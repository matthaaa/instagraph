import * as PostAPIUtil from '../util/post_api_util';


export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const requestPosts = () => dispatch => (
  PostAPIUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const requestPost = () => dispatch => (
  PostAPIUtil.fetchPost().then(post => dispatch(receivePost(post)))
);

export const createPost = (formPost) => dispatch => (
  PostAPIUtil.fetchPost().then(formPost => dispatch(receivePost(formPost)))
);

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
})

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post,
})
