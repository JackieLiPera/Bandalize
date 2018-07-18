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
    this.props.fetchEvent(this.props.match.params.id);
  }

  changeRSVPStatus(e) {
    if (this.state.rsvpd === true) {
      let eventIdx = this.props.currentUser.rsvp_events.indexOf(this.props.event.id)
      let removedEvent = this.props.currentUser.rsvp_events.splice(eventIdx, 1)
      this.setState({
        rsvp_events: this.props.currentUser.rsvp_events,
        rsvpd: false
      });
    } else {
      this.setState({
        rsvp_events: this.props.currentUser.rsvp_events.push(this.props.event.id),
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

    return (
      <div className="event-show-component">
        <div className="event-show-container">
          <img className="artist-image"></img>
          <div className= "event-info">
            <h2>{this.props.artist.name}</h2>
            {this.props.dateString} @ {this.props.venue.name}
            <br></br>
            {this.props.venue.city}, {this.props.venue.state}
            {rsvp_button}
          </div>
        </div>

        <div className="event-description">
          <ul>

            <li>{this.props.dateString}</li>
            <li>{this.props.timeString}</li>
            <li>{this.props.venue.name}</li>
            <li>{this.props.venue.address}</li>
            <li>{this.props.venue.city}, {this.props.venue.state}</li>
            <br></br>
            <br></br>
            <li>{this.props.artist.name}</li>
          </ul>
        </div>

      </div>
    );
  }
}


export default EventShow;
