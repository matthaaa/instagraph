import * as PostAPIUtil from '../util/post_api_util';


export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const requestPosts = () => (
  PostAPIUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
})
