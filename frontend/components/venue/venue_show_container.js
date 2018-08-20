import { connect } from 'react-redux';
import VenueShow from './venue_show';
import { fetchVenue } from '../../actions/venue_actions';
import { createRsvp, deleteRsvp } from '../../actions/rsvp_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const venue = state.entities.venues[Number(ownProps.match.params.id)] || {};

  let artists, events;
  if (venue) {
    artists = state.entities.artists;
    events = state.entities.events;
  }

  return {
    venue,
    artists,
    events,
    currentUser: state.session.currentUser,
    rsvps: Object.values(state.entities.rsvps)
  }
};

const mdp = (dispatch) => {
  return {
    fetchVenue: (id) => dispatch(fetchVenue(id)),
    createRsvp: (userId, eventId) => dispatch(createRsvp(userId, eventId)),
    deleteRsvp: (userId, eventId) => dispatch(deleteRsvp(userId, eventId)),
    openModal: modal => dispatch(openModal(modal))
  }
};


export default connect(msp, mdp)(VenueShow);
