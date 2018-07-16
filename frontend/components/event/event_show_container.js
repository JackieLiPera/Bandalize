import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchVenue } from '../../actions/venue_actions';

const msp = (state) => {
  return {
    artistName: state.entities.artists.name,
    venueName: state.entities.venues.name,
    venueAddress: state.entities.venues.address,
    venueCity: state.entities.venues.city,
    venueState: state.entities.venues.state,
    date: state.entities.events.event_on
  }
};

const mdp = (dispatch) => {

  return {
    fetchEvent: (id) => dispatch(fetchEvent(id))
  }
};


export default connect(msp, mdp)(EventShow);
