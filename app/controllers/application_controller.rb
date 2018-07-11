class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def log_in!(user)
    session[:session_token] = user.reset_session_token!
  end

  def log_out
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def current_user
    current_user = User.find_by_session_token(session[:session_token])
    current_user
  end

  def logged_in?
    !!current_user
  end
end
