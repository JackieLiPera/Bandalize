import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { fetchSearchResults, removeSearchResults} from '../../actions/search_actions';

const msp = ({ session, ui }) => {
 return {
    currentUser: session.currentUser,
    searchResults: Object.values(ui.search)
  };
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    login: (user) => dispatch(login(user)),
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
    removeSearchResults: () => dispatch(removeSearchResults())
  }
};

export default withRouter(connect(msp, mdp)(Navbar));
