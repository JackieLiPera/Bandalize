json.extract! artist, :id, :name, :on_tour, :genre
json.photoUrl url_for(artist.image_url)
