import React from 'react';
import { Link } from 'react-router-dom';
import PopularEventIndexItem from './popular_event_index_item';

class EventIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true
    }
    this.shuffle = this.shuffle.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents().then(
      success => this.setState({ loading: false })
    )
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  }

  render () {
    let image = window.tealx;
    let shuffled_events = this.shuffle(this.props.events);
    let all_events = shuffled_events.map ((event) => {
      return <li key={Math.floor(Math.random() * 1000000000)}>
        <PopularEventIndexItem event={event} venue={this.props.venues[event.venue_id]} artist={this.props.artists[event.artist_id]}/>
      </li>
    });


    return (
      <div className="event-index-container">
        <h2>Popular Events Near <span className="location-selector">New York, NY
          <img className="teal-x" src={image}/></span>
          <div className="events-container">
            <ul className="events-list">
              {all_events.slice(0, 6)}
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
              <li className="rock">Rock</li>
              <li className="electronic">Electronic</li>
              <li className="pop">Pop</li>
              <li className="alternative">Alternative</li>
              <li className="folk">Folk</li>
              <li className="r-b">R&B</li>
            </ul>
          </div>
        </h2>
      </div>
    );

  }
};

export default EventIndex;
