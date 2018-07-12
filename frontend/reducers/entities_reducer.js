import { combineReducers } from 'redux';
import ArtistsReducer from './artists_reducer'
// import EventsReducer from './'
// import VenuesReducer from './'


export default combineReducers({
  artists: ArtistsReducer
});
