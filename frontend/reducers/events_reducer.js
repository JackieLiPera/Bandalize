import { merge } from 'lodash';
import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';


export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, {[action.event.id]: action.event})
    case RECEIVE_EVENTS:
      return action.events;
    default:
      return state;
  }
};
