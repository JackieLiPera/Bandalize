json.event do
  json.partial! '/api/events/event', event: @event
end

json.artist do
  json.partial! '/api/artists/artist', artist: @event.artist
  json.image url_for(@event.artist.photo)
end

json.venue do
  json.partial! '/api/venues/venue', venue: @event.venue
end
