json.event do
  json.partial! '/api/events/event', event: @event
end

json.artist do
  json.extract! @event.artist, :id, :name
  json.image url_for(@event.artist.photo)
end

json.venue do
  json.extract! @event.venue, :id, :address, :name, :city, :state, :country
end

json.rsvps do
  @event.rsvps.each do |rsvp|
    json.set! rsvp.user_id do
      json.extract! rsvp, :id, :user_id
    end
  end
end
