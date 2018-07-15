class Api::RsvpController < ApplicationController
  before_action :require_logged_in

  def create
    @rsvp = current_user.rsvps.new(rsvp_params)

    if @rsvp.save
      render json: @rsvp
    else
      render json: @rsvp.errors.full_messages, status: 422
    end
  end

  def destroy
    @rsvp = current_user.rsvps.find(params[:id])
    @rsvp.destroy
    render json: @rsvp
  end

  private

  def rsvp_params
    params.require(:rsvp).permit(:user_id, :event_id)
  end
end
