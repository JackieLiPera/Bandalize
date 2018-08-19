import { merge } from 'lodash';
import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';
import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_RSVP, REMOVE_RSVP } from '../actions/rsvp_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VENUE } from '../actions/venue_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_EVENT:
      return {[action.event.id]: action.event};
    case RECEIVE_EVENTS:
    case RECEIVE_VENUE:
    case RECEIVE_ARTIST:
      return action.events;
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ARTISTS:
      return merge({}, state, action.events);
    case RECEIVE_RSVP:
      newState[action.rsvp.event_id].rsvps.push(action.rsvp.user_id);
      return newState;
    case REMOVE_RSVP:
      let rsvps = newState[action.eventId].rsvps;
      let userIdx = rsvps.indexOf(action.userId);
      rsvps.splice(userIdx, 1);
      newState[action.eventId].rsvps = rsvps;
      return newState;
    default:
      return state;
  }
};
