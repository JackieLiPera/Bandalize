

export const createRsvp = (userId, eventId) => {
  return $.ajax({
    type: 'POST',
    url: `/api/users/${userId}/rsvp`,
    data: {
      rsvp: {
        user_id: userId,
        event_id: eventId
      }
    }
  });
}

export const deleteRsvp = (userId, eventId) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/users/${userId}/rsvp/${eventId}`,
    data: {
      rsvp: {
        user_id: userId,
        event_id: eventId
      }
    }
  });
}
