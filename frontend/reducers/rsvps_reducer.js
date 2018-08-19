import { RECEIVE_RSVP, REMOVE_RSVP } from '../actions/rsvp_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';
import { RECEIVE_ARTIST } from '../actions/event_actions';
import { merge } from 'lodash';

const RsvpsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_RSVP:
      newState = merge({}, state, {[action.rsvp.id]: action.rsvp});
      return newState;
    case REMOVE_RSVP:
      newState = merge({}, state);
      delete newState[action.rsvpId];
      return newState;
    case RECEIVE_EVENT:
    case RECEIVE_ARTIST:
      return merge({}, state, action.rsvps);
    default:
      return state;
  }
};

export default RsvpsReducer;
