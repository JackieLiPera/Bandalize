import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({}, state, ([action.event.id]: action.event));
    case REMOVE_COMMENT:
      return {}
    default:
      return state;
  }
};

export default CommentsReducer;
