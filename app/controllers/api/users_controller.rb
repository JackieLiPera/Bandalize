class Api::UsersController < ApplicationController

  def show
    @user = User.includes(:rsvps, :comments, tracked_artists: [photo_attachment: :blob]).find_by_id(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render '/api/events/index'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :firstname, :lastname)
  end
end
