export const createComment = (formData) => {
  return $.ajax({
    url: `/api/events/eventId/comments`,
    type: 'POST',
    data: formData,
    contentType: false,
    processData: false
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
