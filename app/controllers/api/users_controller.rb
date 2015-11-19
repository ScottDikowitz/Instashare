class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users.to_json
  end

  def show

    @user = User.find_by(username: params[:id])
    @posts = @user.posts
    render :show
  end

end
