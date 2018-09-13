class Api::ArtistsController < ApplicationController

  def show
    @artist = Artist.includes(:comments).order("comments.created_at DESC").find_by_id(params[:id])
    @trackings = @artist.trackings
    @events = @artist.events.order("events.event_on ASC")
    @venues = @artist.venues
    @rsvps = @artist.rsvps

    user_ids = @artist.comments.map do |comment|
      comment.user_id
    end

    @users = User.find(user_ids)

    if @artist
      render :show
    else
      render json: ["No artist found"], status: 404
    end
  end

  def index
    debugger
    @artists = Artist.all.includes(:events, :venues, :trackings)
    @rock = Artist.all.where(genre: "Rock").with_attached_photo
    @electronic = Artist.all.where(genre: "Electronic").with_attached_photo
    @pop = Artist.all.where(genre: "Pop").with_attached_photo
    @alternative = Artist.all.where(genre: "Alternative").with_attached_photo
    @folk = Artist.all.where(genre: "Folk").with_attached_photo
    @r_b = Artist.all.where(genre: "R&B").with_attached_photo
  end

end
