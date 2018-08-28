class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    @comment = Comment.with_attached_photo.includes(:user).new(comment_params)
    optional_photo = params[:comment][:photo]

    unless optional_photo == "undefined" || optional_photo == "null"
      @comment.photo.attach(params[:comment][:photo]) if params[:comment][:photo]
    end

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
    params.require(:comment).permit(:body, :user_id, :artist_id)
  end
end
