import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rsvpd: this.props.currentUser.rsvp_events.includes(this.props.event.id)
    }

    this.handleClick = this.handleClick.bind(this);
    this.changeRSVPstatus = this.changeRSVPstatus.bind(this);
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

  render() {
    let eventHappened;
    if (Date.parse(this.props.event.event_on) < Date.now()) {
      eventHappened = true
    } else {
      eventHappened = false;
    }


    let rsvpButton;
    if (this.state.rsvpd && !eventHappened) {
      rsvpButton = <button
        onClick={this.changeRSVPstatus}
        className="artist-rsvp-button-going"
        >&#10004; Going </button>
    } else if (this.state.rsvpd && eventHappened) {
      rsvpButton = <button
        onClick={this.changeRSVPstatus}
        className="artist-rsvp-button-going"
        >&#10004; I Was There </button>
    } else {
      rsvpButton = <button
        onClick={this.changeRSVPstatus}
        className="artist-rsvp-button"
        >RSVP</button>
    }

    let event_venue = this.props.venue || {};


    let month = new Date(this.props.event.event_on).toString().slice(4,7);
    let date = new Date(this.props.event.event_on).toString().slice(8,10);
    return (
      <li onClick={() => this.handleClick()} >
        <div className="event-date-icon">
          <span className='month'>{month}</span>
          {date}
        </div>
        <div className="event-index-text">
          {event_venue.name}<span> </span>{event_venue.city}, {event_venue.state}
        </div>
        {rsvpButton}
      </li>
    );
  }
}

export default withRouter(EventIndexItem);
