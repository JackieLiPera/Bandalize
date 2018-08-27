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
    this.generateRsvpButton = this.generateRsvpButton.bind(this);
    this.generateTicketButton = this.generateTicketButton.bind(this);
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

    if (!currentUser) {
      this.props.openModal('login');
      return;
    }

    if (this.state.rsvpd) {
      let rsvpId;
      debugger
      rsvps.forEach ((rsvp) => {
        if (rsvp.user_id === currentUser.id) {
          rsvpId = rsvp.id;
        }
      });

      debugger
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

  didEventHappen() {
    const eventDate = new Date (this.props.event.event_on);
    return (Date.parse(eventDate) < Date.now()) ? true : false;
  }

  generateTicketButton() {
    const eventHappened = this.didEventHappen();

    if (eventHappened === false) {
      return <button className="ticket-button"> <a href="https://www.stubhub.com/">Get Tickets on Stubhub</a></button>;
    }
  }


  generateRsvpButton() {
    const eventHappened = this.didEventHappen();
    const rsvpd = this.state.rsvpd;

    if (eventHappened && rsvpd) {
      return <button onClick={this.changeRSVPStatus} className="rsvp-button-checked">	&#10004; I Was There</button>;
    } else if (!eventHappened && rsvpd) {
      return <button onClick={this.changeRSVPStatus} className="rsvp-button-checked">	&#10004; Going</button>;
    }

    if (eventHappened && !rsvpd) {
      return <button onClick={this.handleArtistClick} className="rsvp-button">See More Events</button>;
    } else if (!eventHappened && !rsvpd) {
      return <button onClick={this.changeRSVPStatus} className="rsvp-button">RSVP</button>;
    }
  }


  render() {
    const event = this.props.event;
    const venue = this.props.venue;

    if (this.state.loading === true) {
      return <img className="loading" src={window.loadingGif}></img>
    }

    const eventDate = new Date (event.event_on)
    let dateString = eventDate.toString().slice(0, 15);
    let timeString = eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    return (
      <div className="event-show-component">
        <div className="event-show-container">
          <img src={this.props.artist.image} className="artist-image"></img>
          <div className= "event-info">
            <h2 onClick={this.handleArtistClick}>{this.props.artist.name} <img src={bluecheck}/></h2>
            {dateString} @ {venue.name}
              <br></br>
            {venue.city}, {venue.state}
            {this.generateRsvpButton()}
            {this.generateTicketButton()}
          </div>
        </div>

        <div className="event-description">
          <div>
            <ul>
              <li className="bold-date-string">{dateString}</li>
              <li className="event-venue-timestring">{timeString}</li>
                <br></br>
              <li className="event-venue-name" onClick={this.handleVenueClick}>{venue.name}</li>
              <li>{venue.address } {venue.city}, {venue.state}</li>
                <br></br>
              <li className='rsvp-display'>{event.rsvps.length} RSVPs</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default EventShow;
