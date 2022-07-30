class UsersController < ApplicationController
  wrap_parameters format: []
  skip_before_action :authorized, only: [:show, :create]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unporocessable_entity

  def show
    current_user = User.find session[:user_id]
    render json: current_user
  end

  def create
    user = User.create! user_params
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def render_unporocessable_entity(invalid)
    render json: { error: invalid.record.errors, message: "INVALID" }, status: :unprocessable_entity
  end

  def user_params
    params.permit(:username, :password)
  end
end
