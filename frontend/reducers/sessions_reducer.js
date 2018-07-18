import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_RSVP, REMOVE_RSVP } from '../actions/rsvp_actions';
import { RECEIVE_TRACKING, REMOVE_TRACKING } from '../actions/tracking_actions';
import { merge } from 'lodash';

export default (state = {}, action)  => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TRACKING:
      let newTrackings = state.currentUser.tracked_artists.slice();
      newTrackings.push(action.tracking.artist_id);
      return merge({}, state, {currentUser: {tracked_events: newTrackings}});
    case REMOVE_TRACKING:
      newState = merge({}, state, action.artistId);
      delete newState[action.artistId];
      return newState;
    case RECEIVE_RSVP:
      let newRsvps = state.currentUser.rsvp_events.slice();
      newRsvps.push(action.rsvp.event_id);
      return merge({}, state, {currentUser: {rsvp_events: newRsvps}});
    case REMOVE_RSVP:
      newState = merge({}, state, action.eventId);
      delete newState[action.eventId];
      return newState;
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
