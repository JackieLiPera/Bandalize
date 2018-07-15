import React from 'react';
import RsvpIndex from './rsvp_index';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-show-container">

        <h2>Tracked Events
          <div>
            <ul className="tracked-events-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </h2>

        <h2>Tracked Artists
          <div className="tracked-artists">
            <ul className="tracked-artists-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </h2>

        <h2>RSVPs
          <div>
            <RsvpIndex rsvps={this.props.rsvps}/>
          </div>
        </h2>
      </div>
    )
  }
}

export default UserShow;
