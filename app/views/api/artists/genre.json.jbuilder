@artists.each do |artist|
  json.set! artist.id do
    json.partial! 'artist', artist: artist
    json.image url_for(artist.photo)
  end
end
