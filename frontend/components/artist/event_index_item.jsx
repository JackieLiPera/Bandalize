import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rsvp_events: this.props.currentUser.rsvp_events
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
        rsvp_events: this.props.currentUser.rsvp_events
      });
      addClass('"artist-rsvp-button"')
    } else {
      this.setState({
        rsvp_events: this.props.currentUser.rsvp_events.push(e.target.value)
      });
      addClass("artist-rsvp-button-going")
    }
  }

  handleClick() {
    const eventId = this.props.event.id;
    this.props.history.push(`/events/${eventId}`);
  }

  render() {
    let rsvpButton = <button
      onClick={(e) =>this.changeRSVPstatus(e)}
      value={this.props.event.id}
      className="artist-rsvp-button"
      >RSVP</button>;

    return (
      <li onClick={() => this.handleClick()} >
        {this.props.event.id}
        {rsvpButton}
      </li>
    );
  }
}

export default withRouter(EventIndexItem);
