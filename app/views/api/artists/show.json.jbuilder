json.artist do
  json.partial! '/api/artists/artist', artist: @artist
  json.image url_for(@artist.photo)
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

# json.trackers do
#   @artist.trackers.each do |user|
#     json.set! user.id do
#       json.partial! 'api/users/user', user: user
#     end
#   end
# end
