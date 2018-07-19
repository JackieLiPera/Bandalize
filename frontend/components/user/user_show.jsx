import React from 'react';
import RsvpIndex from './rsvp_index';
import TrackedArtistIndex from './tracked_artist_index';
import { withRouter } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let currentUser = this.props.fetchUser(this.props.match.params.id);
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
            <TrackedArtistIndex key={this.props.currentUser.id}
              trackedArtists={this.props.trackedArtists}/>
          </div>
        </h2>

        <h2>RSVPs
          <div>
            <RsvpIndex
              key={this.props.currentUser.id}
              rsvps={this.props.rsvps}
              artists={this.props.artists}
              />
          </div>
        </h2>
      </div>
    )
  }
}

export default withRouter(UserShow);
