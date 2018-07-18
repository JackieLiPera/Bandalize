import React from 'react';
import { withRouter } from 'react-router-dom';

class RsvpIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    debugger
  }

  handleClick() {
    const eventId = this.props.rsvp.event_id;
    this.props.history.push(`/events/${eventId}`);
  }

  render() {
    return (
      <div className="rsvp-event" onClick={this.handleClick}>

      </div>
    );
  }
}
// let artist = this.props.artists[this.props.event.artist_id];
// <img src={artist.image}/>

export default withRouter(RsvpIndexItem);
