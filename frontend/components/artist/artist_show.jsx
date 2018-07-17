import React from 'react';
import EventIndex from './event_index';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracked_artists: this.props.tracked_artists,
      tracking: this.props.tracking
    };

    this.handleTracking = this.handleTracking.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
  }

  handleTracking() {
    if (this.state.tracking === true ) {
      let artistIndex = this.props.currentUser.tracked_artists.indexOf(this.props.artist.id);
      let removedArtist = this.props.currentUser.tracked_artists.splice(artistIndex, 1);
      this.setState({
        tracked_artists: this.props.currentUser.tracked_artists,
        tracking: false
      });
    } else {
      this.setState({
        tracked_artists: this.props.currentUser.tracked_artists.push(this.props.artist.id),
        tracking: true
      });
    };
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

    let track_button;
    if (this.state.tracking === true) {
      track_button = <button onClick={this.handleTracking} className="artist-track-button-going">	&#10004; Tracked</button>
    } else {
      track_button = <button onClick={this.handleTracking} className="artist-track-button">Track</button>
    };

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
          {track_button}
        </div>

        <div>
          <EventIndex events={this.props.events} venues={this.props.venues} currentUser={this.props.currentUser} tracking={this.props.tracking}/>
        </div>

      </div>
    );
  }
}

export default ArtistShow;
