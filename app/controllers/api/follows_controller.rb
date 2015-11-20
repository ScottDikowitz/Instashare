class Api::FollowsController < ApplicationController

  def index

  end

  def create
    @follows = Follow.new(follow_params)
    @follows.user_id = current_user.id
    if @follows.save
      render json: {follow: "unfollow"}
    else
      render json: {}
    end

  end

  def show
    # byebug
    author = User.find_by(username: params[:id])
    if current_user.is_following?(author)
      render json: {follow: "unfollow"}
    else
      render json: {follow: "follow"}
    end
  end

  def destroy
    this_user = params[:follow]["follower_id"]

    @user = Follow.where(["user_id = ? and follower_id = ?", current_user.id, this_user ])[0]
    # byebug
    if @user
      @user.destroy
      render json: {follow: "follow"}
    else
      render json: {}
    end
  end

  private
  def follow_params
    self.params.require(:follow).permit(:follower_id)
  end

end
