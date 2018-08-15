import { merge } from 'lodash';
import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';
import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_RSVP, REMOVE_RSVP } from '../actions/rsvp_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VENUE } from '../actions/venue_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_RSVP:
      return merge(newState, action.rsvp)
    case RECEIVE_VENUE:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ARTISTS:
    case RECEIVE_ARTIST:
      return merge({}, state, action.events);
    case RECEIVE_EVENT:
      return merge({}, state, {[action.event.id]: action.event});
    case RECEIVE_EVENTS:
      return action.events;
    default:
      return state;
  }
};
