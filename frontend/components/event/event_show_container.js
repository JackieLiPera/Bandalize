import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { createRsvp, deleteRsvp } from '../../actions/rsvp_actions';

const msp = (state, ownProps) => {

  const event = state.entities.events[Number(ownProps.match.params.id)];

  let rsvpd;
  if (state.session.currentUser) {
    rsvpd = state.session.currentUser.rsvp_events.includes(Number(ownProps.match.params.id))
  }

  return {
    event,
    artist: state.entities.artists,
    venue: state.entities.venues,
    currentUser: state.session.currentUser,
    rsvps: Object.values(state.entities.rsvps),
    rsvpd
  }
};

const mdp = (dispatch) => {

  return {
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    createRsvp: (userId, eventId) => dispatch(createRsvp(userId, eventId)),
    deleteRsvp: (userId, eventId) => dispatch(deleteRsvp(userId, eventId))
  }
};


export default connect(msp, mdp)(EventShow);
