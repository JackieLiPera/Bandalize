import { connect } from 'react-redux';
import VenueShow from './venue_show';
import { fetchVenue } from '../../actions/venue_actions';
import { createRsvp, deleteRsvp } from '../../actions/rsvp_actions';

const msp = (state, ownProps) => {

  const venue = state.entities.venues[Number(ownProps.match.params.id)];
  let artists;

  if (venue) {
    artists = state.entities.artists;
  }
  
  return {
    venue,
    artists,
    currentUser: state.session.currentUser,
    events: Object.values(state.entities.events),
    rsvps: Object.values(state.entities.rsvps)
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
