export const createComment = (formData) => {
  return $.ajax({
    url: `/api/artists/artistId/comments`,
    type: 'POST',
    data: formData,
    contentType: false,
    processData: false
  });
}

export const deleteComment = (userId, artistId) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/events/${artistId}/comments/${userId}`,
    data: {
      comment: {
        user_id: userId,
        artist_id: artistId
      }
    }
  });
}
