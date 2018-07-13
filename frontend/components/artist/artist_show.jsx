import React from 'react';

const ArtistShow = () => {

  // componentDidMount() {
  //   this.props.fetchArtist();
  // }

    return (
      <div className="artist-show-component">
        <div className="artist-show-container">
          <img className="artist-show-image"></img>
          <div className= "artist-show-info"></div>
          <button className="artist-track-button">Track</button>
        </div>

        <div>
          <ul className="artist-events-list">Upcoming Events
            <li> <button className="rsvp-button" >RSVP</button></li>
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

export default ArtistShow;
