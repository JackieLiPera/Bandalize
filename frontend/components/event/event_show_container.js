import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { createRsvp, deleteRsvp } from '../../actions/rsvp_actions';


const msp = (state, ownProps) => {

  const event = state.entities.events[parseInt(ownProps.match.params.id)];
  let eventDate;
  let eventHappened;
  let numRsvps;
  if (event) {
    numRsvps = event.rsvpd.length;
    eventDate = new Date (event.event_on);
    if (new Date(eventDate).getTime() < new Date(Date.now()).getTime()) {
      eventHappened = true;
    }
  }

  return {
    event: event,
    artist: state.entities.artists,
    venue: state.entities.venues,
    currentUser: state.session.currentUser,
    rsvpd: state.session.currentUser.rsvp_events.includes(parseInt(ownProps.match.params.id)),
    dateString: eventDate ? eventDate.toString().slice(0, 15) : "",
    timeString: eventDate ? eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : "",
    happened: eventHappened,
    numRsvps: numRsvps
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
