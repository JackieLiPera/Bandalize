import React from 'react';
import ArtistEventIndex from './artist_event_index';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracking: this.props.tracking,
      loading: true
    };

    this.handleTracking = this.handleTracking.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id).then(
      success => this.setState({ loading: false })
    );
  }

  handleTracking() {
    if (this.state.tracking === true ) {
      this.props.deleteTracking(this.props.currentUser.id, this.props.artist.id);
      this.setState({
        tracking: false
      });
    } else {
      this.props.createTracking(this.props.currentUser.id, this.props.artist.id);
      this.setState({
        tracking: true
      });
    };
  }

  render () {
    let artist = this.props.artist;
    if (!artist) {
      return null;
    }

    if (this.state.loading === true) {
      return <div>Loading...</div>
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

    let numTrackers = this.props.artist.trackers.length;

    return (
      <div className="artist-show-component">
        <div className="artist-show-container">
          <img src={this.props.artist.image} className="artist-show-image"></img>
          <div className= "artist-show-info">
            <ul>
              <li><h2>{artist.name } <img src={bluecheck}/></h2></li>
              <li>{artist.genre}</li>
              <li><span className="trackers-info">{numTrackers} Trackers</span> · <span className="tour-info">{tour}</span></li>
            </ul>
          </div>
          {track_button}
        </div>

        <div>
          <ArtistEventIndex
            events={this.props.events}
            venues={this.props.venues}
            currentUser={this.props.currentUser}
            tracking={this.props.tracking}
            createRsvp={this.props.createRsvp}
            deleteRsvp={this.props.deleteRsvp}/>
        </div>

      </div>
    );
  }
}

export default ArtistShow;
