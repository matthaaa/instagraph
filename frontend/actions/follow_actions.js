import * as FollowAPIUtil from '../util/follow_api_util';
import {receiveUser} from './user_actions';


export const addFollow = (follow) => dispatch => (
  FollowAPIUtil.createFollow(follow).then(payload => dispatch(receiveUser(payload)))
);

export const deleteFollow = (follow) => dispatch  => (
  FollowAPIUtil.destroyFollow(follow).then(payload => dispatch(receiveUser(payload)))
);
