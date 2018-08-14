class Api::EventsController < ApplicationController

  def show
    @event = Event.includes(:comments, :rsvps, :artist, :venue).find(params[:id])
  end

  def index
    @events = Event.all.includes(:venue, :artist)
  end
end
