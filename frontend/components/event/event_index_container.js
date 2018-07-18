import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents } from '../../actions/event_actions';

const msp = (state) => {
  return {
    events: Object.values(state.entities.events),
    artists: state.entities.artists,
    venues: state.entities.venues
  }
};

const mdp = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
};


export default connect(msp, mdp)(EventIndex);
