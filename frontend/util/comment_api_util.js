export const createComment = (body, userId, eventId) => {
  return $.ajax({
    type: 'POST',
    url: `/api/events/${eventId}/comments`,
    data: {
      comment: {
        body: body,
        user_id: userId,
        event_id: eventId
      }
    }
  });
}

export const deleteComment = (userId, eventId) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/events/${eventId}/comments/${userId}`,
    data: {
      comment: {
        user_id: userId,
        event_id: eventId
      }
    }
  });
}
