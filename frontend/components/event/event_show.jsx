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
    if (this.state.rsvpd === true) {
      this.props.deleteRsvp(this.props.currentUser.id, this.props.event.id);
      this.setState({
           rsvpd: false
         });
      e.stopPropagation();
    } else {
      this.props.createRsvp(this.props.currentUser.id, this.props.event.id);
      this.setState({
           rsvpd: true
         });
      e.stopPropagation();
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

    let rsvp_button;
    if (this.state.rsvpd === true) {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button-checked">	&#10004; Going</button>
    } else {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button">RSVP</button>
    };

    return (
      <div className="event-show-component">
        <div className="event-show-container">
          <img src={this.props.artist.image} className="artist-image"></img>
          <div className= "event-info">
            <h2 onClick={this.handleArtistClick}>{this.props.artist.name} <img src={bluecheck}/></h2>
            {this.props.dateString} @ {this.props.venue.name}
            <br></br>
            {this.props.venue.city}, {this.props.venue.state}
            {rsvp_button}
          </div>
        </div>

        <div className="event-description">
          <ul>

            <li className="bold-date-string">{this.props.dateString}</li>
            <li className="event-venue-timestring">{this.props.timeString}</li>
            <br></br>
            <li className="event-venue-name" onClick={this.handleVenueClick}>{this.props.venue.name}</li>
            <li>{this.props.venue.address } {this.props.venue.city}, {this.props.venue.state}</li>
          </ul>
        </div>

      </div>
    );
  }
}


export default EventShow;
