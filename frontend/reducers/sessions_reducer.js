import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_RSVP, REMOVE_RSVP } from '../actions/rsvp_actions';
import { RECEIVE_TRACKING, REMOVE_TRACKING } from '../actions/tracking_actions';
import { merge } from 'lodash';

export default (state = {}, action)  => {
  Object.freeze(state);
  let newState;
  let newRsvps;
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
      newRsvps = state.currentUser.rsvp_events.slice();
      newRsvps.includes(action.rsvp.event_id) ? null : newRsvps.push(action.rsvp.event_id)
      debugger
      return merge({}, state, {currentUser: {rsvp_events: newRsvps}});
    case REMOVE_RSVP:
      let newRsvps = state.currentUser.rsvp_events.slice();
      let index = state.currentUser.rsvp_events.indexOf(action.rsvpId);
      newRsvps.splice(index, 1);
      return merge({}, state, {currentUser: {rsvp_events: newRsvps}});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
