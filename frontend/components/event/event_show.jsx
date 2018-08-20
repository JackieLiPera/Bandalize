import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rsvpd: this.props.rsvpd,
      loading: true
    }

    this.changeRSVPStatus = this.changeRSVPstatus.bind(this);
    this.handleVenueClick = this.handleVenueClick.bind(this);
    this.handleArtistClick = this.handleArtistClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id).then(
      success => this.setState({ loading: false })
    );
  }

  changeRSVPstatus(e) {
    const rsvps = this.props.rsvps;
    const currentUser = this.props.currentUser;
    const event = this.props.event;

    if (this.state.rsvpd) {
      let rsvpId;
      rsvps.forEach ((rsvp) => {
        if (rsvp.user_id === currentUser.id) {
          rsvpId = rsvp.id;
        }
      });


      this.props.deleteRsvp(rsvpId, event.id);
        this.setState({
          rsvpd: false
        });
    } else {
      this.props.createRsvp(currentUser.id, event.id);
      this.setState({
        rsvpd: true
      });
    }
  }

  handleVenueClick() {
    const venueId = this.props.venue.id;
    this.props.history.push(`/venues/${venueId}`);
  }

  handleArtistClick() {
    const artistId = this.props.artist.id;
    this.props.history.push(`/artists/${artistId}`);
  }


  render() {
    if (this.state.loading === true) {
      return <div>Loading...</div>
    }

    let event = this.props.event;
    if (!event) {
      return null;
    }

    const eventDate = new Date (this.props.event.event_on);
    let eventHappened;
    (Date.parse(eventDate) < Date.now()) ? eventHappened = true : eventHappened = false;
    let dateString = eventDate.toString().slice(0, 15);
    let timeString = eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    let rsvp_button, stubHub_button;
    if (eventHappened && this.state.rsvpd === true) {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button-checked">	&#10004; I Was There</button>;
      stubHub_button = null;
    } else if (!eventHappened && (this.state.rsvpd === true)) {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button-checked">	&#10004; Going</button>;
      stubHub_button = <button className="ticket-button"> <a href="https://www.stubhub.com/">Get Tickets on Stubhub</a></button>;
    }
    if (eventHappened && this.state.rsvpd === false) {
      rsvp_button = <button onClick={this.handleArtistClick} className="rsvp-button">See More Events</button>;
      stubHub_button = null;
    } else if (!eventHappened && this.state.rsvpd === false) {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button">RSVP</button>;
      stubHub_button = <button className="ticket-button"> <a href="https://www.stubhub.com/">Get Tickets on Stubhub</a></button>;
    }

    return (
      <div className="event-show-component">
        <div className="event-show-container">
          <img src={this.props.artist.image} className="artist-image"></img>
          <div className= "event-info">
            <h2 onClick={this.handleArtistClick}>{this.props.artist.name} <img src={bluecheck}/></h2>
            {dateString} @ {this.props.venue.name}
              <br></br>
            {this.props.venue.city}, {this.props.venue.state}
            {rsvp_button}
            {stubHub_button}
          </div>
        </div>

        <div className="event-description">
          <div>
            <ul>
              <li className="bold-date-string">{dateString}</li>
              <li className="event-venue-timestring">{timeString}</li>
                <br></br>
              <li className="event-venue-name" onClick={this.handleVenueClick}>{this.props.venue.name}</li>
              <li>{this.props.venue.address } {this.props.venue.city}, {this.props.venue.state}</li>
                <br></br>
              <li className='rsvp-display'>{this.props.event.rsvps.length} RSVPs</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default EventShow;
