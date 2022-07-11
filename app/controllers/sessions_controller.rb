class SessionsController < ApplicationController
  wrap_parameters format: []
  skip_before_action :authorized, only: [:create, :destroy]

  #login
  def create
    user = User.find_by username: params[:username]
    if user&.authenticate params[:password]
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: { login: "Invalid username or password" } }, status: :unauthorized
    end
  end

  # /logout
  def destroy
    session.clear
    head :no_content
  end
end
