import * as FollowAPIUtil from '../util/follow_api_util';
import {requestUser} from './user_actions';


export const addLike = (follow) => dispatch => (
  FollowAPIUtil.createFollow(follow).then(payload => dispatch(requestUser(payload)))
);

export const deleteLike = (follow) => dispatch  => (
  FollowAPIUtil.destroyFollow(follow).then(payload => dispatch(requestUser(payload)))
);
