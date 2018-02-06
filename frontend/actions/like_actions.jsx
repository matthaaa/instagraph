import * as LikeAPIUtil from '../util/like_api_util';
import {requestPost} from './post_actions';


export const requestLike = () => payload => (
  LikeAPIUtil.fetchLike().then(users => dispatch(receiveLike(users)))
);

export const deleteLike = (postId, id) => dispatch => (
  LikeAPIUtil.destroyLike(postId, id).then((postId, id) => dispatch(destroyLike(postId, id)))
);

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
})

const destroyLike = (postId, id) => ({
  type: DESTROY_LIKE,
  postId: postId,

})
