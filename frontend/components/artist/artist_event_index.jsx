import React from 'react';
import EventIndexItem from './event_index_item';

// class ArtistEventIndex extends React.Component{
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//     const venues = this.props.venues || {};
//     return (
//       <ul className="artist-events-list">Upcoming Events
//         {this.props.artistEvents.map((eventId) => (
//           <EventIndexItem
//             key={eventId}
//             event={this.props.events[eventId]}
//             venue={venues[this.props.events[eventId].venue_id]}
//             tracking={this.props.tracking}
//             currentUser={this.props.currentUser}
//             createRsvp={this.props.createRsvp}
//             deleteRsvp={this.props.deleteRsvp}
//             rsvps={this.props.rsvps}
//             />
//         ))}
//       </ul>
//     );
//   }
// }

const ArtistEventIndex = ({ artistEvents = [], venues, events, tracking, currentUser, createRsvp, deleteRsvp, rsvps }) => {
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
