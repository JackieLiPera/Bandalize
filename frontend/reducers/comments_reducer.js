import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';
import { merge } from 'lodash';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      let newState =  merge({}, state, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      return {}
    default:
      return state;
  }
};

export default CommentsReducer;
