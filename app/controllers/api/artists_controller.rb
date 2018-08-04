class Api::ArtistsController < ApplicationController

  def show
    @artist = Artist.find_by_id(params[:id])
  end

  def index
    @artists = Artist.all
  end
  
  def search
    if params[:query].present?
      @artist = Artist.search_by_full_name(params[:query].downcase)
      render :show
    else
      @artist = Artist.none
    end
  end

end
