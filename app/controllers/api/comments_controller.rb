class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    @comment = Comment.with_attached_photo.includes(:user).new(comment_params)
    @comment.user_id = params[:comment][:user_id]
    @comment.artist_id = params[:comment][:artist_id]
    optional_photo = params[:comment][:photo]
    @comment.photo.attach(params[:comment][:photo]) unless optional_photo == "undefined" || optional_photo == "null"

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
