import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/artist_actions';

const msp = (state) => {
  return {
    name: state.entities.artists.artist.name,
    tour: state.entities.artists.artist.on_tour,
    genre: state.entities.artists.artist.genre,
    events: state.entities.artists.artist.artist_events
  }
};

const mdp = (dispatch) => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id))
  }
};


export default connect(msp, mdp)(ArtistShow);
