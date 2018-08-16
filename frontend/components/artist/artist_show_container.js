import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/artist_actions';
import { createTracking, deleteTracking } from '../../actions/tracking_actions';
import { createRsvp, deleteRsvp } from '../../actions/rsvp_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';


const msp = (state, ownProps) => {

  return {
    artist: state.entities.artists[ownProps.match.params.id],
    events: Object.values(state.entities.events),
    venues: state.entities.venues,
    currentUser: state.session.currentUser,
    tracking: state.session.currentUser.tracked_artists.includes(Number(ownProps.match.params.id)),
    comments: state.entities.comments,
    trackings: state.entities.trackings
  }
};

const mdp = (dispatch) => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    createTracking: (userId, artistId) => dispatch(createTracking(userId, artistId)),
    deleteTracking: (trackingId, artistId) => dispatch(deleteTracking(trackingId, artistId)),
    createRsvp: (userId, eventId) => dispatch(createRsvp(userId, eventId)),
    deleteRsvp: (userId, eventId) => dispatch(deleteRsvp(userId, eventId)),
    processForm: (formData) => dispatch(createComment(formData)),
    deleteComment: (commentId, artistId) => dispatch(deleteComment(commentId, artistId))
  }
};


export default connect(msp, mdp)(ArtistShow);
