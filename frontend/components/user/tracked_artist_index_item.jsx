import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackedArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const artist = this.props.artist;
    this.props.history.push(`/artists/${artist.id}`);
  }


  render() {
    return (
      <div className="tracked-artist" onClick={this.handleClick}>
        {this.props.artist.name}
      </div>
    );
  }
}

export default withRouter(TrackedArtistIndexItem);
