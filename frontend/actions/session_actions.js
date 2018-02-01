import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveUser(null))
  ))
);

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
