import React from 'react';
import { Link } from 'react-router-dom';

class PopularEventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Link to={`/api/events/${this.props.event.id}`}>{this.props.event.id}</Link>
      </div>
    );
  }

}

export default PopularEventIndexItem;
