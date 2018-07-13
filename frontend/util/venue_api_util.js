

export const fetchVenues = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/venues'
  });
}

export const fetchVenue = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/venues/${id}`
  });
}
