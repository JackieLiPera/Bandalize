import React from 'react';
import RsvpIndex from './rsvp_index';
import TrackedArtistIndex from './tracked_artist_index';

class UserShow extends React.Component {

  componentDidMount() {
    this.props.fetchArtists();
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
            <TrackedArtistIndex artists={this.props.artists}/>
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
