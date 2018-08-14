json.event do
  json.partial! '/api/events/event', event: @event
end

json.artist do
  json.extract! @event.artist, :id, :name
  json.image url_for(@event.artist.photo)
end

json.venue do
  json.extract! @event.venue, :id, :name, :address, :city, :state, :country
end
