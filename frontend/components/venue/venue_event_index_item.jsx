import React from 'react';
import {withRouter} from 'react-router-dom';

class VenueEventIndexItem extends React.Component {
  constructor(props) {
    super(props);

    const currentUser = this.props.currentUser;
    let rsvpd;
    if (currentUser) {
      rsvpd = currentUser.rsvp_events.includes(this.props.event.id);
    } else {
      rsvpd = false;
    }

    this.state = {
      rsvpd: rsvpd
    }

    this.handleClick = this.handleClick.bind(this);
    this.changeRSVPstatus = this.changeRSVPstatus.bind(this);
    this.generateRsvpButton = this.generateRsvpButton.bind(this);
    this.generateArtistImage = this.generateArtistImage.bind(this);
  }

  changeRSVPstatus(e) {
    e.stopPropagation();
    if (this.state.rsvpd) {

      const rsvps = this.props.rsvps;
      let rsvpId;
      rsvps.forEach ((rsvp) => {
        if (rsvp.user_id === this.props.currentUser.id) {
          rsvpId = rsvp.id;
        }
      });

      this.props.deleteRsvp(rsvpId, this.props.event.id);
      this.setState({
        rsvpd: false
      });
    } else {
      this.props.createRsvp(this.props.currentUser.id, this.props.event.id);
      this.setState({
        rsvpd: true
      });
    }
  }

  handleClick() {
    const eventId = this.props.event.id;
    this.props.history.push(`/events/${eventId}`);
  }

  generateRsvpButton() {
    if (this.state.rsvpd) {
      return <button
        onClick={this.changeRSVPstatus}
        className="venue-rsvp-button-going"
        >&#10004; Going </button>
    } else {
      return <button
        onClick={this.changeRSVPstatus}
        className="venue-rsvp-button"
        >RSVP</button>
    }
  }

  generateArtistImage() {
    return this.props.artist ? <img src={this.props.artist.image}/> : null;
  }

  render() {
    let month = new Date(this.props.event.event_on).toString().slice(4,7);
    let date = new Date(this.props.event.event_on).toString().slice(8,10);

    return (
      <div className="venue-event-list-div" onClick={this.handleClick}>

        <div className="event-date-icon">
          <span className='month'>{month}</span>
          {date}
        </div>
          { this.generateArtistImage() }
        <span className="venue-event-index-text">{this.props.artist.name}</span>
          { this.generateRsvpButton() }
      </div>

    );
  }
}

export default withRouter(VenueEventIndexItem);
