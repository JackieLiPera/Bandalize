import React from 'react';
import RsvpIndexItem from './rsvp_index_item';

const RsvpIndex = ({ rsvps, artists }) => {
  const rsvpEvents = Object.values(rsvps).map((rsvp) => {
    
    return <li key={rsvp.id}>
       <RsvpIndexItem artist={artists[rsvp.artist_id]} rsvp={rsvp} /></li>
    });

  return (
    <ul className="rsvp-list">
      {rsvpEvents}
    </ul>
  );
};

export default RsvpIndex;
