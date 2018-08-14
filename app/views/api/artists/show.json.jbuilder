json.artist do
  json.partial! '/api/artists/artist', artist: @artist
  json.image url_for(@artist.photo)
end

json.events do
  @artist.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :event_on, :venue_id
    end
  end
end

json.venues do
  @artist.venues.each do |venue|
    json.set! venue.id do
      json.extract! venue, :id, :name, :address, :city, :state, :country
    end
  end
end

# json.trackers do
#   @artist.trackers.each do |user|
#     json.set! user.id do
#       json.partial! 'api/users/user', user: user
#     end
#   end
# end
