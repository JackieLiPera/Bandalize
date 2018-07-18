import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/artist_actions';


const msp = (state, ownProps) => {
  debugger
  return {
    artist: state.entities.artists[ownProps.match.params.id],
    events: Object.keys(state.entities.events).map((id) => state.entities.events[id]),
    venues: state.entities.venues,
    currentUser: state.session.currentUser,
    tracked_artists: state.session.currentUser.tracked_artists,
    tracking: state.session.currentUser.tracked_artists.includes(parseInt(ownProps.match.params.id))
  }
};

const mdp = (dispatch) => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id))
  }
};


export default connect(msp, mdp)(ArtistShow);
