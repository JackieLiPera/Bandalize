class Api::EventsController < ApplicationController

  def show
    @event = Event.includes(:rsvps, :venue, artist: [photo_attachment: :blob]).find(params[:id])
    if @event
      render :show
    else
      render json: ["No event found"], status: 404
    end
  end

  def index
    @events = Event.all.includes(:venue, artist: [photo_attachment: :blob])
  end
end
