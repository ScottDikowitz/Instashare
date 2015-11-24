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

  def destroy
    like = Like.find_by(user_id: current_user.id, post_id: params[:like][:post_id])
    like.destroy
    render json: {}
  end

  private
  def like_params
    self.params.require(:like).permit(:post_id)
  end

end
