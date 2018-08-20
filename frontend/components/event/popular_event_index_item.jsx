import React from 'react';
import { Link } from 'react-router-dom';

class PopularEventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const artist = this.props.artist || {};
    const event = this.props.event;
    const eventDate = new Date(event.event_on);

    const day = eventDate.toString().slice(0,3).toUpperCase();
    const date = eventDate.toString().slice(8,10);
    const month = eventDate.toString().slice(4,7).toUpperCase();

    return(
      <Link className="link" to={`events/${event.id}`}>
        <div className="popular-event-index-item">
          <div><img className='imager'src={artist.image}></img></div>
          <div className="date-box">
            <span className="grey-date">{day}</span>
              <br></br>
                <span className="large-date">{date}</span>
              <br></br>
            {month}
          </div>
          <div className="event-link">
            {artist.name}
            <br></br>
            <span className="event-index-venue-name">{this.props.venue.name}</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default PopularEventIndexItem;
