import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { createRsvp, deleteRsvp } from '../../actions/rsvp_actions';
import { createComment } from '../../actions/comment_actions';


const msp = (state, ownProps) => {
  const event = state.entities.events[parseInt(ownProps.match.params.id)];
  let eventDate;
  let eventHappened;
  let numRsvps;
  let comments;

  if (event) {
    numRsvps = event.rsvpd.length;
    comments = event.comments;
    eventDate = new Date (event.event_on);
    (Date.parse(eventDate) < Date.now()) ? eventHappened = true : eventHappened = false;
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
    numRsvps: numRsvps,
    comments: comments
  }
};

const mdp = (dispatch) => {

  return {
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    createRsvp: (userId, eventId) => dispatch(createRsvp(userId, eventId)),
    deleteRsvp: (userId, eventId) => dispatch(deleteRsvp(userId, eventId)),
    processForm: (formData) => dispatch(createComment(formData))
  }
};


export default connect(msp, mdp)(EventShow);
