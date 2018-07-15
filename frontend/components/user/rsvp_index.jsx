import React from 'react';
import RsvpIndexItem from './rsvp_index_item';

const RsvpIndex = ({ rsvps }) => {

  return (
    <ul className="rsvp-list">
      {rsvps.map((eventId) => (
        <li><RsvpIndexItem eventId={eventId}/></li>
      ))}
    </ul>
  );
};

export default RsvpIndex;
