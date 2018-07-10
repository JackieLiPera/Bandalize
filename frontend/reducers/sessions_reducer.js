import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash';

export default (state = {currentUser: {}}, action)  => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.user});
    case LOGOUT_CURRENT_USER:
      return merge({}, state, {currentUser: {}});
    default:
      return state;
  }
};
