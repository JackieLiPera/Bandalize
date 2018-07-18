import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchArtists } from '../../actions/artist_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  let artists = state.session.currentUser.tracked_artists.map ((trackedId) => {
    return state.entities.artists[trackedId] || {} ;
  });

  return {
    currentUser: state.session.currentUser,
    rsvps: state.session.currentUser.rsvp_events,
    tracked_artists: state.session.currentUser.tracked_artists,
    artists: artists
  }
};

const mdp = (dispatch) => {
  return {
    fetchArtists: () => dispatch(fetchArtists())
  }
}


export default withRouter(connect(msp, mdp)(UserShow));
