import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { createRsvp, deleteRsvp } from '../../actions/rsvp_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';


const msp = (state, ownProps) => {
  const event = state.entities.events[Number(ownProps.match.params.id)];
  let happened;
  let numRsvps;
  let eventDate;

  if (event) {
    numRsvps = event.rsvpd.length;
    eventDate = new Date (event.event_on);
    (Date.parse(eventDate) < Date.now()) ? happened = true : happened = false;
  }

  let rsvpd;
  if (state.session.currentUser) {
    rsvpd = state.session.currentUser.rsvp_events.includes(Number(ownProps.match.params.id));
  } else {
    rsvpd = null;
  }

  return {
    event: state.entities.events[Number(ownProps.match.params.id)],
    artist: state.entities.artists,
    venue: state.entities.venues,
    comments: state.entities.comments,
    currentUser: state.session.currentUser,
    rsvpd: rsvpd,
    dateString: eventDate ? eventDate.toString().slice(0, 15) : "",
    timeString: eventDate ? eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : "",
    happened: happened,
    numRsvps: numRsvps
  }
};

const mdp = (dispatch) => {

  return {
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    createRsvp: (userId, eventId) => dispatch(createRsvp(userId, eventId)),
    deleteRsvp: (userId, eventId) => dispatch(deleteRsvp(userId, eventId)),
    processForm: (formData) => dispatch(createComment(formData)),
    deleteComment: (userId, eventId) => dispatch(deleteComment(userId, eventId))
  }
};


export default connect(msp, mdp)(EventShow);
