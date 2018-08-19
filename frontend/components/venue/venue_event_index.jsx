import React from 'react';
import VenueEventIndexItem from './venue_event_index_item';

const VenueEventIndex = ({ events, artists, venue, currentUser, createRsvp, deleteRsvp, rsvps, venueEvents }) => {

  const EventIndexItems = venueEvents.map((eventId) => {

    return (
      <li key={events[eventId].id}>
         <VenueEventIndexItem
           currentUser={currentUser}
           event={events[eventId]}
           artist={artists[events[eventId].artist_id]}
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
      {EventIndexItems}
    </ul>
  );
};


export default VenueEventIndex;
