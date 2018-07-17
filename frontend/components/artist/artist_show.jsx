import React from 'react';
import EventIndex from './event_index';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
  }

  render () {
    let artist = this.props.artist;
    if (!artist) {
      return null;
    }

    let tour;
    if (artist.on_tour === true) {
      tour = "On Tour"
    } else {
      tour = ""
    }

    let bluecheck = window.bluecheck;

    return (
      <div className="artist-show-component">
        <div className="artist-show-container">
          <img className="artist-show-image"></img>
          <div className= "artist-show-info">
            <ul>
              <li><h2>{artist.name } <img src={bluecheck}/></h2></li>
              <li>{artist.genre}</li>
              <li className="tour-info">{tour}</li>
            </ul>
          </div>
          <button className="artist-track-button">Track</button>
        </div>

        <div>
          <EventIndex events={this.props.events} currentUser={this.props.currentUser}/>
        </div>

      </div>
    );
  }
}

export default ArtistShow;
