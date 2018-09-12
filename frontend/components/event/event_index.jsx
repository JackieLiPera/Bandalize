import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PopularEventIndexItem from "./popular_event_index_item";
import { geolocated } from "react-geolocated";
import ArtistByGenreIndex from "../artist/artist_by_genre_index";

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      city: null,
      loading: true,
      error: null
    };

    this.generateLocalEvents = this.generateLocalEvents.bind(this);
    this.generateGenreIndexItem = this.generateGenreIndexItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents().then(success => this.setState({ loading: false }));
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          },
          () => this.getGeocode()
        );
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000 }
    );
  }

  getGeocode() {
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        this.state.latitude +
        "," +
        this.state.longitude +
        "&key=AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U"
    )
      .then(response => response.json())
      .then(data => {
        let address = data.results[0].formatted_address.split(",");

        this.setState({
          city: address[1]
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  generateLocalEvents() {
    const venues = this.props.venues;
    const artists = this.props.artists;
    const shuffled_events = this.shuffle(this.props.events);

    return shuffled_events.map(event => {
      return (
        <li key={event.id}>
          <PopularEventIndexItem
            event={event}
            venue={venues[event.venue_id]}
            artist={artists[event.artist_id]}
          />
        </li>
      );
    });
  }

  generateGenreIndexItem() {
    const genres = ["Rock", "Electronic", "Pop", "Alternative", "Folk", "R&B"];
    return genres.map(genre => {
      let classname;
      if (genre === "R&B") {
        classname = "r-b";
      } else {
        classname = genre.toLowerCase();
      }

      return (
        <li
          className={classname}
          value={classname}
          onClick={genre => this.handleClick(classname)}
        >
          <ArtistByGenreIndex />
          {genre}
        </li>
      );
    });
  }

  handleClick(genre) {
    this.props.history.push(`api/artists/${genre}`);
  }

  render() {
    if (this.state.loading === true) {
      return <img className="loading" src={window.loadingGif} />;
    }

    let localEvents = this.generateLocalEvents();
    return (
      <div className="event-index-container">
        <h2>
          Popular Events Near
          <span className="location-selector"> {this.state.city}</span>
          <div className="events-container">
            <ul className="events-list">{localEvents.slice(0, 6)}</ul>
          </div>
        </h2>

        <h2>
          Recent News
          <div>
            <ul className="recent-news-list">
              <li>
                <img src={window.article1} />
                <a href="https://tinyurl.com/y8ahhwq5">
                  Bandsintown Big Break: How Yungblud’s Hyper-Energetic Alt-Rock
                  Rages Against The Machine
                </a>
              </li>
              <li>
                <img src={window.article2} />
                <a href="https://tinyurl.com/y82evpzh">
                  The Revolution's Tour Bus Playlist Featuring Guns N Roses,
                  Public Enemy, Chromeo{" "}
                </a>
              </li>
              <li>
                <img src={window.article3} />
                <a href="https://tinyurl.com/ybp35me3">
                  Photo Gallery: Lettuce Brought The Funk To NYC's Blue Note
                  Jazz Club
                </a>
              </li>
              <li>
                <img src={window.article4} />
                <a href="https://tinyurl.com/yddulqok">
                  Top 5 Live: The Acts Bay Ledges Want To See At Summerfest 2018
                </a>
              </li>
            </ul>
          </div>
        </h2>

        <h2>
          Artists by Genre
          <div>
            <ul className="genre-list">{this.generateGenreIndexItem()}</ul>
          </div>
        </h2>
      </div>
    );
  }
}

export default withRouter(EventIndex);
