json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :event_on, :artist_id, :venue_id
    end
  end
end

json.artist do
  @events.each do |event|
    json.set! event.artist.id do
      json.extract! event.artist, :id, :name
      json.image url_for(event.artist.photo)
    end
  end
end

json.venue do
  @events.each do |event|
    json.set! event.venue.id do
      json.extract! event.venue, :id, :name
    end
  end
end
