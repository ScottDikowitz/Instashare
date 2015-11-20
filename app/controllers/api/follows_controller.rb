class Api::FollowsController < ApplicationController

  def index

  end

  def create
    @follows = Follow.new(follow_params)
    @follows.user_id = current_user.id
    if @follows.save
      render json: @follows.to_json
    else
      render json: {}
    end

  end

  def show
    # @comment = Comment.find(params[:id])
    # render json: @comment
  end

  private
  def follow_params
    self.params.require(:follow).permit(:follower_id)
  end

end
