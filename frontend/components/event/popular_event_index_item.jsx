import React from 'react';
import { Link } from 'react-router-dom';

class PopularEventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let event = this.props.event;

    let artist = this.props.artist;
    if (!artist) {
      return null;
    }


    let day = new Date(this.props.event.event_on).toString().slice(0,3).toUpperCase();
    let date = new Date(this.props.event.event_on).toString().slice(8,10);
    let month = new Date(this.props.event.event_on).toString().slice(4,7).toUpperCase();
    return(
      <Link className="link" to={`events/${event.id}`}>
        <div className="popular-event-index-item">
          <div><img className='imager'src={this.props.artist.image}></img></div>
          <div className="date-box">
            <span className="grey-date">{day}</span>
            <br></br>
            <span className="large-date">{date}</span>
            <br></br>
            {month}
          </div>
          <div className="event-link">

              {this.props.artist.name}
              <br></br>
              <span className="event-index-venue-name">{this.props.venue.name}</span>

          </div>
        </div>
      </Link>
    );
  }
}

export default PopularEventIndexItem;
