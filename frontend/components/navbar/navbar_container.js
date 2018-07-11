import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Navbar from './navbar';


const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    login: (user) => dispatch(login(user))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
