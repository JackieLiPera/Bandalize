import React from 'react';
import { Link } from 'react-router-dom';
import PopularEventIndexItem from './popular_event_index_item';
import { geolocated } from 'react-geolocated';


class EventIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true
    }

    this.generateLocalEvents = this.generateLocalEvents.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
  }


  componentDidMount() {
    this.props.fetchEvents().then(
      success => this.setState({ loading: false })
    )
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (this.props.coords !== nextProps.coords) {

    }
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  }

  generateLocalEvents() {
    const venues = this.props.venues;
    const artists = this.props.artists;
    const shuffled_events = this.shuffle(this.props.events);

    return shuffled_events.map ((event) => {
      return <li key={event.id}>
        <PopularEventIndexItem event={event} venue={venues[event.venue_id]} artist={artists[event.artist_id]}/>
      </li>
    });
  }

  getUserLocation() {
    // !this.props.isGeolocationAvailable
    // ? <div>Your browser does not support Geolocation</div>
    // : !this.props.isGeolocationEnabled
    // ? <div>Geolocation is not enabled</div>
    // : this.props.coords
}


  render () {
    if (this.state.loading === true) {
      return <img className="loading" src={window.loadingGif}></img>
    }

    const image = window.tealx;
    let localEvents = this.generateLocalEvents();

    return (
      <div className="event-index-container">
        <h2>Popular Events Near <span className="location-selector">New York, NY
          <img className="teal-x" src={image}/></span>
          <div className="events-container">
            <ul className="events-list">
              {localEvents.slice(0, 6)}
            </ul>
          </div>
        </h2>

        <h2>Recent News
          <div>
            <ul className="recent-news-list">
              <li>
                <img src={window.article1}/>
                <a href="https://tinyurl.com/y8ahhwq5">Bandsintown Big Break: How Yungblud’s Hyper-Energetic Alt-Rock Rages Against The Machine</a>
              </li>
              <li>
                <img src={window.article2}/>
                <a href="https://tinyurl.com/y82evpzh">The Revolution's Tour Bus Playlist Featuring Guns N Roses, Public Enemy, Chromeo </a>
              </li>
              <li>
                <img src={window.article3}/>
                <a href="https://tinyurl.com/ybp35me3">Photo Gallery: Lettuce Brought The Funk To NYC's Blue Note Jazz Club</a>
              </li>
              <li>
                <img src={window.article4}/>
                <a href="https://tinyurl.com/yddulqok">Top 5 Live: The Acts Bay Ledges Want To See At Summerfest 2018</a>
              </li>
            </ul>
          </div>
        </h2>

        <h2>Events by Genre
          <div>
            <ul className="genre-list">
              <li className="rock"><Link to="/api/artists"></Link>Rock</li>
              <li className="electronic"><Link to="/api/artists"></Link>Electronic</li>
              <li className="pop"><Link to="/api/artists"></Link>Pop</li>
              <li className="alternative"><Link to="/api/artists"></Link>Alternative</li>
              <li className="folk"><Link to="/api/artists"></Link>Folk</li>
              <li className="r-b"><Link to="/api/artists"></Link>R&B</li>
            </ul>
          </div>
        </h2>
      </div>
    );

  }
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(EventIndex);
