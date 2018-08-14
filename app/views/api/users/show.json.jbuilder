json.currentUser do
  json.partial! 'api/users/user', currentUser: @user
end
#
json.artists do
  @user.tracked_artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name
      json.image url_for(artist.photo)
    end
  end

  @user.rsvpd_artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name
      json.image url_for(artist.photo)
    end
  end
end

json.rsvps do
  @user.rsvp_events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :event_on, :artist_id, :venue_id
    end
  end

  @user.tracked_events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :event_on, :artist_id, :venue_id
    end
  end
end

json.venues do
  @user.rsvpd_venues.each do |venue|
    json.set! venue.id do
      json.extract! venue, :id, :name
    end
  end

  @user.tracked_venues.each do |venue|
    json.set! venue.id do
      json.extract! venue, :id, :name
    end
  end
end
