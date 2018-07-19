import React from 'react';
import { withRouter } from 'react-router-dom';

class RsvpIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const eventId = this.props.rsvp.id;
    this.props.history.push(`/events/${eventId}`);
  }

  render() {
    return (
      <div className="rsvp-event" onClick={this.handleClick}>
        <img src={this.props.artist.image} className='rsvp-image'></img>
        <span className='rsvp-title'>{this.props.artist.name}</span>
      </div>
    );
  }
}

export default withRouter(RsvpIndexItem);
