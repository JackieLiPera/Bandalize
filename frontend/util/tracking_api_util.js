export const createTracking = (userId, artistId) => {
  return $.ajax({
    type: 'POST',
    url: `/api/artists/${artistId}/trackings`,
    data: {
      tracking: {
        user_id: userId,
        artist_id: artistId
      }
    }
  });
}

export const deleteTracking = (trackingId, artistId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/artists/${artistId}/trackings/${trackingId}`,
    data: {
      tracking: {
        tracking_id: trackingId,
        artist_id: artistId
      }
    }
  });
}
