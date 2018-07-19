json.currentUser do
  json.partial! 'api/users/user', currentUser: @user
end
# 
# json.artists do
#   @user.trackings.each do |artist|
#     json.set! artist.id do
#       json.partial! '/api/artists/artist', artist: artist
#     end
#   end
# end
#
# json.events do
#   @user.rsvp_events.each do |event|
#     json.set! event.id do
#       json.partial! '/api/events/event', event: event
#     end
#   end
# end
#
# json.event do
#   json.partial! '/api/events/event', event: @event
# end
#
# json.artist do
#   json.partial! '/api/artists/artist', artist: @event.artist
#   json.image url_for(@event.artist.photo)
# end
