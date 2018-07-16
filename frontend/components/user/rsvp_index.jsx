import React from 'react';
import RsvpIndexItem from './rsvp_index_item';

const RsvpIndex = ({ rsvps }) => {
  return (
    <ul className="rsvp-list">
      {rsvps.map((event) => (
        <li><RsvpIndexItem event={event}/></li>
      ))}
    </ul>
  );
};

export default RsvpIndex;
