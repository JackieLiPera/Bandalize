import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { fetchArtists } from '../../actions/artist_actions';

const msp = (state) => {

  return {
    artist_id: state.entities.events.artist_id,
    date: state.entities.events.event_on,
    venue: state.entities.venues.venue_id,
    name: state.entities.events.name
  }
};

const mdp = (dispatch) => {

  return {
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    fetchArtists: () => dispatch(fetchArtists())
  }
};


export default connect(msp, mdp)(EventShow);
