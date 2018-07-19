import React from 'react';
import RsvpIndexItem from './rsvp_index_item';

const RsvpIndex = ({ rsvps, artists }) => {
  return (
    <ul className="rsvp-list">
      {rsvps.map((rsvp) => (
        <li key={Math.floor(Math.random() * 1000000000)}>
          <RsvpIndexItem
            rsvp={rsvp}
            artists={artists}
            /></li>
      ))}
    </ul>
  );
};

export default RsvpIndex;
