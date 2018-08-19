export const searchResults = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/search',
    dataType: 'json',
    data: { query }
  });
};
