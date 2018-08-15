class Api::EventsController < ApplicationController

  def show
    @event = Event.includes(:comments, :rsvps, :artist, :venue).find(params[:id])

    if @event
      render :show
    else
      render json: ["No event found"], status: 404
    end
  end

  def index
    @events = Event.all.includes(:venue, :artist)
  end
end
