

export const createRsvp = (userId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/rsvp`,
    data: { rsvp }
  });
}
