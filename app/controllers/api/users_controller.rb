class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
