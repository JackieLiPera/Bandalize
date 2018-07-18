import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchEvents } from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  let trackedArtists = state.session.currentUser.tracked_artists.map ((trackedId) => {
    return state.entities.artists[trackedId] || {} ;
  });

  let rsvps = state.session.currentUser.rsvp_events.map((eventid) => {
    return state.entities.events[eventid] || {} ;
  });

  return {
    currentUser: state.session.currentUser,
    rsvps: rsvps,
    trackedArtists: trackedArtists,
    artists: state.entities.artists
  }
  debugger
};

const mdp = (dispatch) => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
    fetchEvents: () => dispatch(fetchEvents())
  }
}


export default withRouter(connect(msp, mdp)(UserShow));
