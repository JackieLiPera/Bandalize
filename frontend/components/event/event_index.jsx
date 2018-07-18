import React from 'react';
import { Link } from 'react-router-dom';
import PopularEventIndexItem from './popular_event_index_item';

class EventIndex extends React.Component {
  constructor (props) {
    super(props);
    this.shuffle = this.shuffle.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
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
        <div></div>
        <PopularEventIndexItem event={event} artists={this.props.artists}/>
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
              <li></li>
              <li></li>
              <li></li>
              <li></li>
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
