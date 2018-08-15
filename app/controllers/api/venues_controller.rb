class Api::VenuesController < ApplicationController
  def show
    @venue = Venue.includes(:events, :artists).find_by_id(params[:id])

    if @venue
      render :show
    else
      render json: ["No venue found"], status: 404
    end
  end
end
