import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';


const msp = (state, ownProps) => {
  return {
    event: state.entities.events[ownProps.match.params.id],
    artist: state.entities.artists,
    venue: state.entities.venues,
    currentUser: state.session.currentUser,
    rsvpd: state.session.currentUser.rsvp_events.includes(ownProps.match.params.id),
    dateString: new Date(state.entities.events.event_on).toString().slice(0,15),
    timeString: new Date(state.entities.events.event_on).toLocaleTimeString('en-US')
  }
};

const mdp = (dispatch) => {

  return {
    fetchEvent: (id) => dispatch(fetchEvent(id))
  }
};


export default connect(msp, mdp)(EventShow);
