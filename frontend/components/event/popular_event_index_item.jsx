import React from 'react';
import { Link } from 'react-router-dom';

class PopularEventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let event = this.props.event;
    let performer = this.props.artists[event.artist_id]


    return(
      <div>
        <Link className="event-link" to={`events/${event.id}`}>{performer.name}</Link>
      </div>
    );
  }
}

export default PopularEventIndexItem;
