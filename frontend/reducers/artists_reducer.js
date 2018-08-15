import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VENUE } from '../actions/venue_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { REMOVE_COMMENT, RECEIVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';


export default (state = {}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.results)
    case RECEIVE_VENUE:
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.artists)
    case RECEIVE_ARTIST:
      return merge({}, state, {[action.artist.id]: action.artist});
    case RECEIVE_EVENT:
      return merge({}, state, action.artist);
    case RECEIVE_EVENTS:
      return merge({}, state, action.artist);
    case RECEIVE_ARTISTS:
      return action.artists;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      newState[action.comment.artist_id].comments.unshift(action.comment.id);
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state, action.commentId);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};
