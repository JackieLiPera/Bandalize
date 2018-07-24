import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/artist_actions';
import { createTracking, deleteTracking } from '../../actions/tracking_actions';
import { createRsvp, deleteRsvp } from '../../actions/rsvp_actions';


const msp = (state, ownProps) => {

  const artist =  state.entities.artists[ownProps.match.params.id];
  const allEvents = Object.values(state.entities.events);

  const specEvents = [];
  if (artist) {
    allEvents.forEach ((event) => {
      if (event.artist_id === artist.id) {
        return specEvents.push(event)
      }
    });
  }


  return {
    artist: artist,
    events: specEvents,
    venues: state.entities.venues,
    currentUser: state.session.currentUser,
    tracked_artists: state.session.currentUser.tracked_artists,
    tracking: state.session.currentUser.tracked_artists.includes(parseInt(ownProps.match.params.id))
  }
};

const mdp = (dispatch) => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    createTracking: (userId, artistId) => dispatch(createTracking(userId, artistId)),
    deleteTracking: (userId, artistId) => dispatch(deleteTracking(userId, artistId)),
    createRsvp: (userId, eventId) => dispatch(createRsvp(userId, eventId)),
    deleteRsvp: (userId, eventId) => dispatch(deleteRsvp(userId, eventId))
  }
};


export default connect(msp, mdp)(ArtistShow);
