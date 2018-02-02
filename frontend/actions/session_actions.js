import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signup = (formUser) => dispatch => (
  SessionAPIUtil.signup(formUser).then(user => (
    dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = (formUser) => dispatch => {
  return SessionAPIUtil.login(formUser).then(user => (
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

export const receiveUser = currentUser => ({
  type: RECEIVE_USER,
  currentUser,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});
