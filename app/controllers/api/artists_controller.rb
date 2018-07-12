class Api::ArtistsController < ApplicationController

  def show
    @artist = Artist.find_by(params[:id])
  end

  def index
    @artists = Artist.all
  end

end
