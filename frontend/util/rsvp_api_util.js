

export const createRsvp = (userId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/rsvp`,
    data: { rsvp }
  });
}

export const deleteRsvp = (userId, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/:${userId}/rsvp/${id}`
  });
}
 // unnest the delete
