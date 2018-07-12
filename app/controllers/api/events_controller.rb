class Api::EventsController < ApplicationController
  
  def show
    debugger
    @event = Event.find_by(params[:id])
  end

  def index
    @events = Event.all
  end
end
