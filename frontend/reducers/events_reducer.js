import { merge } from 'lodash';
import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';
import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VENUE } from '../actions/venue_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VENUE:
      return merge({}, state, action.events);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: {trackedEvents: action.events}});
    case RECEIVE_ARTISTS:
      console.log(action.events)
      return merge({}, state, action.events)
    case RECEIVE_ARTIST:
      return merge({}, state, action.events);
    case RECEIVE_EVENT:
      // console.log(action.)
      return merge({}, state, {[action.event.id]: action.event});
    case RECEIVE_EVENTS:
      return action.events;
    default:
      return state;
  }
};
