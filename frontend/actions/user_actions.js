import * as UserAPIUtil from '../util/user_api_util';


export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FOLLOW_USER = 'RECEIVE_FOLLOW_USER';
export const RECEIVE_POST_USER = 'RECEIVE_POST_USER';

export const requestUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
);

export const requestUser = (user) => dispatch => (
  UserAPIUtil.fetchUser(user.id).then(payload => dispatch(receiveUser(payload)))
);

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
})

export const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload,
})

export const receiveFollowUser = (payload) => ({
  type: RECEIVE_FOLLOW_USER,
  payload,
})

export const receivePostUser = (payload) => ({
  type: RECEIVE_POST_USER,
  payload,
})
