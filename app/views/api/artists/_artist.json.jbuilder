json.extract! artist, :id, :name, :on_tour, :genre
json.photoUrl url_for(artist.image_url)
json.artist_events artist.event_ids
json.artist_venues artist.venue_ids
