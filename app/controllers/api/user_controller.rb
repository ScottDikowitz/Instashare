class Api::PostsController < ApplicationController

  def index
    @users = User.all
    render json: @users.to_json
  end

  def show
    user = User.find(params[:id])
    @posts = user.posts
    render json: @posts
  end

end
