import React from 'react';

class VenueShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rsvpd: this.props.rsvpd
    }
    this.changeRSVPStatus = this.changeRSVPStatus.bind(this);
  }

  componentDidMount() {
    this.props.fetchVenue(this.props.match.params.id);
  }

  changeRSVPStatus(e) {
    if (this.state.rsvpd === true) {
      this.props.deleteRsvp(this.props.currentUser.id, this.props.event.id);
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

  render () {
    return (
      <div className="venue-show-component">
        <div className="venue-show-container">
          <div className="venue-map"></div>
          <div className= "venue-info"></div>
        </div>

        <div>
          <ul className="venue-events-list">Upcoming Events
            <li> <button className="rsvp-button">RSVP</button></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default VenueShow;
