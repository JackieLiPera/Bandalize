import React from 'react';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
    this.props.fetchArtists();
  }

  render() {
    return (
      <div className="event-show-component">
        <div className="event-show-container">
          <img className="artist-image"></img>
          <div className= "event-info"></div>
        </div>

        <div className="event-description">
          {this.props.artist_id}
        </div>

      </div>
    );
  }
}


export default EventShow;
