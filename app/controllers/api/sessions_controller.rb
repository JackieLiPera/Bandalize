class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password])

    if @user
      log_in!(@user)
      render '/'
    else
      render json: ['Invalid username/password combination'], status: 401
    end
  end

  def destroy
    log_out
    render json: {}
  end

end
