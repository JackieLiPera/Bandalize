import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rsvp_events: this.props.rsvp_events,
      rsvpd: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.changeRSVPstatus = this.changeRSVPstatus.bind(this);
  }

  changeRSVPstatus(e) {
    let eventId = parseInt(e.target.value);
    if (this.props.currentUser.rsvp_events.includes(eventId)) {
      let eventIdx = this.props.currentUser.rsvp_events.indexOf(eventId);
      let removedEvent = this.props.currentUser.rsvp_events.splice(eventIdx, 1)
      this.setState({
        rsvp_events: this.props.currentUser.rsvp_events,
        rsvpd: false
      });
      e.stopPropagation();
    } else {
      this.setState({
        rsvp_events: this.props.currentUser.rsvp_events.push(e.target.value),
        rsvpd: true
      });
      e.stopPropagation();
    }
  }

  handleClick(e) {
    const eventId = this.props.event.id;
    this.props.history.push(`/events/${eventId}`);
  }

  render() {
    let rsvpButton;
    if (this.state.rsvpd) {
      rsvpButton = <button
        onClick={(e) =>this.changeRSVPstatus(e)}
        value={this.props.event.id}
        className="artist-rsvp-button-going"
        >&#10004; Going </button>
    } else {
      rsvpButton = <button
        onClick={(e) =>this.changeRSVPstatus(e)}
        value={this.props.event.id}
        className="artist-rsvp-button"
        >RSVP</button>
    }

    let event_venue;
    this.props.venues.forEach ((venue) => {
      if (venue.id === this.props.event.venue_id) {
         event_venue = venue;
      }
    });

    let month = new Date(this.props.event.event_on).toString().slice(4,7);
    let date = new Date(this.props.event.event_on).toString().slice(8,10);
    return (
      <li onClick={(e) => this.handleClick(e)} >
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
