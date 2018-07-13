import { combineReducers } from 'redux';
import ArtistsReducer from './artists_reducer';
import EventsReducer from './events_reducer';
// import VenuesReducer from './'


export default combineReducers({
  artists: ArtistsReducer,
  events: EventsReducer
});
