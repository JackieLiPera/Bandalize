import React from 'react';
import {withRouter} from 'react-router-dom';

class VenueEventIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rsvpd: this.props.currentUser.rsvp_events.includes(this.props.event.id)
    }

    this.handleClick = this.handleClick.bind(this);
    this.changeRSVPstatus = this.changeRSVPstatus.bind(this);
  }

  changeRSVPstatus(e) {
    if (this.state.rsvpd) {
      this.props.deleteRsvp(this.props.currentUser, this.props.event.id);
      this.setState({
        rsvpd: false
      });
      e.stopPropagation();
    } else {
      this.props.createRsvp(this.props.currentUser, this.props.event.id);
      this.setState({
        rsvpd: true
      });
      e.stopPropagation();
    }
  }

  handleClick() {
    const eventId = this.props.event.id;
    this.props.history.push(`/events/${eventId}`);
  }

  render() {

    let rsvpButton;
    if (this.state.rsvpd) {
      rsvpButton = <button
        onClick={(e) =>this.changeRSVPstatus(e)}
        className="venue-rsvp-button-going"
        >&#10004; Going </button>
    } else {
      rsvpButton = <button
        onClick={(e) =>this.changeRSVPstatus(e)}
        className="venue-rsvp-button"
        >RSVP</button>
    }

    let month = new Date(this.props.event.event_on).toString().slice(4,7);
    let date = new Date(this.props.event.event_on).toString().slice(8,10);
    return (
      <div className="venue-event-list-div" onClick={this.handleClick}>

        <div className="event-date-icon">
          <span className='month'>{month}</span>
          {date}
        </div>


        <img  src={this.props.artist.image}/>

        <span className="venue-event-index-text">{this.props.artist.name}</span>
        {rsvpButton}
      </div>

    );
  }
}

export default withRouter(VenueEventIndexItem);
