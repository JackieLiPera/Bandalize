json.artist do
  json.partial! '/api/artists/artist', artist: @artist
end

json.events do
  @artist.events.each do |event|
    json.set! event.id do
      json.partial! '/api/events/event', event: event
    end
  end
end

json.venues do
  @artist.venues.each do |venue|
    json.set! venue.id do
      json.partial! '/api/venues/venue', venue: venue
    end
  end
end
