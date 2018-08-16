import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_TRACKING, REMOVE_TRACKING } from '../actions/tracking_actions';
import { merge } from 'lodash';

const TrackingsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_ARTIST:
      return merge({}, state, action.trackings);
    case RECEIVE_TRACKING:
      newState = merge({}, state, {[action.tracking.id]: action.tracking});
      return newState;
    case REMOVE_TRACKING:
      newState = merge({}, state);
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
};

export default TrackingsReducer;
