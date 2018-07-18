
export const createTracking = (userId, artistId) => {
  return $.ajax({
    type: 'POST',
    url: `/api/users/${userId}/trackings`,
    data: {
      tracking: {
        user_id: userId,
        artist_id: artistId
      }
    }
  });
}

export const deleteTracking = (userId, artistId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/trackings/${artistId}`,
    data: {
      tracking: {
        user_id: userId,
        artist_id: artistId
      }
    }
  });
}
