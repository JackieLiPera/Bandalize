class Api::ArtistsController < ApplicationController

  def show
    @artist = Artist.with_attached_photo.includes(:comments, :events, :venues, :trackers).find_by_id(params[:id])

    if @artist
      render :show
    else
      render json: ["No artist found"], status: 404
    end
  end

  def index
    @artists = Artist.all.includes(:events, :venues, :trackers)
  end

end
