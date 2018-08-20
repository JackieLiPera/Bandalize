import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTIST:
      return merge({}, state, action.users);
    default:
      return state;
  }
};
