
export const createTracking = (userId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/trackings`,
    data: { rsvp }
  });
}
