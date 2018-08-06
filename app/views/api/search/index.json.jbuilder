json.artist_results do
  @artists.each do |artist|
    json.set! artist.id do
      json.partial! '/api/search/search', result: artist
    end
  end
end
