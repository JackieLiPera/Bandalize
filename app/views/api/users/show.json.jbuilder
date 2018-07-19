json.currentUser do
  json.partial! 'api/users/user', currentUser: @user
end
#
json.artists do
  @user.tracked_artists.each do |artist|
    json.set! artist.id do
      json.partial! '/api/artists/artist', artist: artist
      json.image url_for(artist.photo)
    end
  end
  @user.rsvpd_artists.each do |artist|
    json.set! artist.id do
      json.partial! '/api/artists/artist', artist: artist
      json.image url_for(artist.photo)
    end
  end
end

json.rsvps do
  @user.rsvp_events.each do |event|
    json.set! event.id do
      json.partial! '/api/events/event', event: event
    end
  end
end
