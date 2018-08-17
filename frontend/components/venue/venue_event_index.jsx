import React from 'react';
import VenueEventIndexItem from './venue_event_index_item';

const VenueEventIndex = ({ events, artists, venue, currentUser, createRsvp, deleteRsvp, rsvps }) => {

  const venueEvents = events.map((event) => {

    return (
      <li key={event.id}>
         <VenueEventIndexItem
           currentUser={currentUser}
           event={event}
           artist={artists[event.artist_id]}
           venue={venue}
           createRsvp={createRsvp}
           deleteRsvp={deleteRsvp}
           rsvps={rsvps}
           />
       </li>
     )
    });

  return (
    <ul className="venue-events-list"> Upcoming Events
      {venueEvents}
    </ul>
  );
};


export default VenueEventIndex;
