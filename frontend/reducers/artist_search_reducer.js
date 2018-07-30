import { RECEIVE_SEARCHED_ARTISTS } from '../actions/artist_actions';
import merge from 'lodash/merge';

const artistSearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_ARTISTS:
      return merge({}, state, action.artists);
    default:
      return state;
  }
};

export default artistSearchReducer;
