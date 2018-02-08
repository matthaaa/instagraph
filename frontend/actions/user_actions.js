import * as UserAPIUtil from '../util/user_api_util';


export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

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
