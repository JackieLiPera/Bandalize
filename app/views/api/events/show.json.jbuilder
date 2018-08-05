json.event do
  json.partial! '/api/events/event', event: @event
  json.rsvpd @event.rsvps
end

json.artist do
  json.partial! '/api/artists/artist', artist: @event.artist
  json.image url_for(@event.artist.photo)
end

json.venue do
  json.partial! '/api/venues/venue', venue: @event.venue
end

json.comments do
  @event.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
      # json.image url_for(comment.photo) unless comment.photo.nil?
    end
  end
end
