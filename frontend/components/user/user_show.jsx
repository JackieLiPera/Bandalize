import React from 'react';
import RsvpIndex from './rsvp_index';
import TrackedArtistIndex from './tracked_artist_index';
import SuggestedEventIndex from './suggested_events_index';
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

        <h2> Your Suggested Events
          <SuggestedEventIndex
            key={this.props.currentUser.id}
            events={this.props.events}
            artists={this.props.trackedArtists}
            venues={this.props.venues}/>
        </h2>

        <h2>Tracked Artists
          <div className="tracked-artists">
            <TrackedArtistIndex key={this.props.currentUser.id}
              trackedArtists={this.props.trackedArtists}/>
          </div>
        </h2>

        <h2>RSVPs
          <RsvpIndex
            key={this.props.currentUser.id}
            rsvps={this.props.rsvps}
            artists={this.props.artists}
            venues={this.props.venues}
            />
        </h2>
      </div>
    )
  }
}

export default withRouter(UserShow);
