json.artist do
  json.partial! '/api/artists/artist', artist: @artist
  json.image url_for(@artist.photo)
end

json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :event_on, :venue_id, :rsvp_ids
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

json.comments do
  @artist.comments.each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end
  end
end

json.trackings do
  @artist.trackings.each do |tracking|
    json.set! tracking.user_id do
      json.extract! tracking, :id, :user_id
    end
  end
end

json.rsvps do
  @artist.rsvps.each do |rsvp|
    json.set! rsvp.id do
      json.extract! rsvp, :id, :user_id
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :firstname, :lastname
    end
  end
end
