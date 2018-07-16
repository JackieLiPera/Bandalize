import React from 'react';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
  }

  render () {
    return (
      <div className="artist-show-component">
        <div className="artist-show-container">
          <img className="artist-show-image"></img>
          <div className= "artist-show-info">
            <ul>
              <li>{this.props.name}</li>
            </ul>
          </div>
          <button className="artist-track-button">Track</button>
        </div>

        <div>
          <ul className="artist-events-list">Upcoming Events
            <li> <button className="artist-rsvp-button">RSVP</button></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default ArtistShow;
