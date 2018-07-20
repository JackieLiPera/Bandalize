import React from 'react';
import SuggestedEventIndexItem from './suggested_events_index_item';

const SuggestedEventIndex = ({ events, artists, venues, currentUser }) => {

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  };

  const mappedEvents = Object.values(events).map((event) => {
    if (artists[event.artist_id] && !currentUser.rsvp_events.includes(event.id) ) {
      return <li className="suggested-event" key={event.id}>
        <SuggestedEventIndexItem
          artist={artists[event.artist_id]}
          event={event}
          venue={venues[event.venue_id]}/></li>
    }
  });

  return (
    <ul className="tracked-events-list">
      {shuffle(mappedEvents)}
    </ul>
  );
};

export default SuggestedEventIndex;
