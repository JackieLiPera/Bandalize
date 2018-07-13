import { combineReducers } from 'redux';
import ArtistsReducer from './artists_reducer';
import EventsReducer from './events_reducer';
import VenuesReducer from './venues_reducer';


export default combineReducers({
  events: EventsReducer,
  artists: ArtistsReducer,
  venues: VenuesReducer
});
