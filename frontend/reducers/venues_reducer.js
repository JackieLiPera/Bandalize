import { RECEIVE_VENUE, RECEIVE_VENUES } from '../actions/venue_actions';
import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';


export default (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.venues);
    case RECEIVE_EVENTS:
      return merge({}, state, action.venue);
    case RECEIVE_ARTIST:
      return merge({}, state, action.venues);
    case RECEIVE_VENUE:
      return merge({}, state, action.venue);
    case RECEIVE_EVENT:
      return merge({}, state, action.venue);
    case RECEIVE_VENUES:
      return action.venues;
    default:
      return state;
  }
};
