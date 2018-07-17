import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="artist-events-list">Upcoming Events
        {this.props.events.map((event) => (
            <EventIndexItem event={event} venues={this.props.venues} currentUser={this.props.currentUser}/>
        ))}
      </ul>
    );
  }
}

export default EventIndex;
