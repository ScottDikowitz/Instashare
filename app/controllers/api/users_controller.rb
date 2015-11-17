class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users.to_json
  end

  def show
    # byebug
    user = User.find_by(username: params[:username])
    @posts = user.posts.reverse
    render json: @posts
  end

end
