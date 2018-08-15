import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { merge } from 'lodash';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_ARTIST:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      newState = merge({}, state, {[action.comment.id]: action.comment});
      return newState;
    case REMOVE_COMMENT:
      return {}
    default:
      return state;
  }
};

export default CommentsReducer;
