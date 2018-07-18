import React from 'react';
import { Link } from 'react-router-dom';

class PopularEventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let event = this.props.event;


    return(
      <div className="popular-event-index-item">
        <div><img className='imager'src={this.props.artist.image}></img></div>
        <div className="event-link">
          <Link to={`events/${event.id}`}>
            {this.props.artist.name}
            <br></br>
            <span className="event-venue-name">{this.props.venue.name}</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default PopularEventIndexItem;
