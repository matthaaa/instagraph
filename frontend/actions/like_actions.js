import * as LikeAPIUtil from '../util/like_api_util';
import {receivePost} from './post_actions';


export const addLike = (like) => dispatch => (
  LikeAPIUtil.createLike(like).then(payload => dispatch(receivePost(payload)))
);

export const deleteLike = (like) => dispatch  => (
  LikeAPIUtil.destroyLike(like).then(payload => dispatch(receivePost(payload)))
);
