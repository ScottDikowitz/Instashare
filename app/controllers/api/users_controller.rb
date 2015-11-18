class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users.to_json
  end

  def show

    @user = User.find_by(username: params[:username])
    @posts = @user.posts.reverse
    render :show
  end

end
