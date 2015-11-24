class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      render json: @like
    else
      ### dangerous! ?

      render json: {}
    end

  end

  def index

  end

  def show
    # render json: Location.find(params[:id]).as_json(only: [:id, :place])

  end

  def update
  end

  private
  def like_params
    self.params.require(:like).permit(:post_id)
  end

end
