

export const createRsvp = (userId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/rsvp`,
    data: { rsvp }
  });
}

export const deleteRsvp = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/rsvp/${id}`
  });
}
