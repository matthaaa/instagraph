import * as SessionAPIUtil from '../util/session_api_util';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const requestLogin = () => dispatch => (
  SessionAPIUtil.login().then(session => dispatch(login(session)))
);

export const requestLogout = () => dispatch => (
  SessionAPIUtil.logout().then(session => dispatch(logout(session)))
);

const login = (session) => ({
  type: LOG_IN,
  session
})

const logout = (session) => ({
  type: REMOVE_SESSION,
  session
})
