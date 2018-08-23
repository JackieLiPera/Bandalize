import { combineReducers } from 'redux';
import ArtistsReducer from './artists_reducer';
import EventsReducer from './events_reducer';
import VenuesReducer from './venues_reducer';
import CommentsReducer from './comments_reducer';
import RsvpsReducer from './rsvps_reducer';
import UsersReducer from './users_reducer';


export default combineReducers({
  events: EventsReducer,
  artists: ArtistsReducer,
  venues: VenuesReducer,
  comments: CommentsReducer,
  rsvps: RsvpsReducer,
  users: UsersReducer
});
