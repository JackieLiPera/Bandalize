import React from 'react';
import EventIndexItem from './event_index_item';

const ArtistEventIndex = ({ artistEvents = [], venues, events, tracking, currentUser, createRsvp, deleteRsvp, rsvps, openModal }) => {
  const ArtistEventIndexItems = artistEvents.map((eventId) => {
    const event = events[eventId] || {};

    return (
     <EventIndexItem
       key={eventId}
       event={event}
       venue={venues[event.venue_id]}
       tracking={tracking}
       currentUser={currentUser}
       createRsvp={createRsvp}
       deleteRsvp={deleteRsvp}
       rsvps={rsvps}
       openModal={openModal}
      />

     )
    });

  return (
    <ul className="artist-events-list"> Upcoming Events
      { ArtistEventIndexItems }
    </ul>
  );
};


export default ArtistEventIndex;
