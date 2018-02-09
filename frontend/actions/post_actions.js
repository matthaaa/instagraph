import * as PostAPIUtil from '../util/post_api_util';


export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const requestPosts = () => dispatch => (
  PostAPIUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const requestUserPosts = (userId) => dispatch => (
  PostAPIUtil.fetchUserPosts(userId).then(posts => dispatch(receivePosts(posts)))
);

export const requestPost = (postId) => dispatch => (
  PostAPIUtil.fetchPost(postId).then(payload => dispatch(receivePost(payload)))
);

// export const updatePost = (post) => dispatch => (
//   PostAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)))
// );

export const createNewPost = (post) => dispatch => (
  PostAPIUtil.createPost(post).then(payload => dispatch(receivePost(payload)))
);

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
})

export const receivePost = (payload) => ({
  type: RECEIVE_POST,
  payload,
})
