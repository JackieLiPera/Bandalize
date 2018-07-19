import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {

  let rsvps = {};
  state.session.currentUser.rsvp_events.map ((eventId) => {
    const event = state.entities.events[eventId];
    if (event) {
      rsvps[eventId] = event;
    }
  });

  let trackedArtists = {};
  state.session.currentUser.tracked_artists.map ((artistId) => {
    const artist = state.entities.artists[artistId];
    if (artist) {
      trackedArtists[artistId] = artist;
    }
  });

  return {
    currentUser: state.session.currentUser,
    rsvps: rsvps,
    trackedArtists: trackedArtists,
     artists: state.entities.artists
  }
};

const mdp = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}


export default withRouter(connect(msp, mdp)(UserShow));
