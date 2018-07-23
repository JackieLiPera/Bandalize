json.extract! artist, :id, :name, :on_tour, :genre
json.artist_events artist.event_ids
json.artist_venues artist.venue_ids
json.trackers artist.trackers
