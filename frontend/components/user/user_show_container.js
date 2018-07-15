import { connect } from 'react-redux';
import UserShow from './user_show';

const msp = (state) => {
  return {
    rsvps: state.session.currentUser.rsvp_events
  }
};


export default connect(msp, null)(UserShow);
