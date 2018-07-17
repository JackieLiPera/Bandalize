import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';
import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { merge } from 'lodash';


export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
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
    default:
      return state;
  }
};
