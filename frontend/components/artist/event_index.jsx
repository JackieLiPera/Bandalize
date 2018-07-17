import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      rsvp_events: this.props.currentUser.rsvp_events
    }

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
    } else {
      this.setState({
        rsvp_events: this.props.currentUser.rsvp_events.push(e.target.value)
      });
    }
  }


  render() {

    let rsvpButtons = this.props.events.map ((event) => {
      return <button onClick={(e) => this.changeRSVPstatus(e)} value={event.id} className="artist-rsvp-button">RSVP</button>;
    });


    return (
      <ul className="artist-events-list">Upcoming Events
        {this.props.events.map((eventId) => (
          <li><EventIndexItem event={eventId}/></li>
        ))}
        {rsvpButtons}
      </ul>
    );
  }
}

export default EventIndex;
