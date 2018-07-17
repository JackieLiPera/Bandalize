json.extract! artist, :id, :name, :on_tour, :genre
json.photoUrl url_for(artist.image_url)
json.artist_events artist.event_ids
json.venues artist.venue_event_ids
