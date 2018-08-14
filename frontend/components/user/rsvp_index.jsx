import React from 'react';
import RsvpIndexItem from './rsvp_index_item';

const RsvpIndex = ({ rsvps, artists, venues}) => {
  const rsvpEvents = Object.values(rsvps).map((rsvp) => {
    debugger
    return <li key={rsvp.id}>
      <RsvpIndexItem artist={artists[rsvp.artist_id]} rsvp={rsvp} venue={venues[rsvp.venue_id]} /></li>
  });

  if (rsvpEvents.length === 0) {
    return <li className="empty-list">You have no RSVPs yet!</li>
  }


  return (
    <ul className="rsvp-list">
      {rsvpEvents}
    </ul>
  );
};

export default RsvpIndex;
