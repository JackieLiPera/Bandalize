json.extract! artist, :id, :name, :on_tour, :genre, :comments
json.artist_events artist.event_ids
json.artist_venues artist.venue_ids
json.comments artist.comment_ids
json.trackers artist.tracker_ids
