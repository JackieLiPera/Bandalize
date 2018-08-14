class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    @comment = @current_user.comments.new(comment_params)

    if @comment.save
      @event = @comment.event
      render 'api/events/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = @current_user.comments.find_by(comment_params)

    if @comment.destroy

      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :event_id)
  end
end
