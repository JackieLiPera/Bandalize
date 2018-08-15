export const createComment = (formData) => {
  return $.ajax({
    url: `/api/artists/artistId/comments`,
    type: 'POST',
    data: formData,
    contentType: false,
    processData: false
  });
}

export const deleteComment = (commentId, artistId) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/artists/${artistId}/comments/${commentId}`,
    data: {
      comment: {
        comment_id: commentId,
        artist_id: artistId
      }
    }
  });
}
