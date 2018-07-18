import React from 'react';
import RsvpIndexItem from './rsvp_index_item';

const RsvpIndex = ({ rsvps }) => {
  return (
    <ul className="rsvp-list">
      {rsvps.map((eventid) => (
        <li key={Math.floor(Math.random() * 1000000000)}><RsvpIndexItem eventid={eventid}/></li>
      ))}
    </ul>
  );
};

export default RsvpIndex;
