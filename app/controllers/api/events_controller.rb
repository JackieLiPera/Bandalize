class Api::EventsController < ApplicationController

  def show
    @event = Event.find(params[:id])
  end

  def index
    @events = Event.all.includes(:artist, :venue)
  end
end
