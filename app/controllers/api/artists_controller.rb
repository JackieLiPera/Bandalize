class Api::ArtistsController < ApplicationController

  def show
    @artist = Artist.with_attached_photo.includes(:events, :venues, :trackers).find_by_id(params[:id])
  end

  def index
    @artists = Artist.all.includes(:events, :venues, :trackers)
  end

end
