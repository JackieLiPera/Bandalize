import React from 'react';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rsvp_events: this.props.currentUser.rsvp_events,
      rsvpd: this.props.rsvpd
    }

    this.changeRSVPStatus = this.changeRSVPStatus.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id)
  }

  changeRSVPStatus(e) {
    if (this.state.rsvpd === true) {
      let eventIdx = this.props.currentUser.rsvp_events.indexOf(this.props.eventId)
      let removedEvent = this.props.currentUser.rsvp_events.splice(eventIdx, 1)
      this.setState({
        rsvp_events: this.props.currentUser.rsvp_events,
        rsvpd: false
      });
    } else {
      this.setState({
        rsvp_events: this.props.currentUser.rsvp_events.push(this.props.eventId),
        rsvpd: true
      });
    }
  }

  render() {
    let rsvp_button;
    if (this.state.rsvpd === true) {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button-checked">	&#10004; Going</button>
    } else {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button">RSVP</button>
    };

    let dateString = new Date(this.props.date).toString().slice(0,15);
    let timeString = new Date(this.props.date).toLocaleTimeString('en-US');

    return (
      <div className="event-show-component">
        <div className="event-show-container">
          <img className="artist-image"></img>
          <div className= "event-info">
            <h2>{this.props.artistName}</h2>
            {dateString} @ {this.props.venueName}
            <br></br>
            {this.props.venueCity}, {this.props.venueState}
            {rsvp_button}
          </div>
        </div>

        <div className="event-description">
          <ul>

            <li>{dateString}</li>
            <li>{timeString}</li>
            <li>{this.props.venueName}</li>
            <li>{this.props.venueAddress}</li>
            <li>{this.props.venueCity}, {this.props.venueState}</li>
            <br></br>
            <br></br>
            <li>{this.props.artistName}</li>
          </ul>
        </div>

      </div>
    );
  }
}


export default EventShow;
