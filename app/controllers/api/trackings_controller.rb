class Api::TrackingsController < ApplicationController
  before_action :require_logged_in

  def create
    @tracking = current_user.tracked_artists.new(tracking_params)

    if @tracking.save
      render json: @tracking
    else
      render json: @tracking.errors.full_messages, status: 422
    end
  end

  def destroy
    @tracking = @current_user.trackings.find_by(tracking_params)

    if @tracking.destroy
      render json: @tracking.id
    else
      render json: @tracking.errors.full_messages, status: 422
    end
  end

  private

  def tracking_params
    params.require(:tracking).permit(:user_id, :artist_id)
  end
end
