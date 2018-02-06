import * as LikeAPIUtil from '../util/like_api_util';
import {requestPost} from './post_actions';


export const requestLike = (like) => dispatch => (
  LikeAPIUtil.fetchLike(like).then(payload => dispatch(requestPost(payload)))
);

export const deleteLike = (like) => dispatch  => (
  LikeAPIUtil.destroyLike(like).then(payload => dispatch(requestPost(payload)))
);
