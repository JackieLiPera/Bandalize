import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { fetchSearchedArtists } from '../../actions/artist_actions';

const msp = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    login: (user) => dispatch(login(user)),
    fetchSearchedArtists: (query) => dispatch(fetchSearchedArtists(query))
  }
};

export default withRouter(connect(msp, mdp)(Navbar));
