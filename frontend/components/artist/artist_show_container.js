import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/artist_actions';


const msp = (state, ownProps) => {
  return {
    artist: state.entities.artists[ownProps.match.params.id],
    events: Object.keys(state.entities.events).map((id) => state.entities.events[id]),
    venues: Object.keys(state.entities.venues).map((id) => state.entities.venues[id]),
    currentUser: state.session.currentUser
  }
};

const mdp = (dispatch) => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id))
  }
};


export default connect(msp, mdp)(ArtistShow);
