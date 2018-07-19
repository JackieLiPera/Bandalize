import * as ApiVenueUtil from '../util/venue_api_util';
export const RECEIVE_VENUES = 'RECEIVE_VENUES';
export const RECEIVE_VENUE = 'RECEIVE_VENUE';


export const receiveVenues = (venues) => ({
  type: RECEIVE_VENUES,
  venues
});

export const receiveVenue = ({venue, events, artists}) => ({
  type: RECEIVE_VENUE,
  venue,
  events,
  artists
});

export const fetchVenues = () => dispatch => (
  ApiVenueUtil.fetchVenues().then((venues) => dispatch(receiveVenues(venues)))
);

export const fetchVenue = (id) => {
  return (dispatch) => {
    ApiVenueUtil.fetchVenue(id).then((venue) => dispatch(receiveVenue(venue)))
  }
};
