import React from 'react';
import VenueEventIndex from './venue_event_index';
import VenueMap from './venue_map';

class VenueShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVenue(this.props.match.params.id)
  }

  render () {
    const venue = this.props.venue;

    return (
      <div className="venue-info-component">
        <div className="venue-info-container">
          <div className="venue-map">
            <VenueMap venue={venue} />
          </div>
          <div className= "venue-info">
            <h2 className="venue-name">{venue.name}</h2>
              <br></br>
                {venue.address}
              <br></br>
            <span className="venue-address">{venue.city}, {venue.state}</span>
          </div>
        </div>
        <div>
            <VenueEventIndex
              key={this.props.venue.id}
              events={this.props.events}
              artists={this.props.artists}
              venue={this.props.venue}
              currentUser={this.props.currentUser}
              createRsvp={this.props.createRsvp}
              deleteRsvp={this.props.deleteRsvp}
              rsvps={this.props.rsvps}
              venueEvents={venue.venue_events}
              />
        </div>
        </div>
    );
  }
}

export default VenueShow;
