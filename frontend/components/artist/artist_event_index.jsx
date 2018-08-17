import React from 'react';
import EventIndexItem from './event_index_item';

class ArtistEventIndex extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <ul className="artist-events-list">Upcoming Events
        {this.props.events.map((event) => (
            <EventIndexItem
              key={event.id}
              event={event}
              venue={this.props.venues[event.venue_id]}
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
