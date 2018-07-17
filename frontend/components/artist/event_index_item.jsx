import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    debugger
    const eventId = this.props.event.id;
    this.props.history.push(`/events/${eventId}`);
  }

  render() {
    return (
      <li onClick={() => this.handleClick()} >
        {this.props.event.id}
      </li>
    );
  }
}

export default withRouter(EventIndexItem);
