json.events do
  @events.each do |event|
    json.set! event.id do
      json.partial! 'event', event: event
    end
  end
end

json.artist do
  @events.each do |event|
    json.set! event.artist.id do
      json.partial! '/api/artists/artist', artist: event.artist
    end
  end
end
