json.extract! artist, :id, :name, :on_tour, :genre, :comments, :bio
json.artist_events artist.event_ids.sort
json.artist_venues artist.venue_ids.sort
json.comments artist.comment_ids.sort
json.trackers artist.tracker_ids.sort
