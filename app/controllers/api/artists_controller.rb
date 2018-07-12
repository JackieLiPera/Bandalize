class Api::ArtistsController < ApplicationController

  def show
    @artist = Artist.find_by_id(params[:id])
  end

  def index
    @artists = Artist.all
  end

end
