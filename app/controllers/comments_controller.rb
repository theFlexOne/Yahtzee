class CommentsController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    comment = Comment.create!(comment_params)
    render json: { comment: comment }, status: :created
  end

  private

  def comment_params
    params.permit(:name, :subject, :comment)
  end
end
