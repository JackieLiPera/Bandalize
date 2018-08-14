class Api::VenuesController < ApplicationController
  def show
    @venue = Venue.includes(:events, :artists).find_by_id(params[:id])
  end
end
