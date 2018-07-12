import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
};

export const login = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.login(user).then( (user) => {
      return dispatch(receiveCurrentUser(user));},
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionAPIUtil.logout().then( () => dispatch(logoutCurrentUser()));
  };
};


export const signup = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.signup(user).then( (user) => {
      return dispatch(receiveCurrentUser(user));},
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
  };
};
