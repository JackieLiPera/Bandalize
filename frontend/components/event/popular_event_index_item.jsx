import React from 'react';
import { Link } from 'react-router-dom';

class PopularEventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.event !== prevProps.event) {
      this.fetchData(this.props.event);
    }
  }

  render() {

    let event = this.props.event;
    let performer;
    this.props.artists.forEach ((artist) => {
      if (artist.id === event.artist_id){
        return performer = artist
      }
    });


    return(
      <div>
        <Link to={`/api/events/${this.props.event.id}`}>{performer.name}</Link>
      </div>
    );
  }
}

export default PopularEventIndexItem;
