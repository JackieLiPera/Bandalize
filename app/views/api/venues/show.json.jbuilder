json.venue do
  json.partial! '/api/venues/venue', venue: venue
end

json.events do
  @venue.events.each do |event|
    json.set! event.id do
      json.partial! '/api/events/event', event: @venue.event
    end
  end
end
