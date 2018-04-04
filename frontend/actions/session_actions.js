import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signup = (formUser) => dispatch => (
  SessionAPIUtil.signup(formUser).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = (formUser) => dispatch => {
  return SessionAPIUtil.login(formUser).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);

export const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});
