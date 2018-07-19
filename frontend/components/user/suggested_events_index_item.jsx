import React from 'react';
import { withRouter } from 'react-router-dom';

class SuggestedEventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const event = this.props.event;
    this.props.history.push(`/events/${event.id}`);
  }


  render() {
    return (
      <div onClick={this.handleClick}>
        <img src={this.props.artist.image} className='rsvp-image'></img>
        <span className='suggested-event-title'>{this.props.artist.name}</span>
        <br></br>
        <span className="suggested-event-venue">{this.props.venue.name}</span>
      </div>
    );
  }
}

export default withRouter(SuggestedEventIndexItem);
