export const createRsvp = (userId, eventId) => {
  return $.ajax({
    type: 'POST',
    url: `/api/events/${eventId}/rsvp`,
    data: {
      rsvp: {
        user_id: userId,
        event_id: eventId
      }
    }
  });
}

export const deleteRsvp = (rsvpId, eventId) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/events/${eventId}/rsvp/${rsvpId}`,
    data: {
      rsvp: {
        rsvp_id: rsvpId,
        event_id: eventId
      }
    }
  });
}
