class Api::VenuesController < ApplicationController
  def show
    @venue = Venue.find_by_id(params[:id])
  end
end
