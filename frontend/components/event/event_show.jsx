import React from 'react';

const EventShow = () => {
  const image = window.tealx;

  return (
    <div className="event-show-container">
      <h2>Popular Events Near <span className="location-selector">New York, NY
        <img className="teal-x" src={image}/></span>
        <div className="events-container">
          <ul className="events-list">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </h2>
    </div>
  );
};

export default EventShow;
