json.extract! artist, :id, :name, :on_tour, :genre, :comments, :bio
artist_events = artist.events.order("events.event_on ASC")
json.artistEvents artist_events.ids
json.artist_venues artist.venue_ids
json.comments artist.comment_ids
json.trackers artist.tracker_ids.sort
