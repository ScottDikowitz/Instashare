class Api::FollowsController < ApplicationController

  def index

  end

  def create
    @follows = Follows.new(follows_params)
    # byebug
    # byebug
    @follows.user_id = current_user.id
    if @follows.save
      render json: @follows.to_json
    end

  end

  def show
    # @comment = Comment.find(params[:id])
    # render json: @comment
  end

  private
  def comment_params
    self.params.require(:follow).permit(:follower_id)
  end

end
