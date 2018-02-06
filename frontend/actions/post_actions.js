import * as PostAPIUtil from '../util/post_api_util';


export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const requestPosts = () => dispatch => (
  PostAPIUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const requestPost = (post) => dispatch => (
  PostAPIUtil.fetchPost().then(post => dispatch(receivePost(post.id)))
);

export const updatePost = (id) => dispatch => (
  PostAPIUtil.updatePost(id).then(postId => dispatch(receivePost(postId)))
);

export const createNewPost = (post) => dispatch => (
  PostAPIUtil.createPost(post).then(post => dispatch(receivePost(post.id)))
);

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
})

const receivePost = (postId) => ({
  type: RECEIVE_POST,
  postId,
})
