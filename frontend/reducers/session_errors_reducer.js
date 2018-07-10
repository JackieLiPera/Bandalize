import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';


export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}
