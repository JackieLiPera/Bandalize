import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_RSVP, REMOVE_RSVP } from '../actions/rsvp_actions';
import { RECEIVE_TRACKING, REMOVE_TRACKING } from '../actions/tracking_actions';
import { merge } from 'lodash';

export default (state = {}, action)  => {
  Object.freeze(state);

  let newState = merge({}, state);
  let newRsvps;
  switch (action.type) {
    case RECEIVE_TRACKING:
      let newTrackedArtist = state.currentUser.tracked_artists.slice();
      newTrackedArtist.push(action.tracking.artist_id);
      return merge({}, state, {currentUser: {tracked_events: newTrackedArtist}});
    case REMOVE_TRACKING:
      let trackedArtists = newState["currentUser"].tracked_artists;
      let artistIdx = trackedArtists.indexOf(action.artistId);
      trackedArtists.splice(artistIdx, 1);
      newState["currentUser"].tracked_artists = trackedArtists;
      return newState;
    case RECEIVE_RSVP:
      newRsvps = state.currentUser.rsvp_events.slice();
      newRsvps.includes(action.rsvp.event_id) ? newRsvps : state.currentUser.rsvp_events.push(action.rsvp.event_id)
      return merge({}, state, {currentUser: {rsvp_events: newRsvps}});
    case REMOVE_RSVP:
      let index = state.currentUser.rsvp_events.indexOf(action.eventId);
      state.currentUser.rsvp_events.splice(index, 1);
      return merge({}, state, {currentUser: {rsvp_events: state.currentUser.rsvp_events}});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
