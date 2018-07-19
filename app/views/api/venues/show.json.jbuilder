json.venue do
  json.partial! '/api/venues/venue', venue: @venue
end

json.events do
  @venue.events.each do |event|
    json.set! event.id do
      json.partial! '/api/events/event', event: event
    end
  end
end

json.artists do
  @venue.artists.each do |artist|
    json.set! artist.id do
      json.partial! 'api/artists/artist', artist: artist
    end
  end
end
