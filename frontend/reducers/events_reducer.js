import { merge } from 'lodash';
import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
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
