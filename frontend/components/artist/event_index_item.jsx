import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        {this.props.event.id}
      </div>
    );
  }
}

export default withRouter(EventIndexItem);
