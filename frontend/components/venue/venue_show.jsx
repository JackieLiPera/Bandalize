import React from 'react';

const VenueShow = () => {

  // componentDidMount() {
  //   this.props.fetchVenue();
  // }

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

export default VenueShow;
