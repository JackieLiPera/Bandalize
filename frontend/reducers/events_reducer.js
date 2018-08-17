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
    case RECEIVE_EVENT:
      return merge({}, state, {[action.event.id]: action.event});
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_VENUE:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ARTISTS:
    case RECEIVE_ARTIST:
      return merge({}, state, action.events);
    case RECEIVE_RSVP:
      newState = merge({}, state);
      newState[action.rsvp.event_id].rsvps.push(action.rsvp.user_id);
      return newState;
    case REMOVE_RSVP:
      newState = merge({}, state);
      let newRsvps = newState[action.eventId].rsvps.slice(action.userId, 1);
      newState[action.eventId].rsvps = newRsvps;
      return newState;
    default:
      return state;
  }
};
