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
