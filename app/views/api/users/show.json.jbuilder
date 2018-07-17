json.currentUser do
  json.partial! 'api/users/user', currentUser: @user
end

json.artists do
  @currentUser.tracked_artists.each do |artist|
    json.set! artist.id do
      json.partial! '/api/artists/artist', artist: artist
    end
  end
end
