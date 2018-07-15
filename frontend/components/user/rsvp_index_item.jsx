import React from 'react';
import { withRouter } from 'react-router-dom';

class RsvpIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const eventId = this.props.eventId;
    this.props.history.push(`/events/${eventId}`);
  }


  render() {
    return (
      <div className="rsvp-event" onClick={this.handleClick}>
      </div>
    );
  }
}

export default withRouter(RsvpIndexItem);
