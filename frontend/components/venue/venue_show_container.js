import { connect } from 'react-redux';
import VenueShow from './venue_show';
import { fetchVenue } from '../../actions/venue_actions';
import { createRsvp, deleteRsvp } from '../../actions/rsvp_actions';

const msp = (state, ownProps) => {
  const venue = state.entities.venues;
  const allEvents = Object.values(state.entities.events);
  const venueId = venue.id;

  const specEvents = [];
  allEvents.forEach ((event) => {
    if (event.venue_id === venueId) {
      return specEvents.push(event)
    }
  });
  
  return {
    artists: state.entities.artists,
    currentUser: state.session.currentUser,
    venue: venue,
    events: specEvents
  }
};

const mdp = (dispatch) => {
  return {
    fetchVenue: (id) => dispatch(fetchVenue(id)),
    createRsvp: (userId, eventId) => dispatch(createRsvp(userId, eventId)),
    deleteRsvp: (userId, eventId) => dispatch(deleteRsvp(userId, eventId))
  }
};


export default connect(msp, mdp)(VenueShow);
