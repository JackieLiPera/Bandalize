import { RECEIVE_VENUE, RECEIVE_VENUES } from '../actions/venue_actions';
import { merge } from 'lodash';


export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_VENUE:
      return merge({}, state, {[action.venue.id]: action.venue});
    case RECEIVE_VENUES:
      return action.venues;
    default:
      return state;
  }
};
