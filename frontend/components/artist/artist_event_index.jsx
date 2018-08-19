import React from 'react';
import EventIndexItem from './event_index_item';

class ArtistEventIndex extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="artist-events-list">Upcoming Events
        {this.props.artistEvents.map((eventId) => (
          <EventIndexItem
            key={eventId}
            event={this.props.events[eventId]}
            venue={this.props.venues[this.props.events[eventId].venue_id]}
            tracking={this.props.tracking}
            currentUser={this.props.currentUser}
            createRsvp={this.props.createRsvp}
            deleteRsvp={this.props.deleteRsvp}
            rsvps={this.props.rsvps}
            />
        ))}
      </ul>
    );
  }
}

export default ArtistEventIndex;
