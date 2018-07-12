import React from 'react';

const UserShow = () => {
// / ul
// <Artists/>
// <Airtist-items/>

  return (
    <div>

      <label>Tracked Events
        <div className="tracked-events-container">
          <ul className="tracked-events-list">
            <li>Event1</li>
            <li>Event2</li>
            <li>Event3</li>
            <li>Event4</li>
            <li>Event5</li>
            <li>Event6</li>
          </ul>
        </div>
      </label>

      <label>Tracked Artists
        <div className="tracked-artists">
          <ul className="tracked-artists-list">
            <li>Artist1</li>
            <li>Artist2</li>
            <li>Artist3</li>
            <li>Artist4</li>
            <li>Artist5</li>
            <li>Artist6</li>
          </ul>
        </div>
      </label>

      <label>RSVPs
        <div className="rsvp-container">
          <ul className="rsvp-list">
            <li>rsvp1</li>
            <li>rsvp2</li>
            <li>rsvp3</li>
            <li>rsvp4</li>
            <li>rsvp5</li>
            <li>rsvp6</li>
          </ul>
        </div>
      </label>
    </div>
  );
};

export default UserShow;
