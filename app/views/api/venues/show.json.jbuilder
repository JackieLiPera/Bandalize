json.venue do
  json.partial! '/api/venues/venue', venue: @venue
end

json.events do
  @venue.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :event_on, :artist_id, :venue_id
    end
  end
end

json.artists do
  @venue.artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name
      json.image url_for(artist.photo)
    end
  end
end
