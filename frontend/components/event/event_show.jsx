import React from 'react';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id)
  }


  render() {

    return (
      <div className="event-show-component">
        <div className="event-show-container">
          <img className="artist-image"></img>
          <div className= "event-info"></div>
        </div>

        <div className="event-description">
          <ul>
            {this.props.artistName}
            {this.props.venueName}
            {this.props.venueAddress}
            {this.props.venueCity}
            {this.props.venueState}
          </ul>
        </div>

      </div>
    );
  }
}


export default EventShow;
