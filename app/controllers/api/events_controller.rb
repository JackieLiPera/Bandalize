class Api::EventsController < ApplicationController

  def show
    @event = Event.find_by_id(params[:id])
  end

  def index
    @events = Event.all
  end
end
