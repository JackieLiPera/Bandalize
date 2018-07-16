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
          <div className= "event-info">
            <h2>{this.props.artistName}</h2>
            {this.props.date} @ {this.props.venueName}
            <br></br>
            {this.props.venueCity}, {this.props.venueState}
            <button className="get-tickets">Get Tickets</button>
          </div>
        </div>

        <div className="event-description">
          <ul>

            <li>{this.props.venueName}</li>
            <li>{this.props.venueAddress}</li>
            <li>{this.props.venueCity}, {this.props.venueState}</li>
            <br></br>
            <br></br>
            <li>{this.props.artistName}</li>
          </ul>
        </div>

      </div>
    );
  }
}


export default EventShow;
