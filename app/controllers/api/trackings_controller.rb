class Api::TrackingsController < ApplicationController
  before_action :require_logged_in

  def create
    @tracking = @current_user.trackings.new(tracking_params)

    if @tracking.save
      render json: @tracking
    else
      render json: @tracking.errors.full_messages, status: 422
    end
  end

  def destroy
    tracking = Tracking.find(params[:id])
    tracking.destroy
    render json: { trackingId: tracking.id }
  end

  private

  def tracking_params
    params.require(:tracking).permit(:user_id, :artist_id)
  end
end
