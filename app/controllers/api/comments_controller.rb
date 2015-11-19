class Api::PostsController < ApplicationController

  def index

  end

  def create
    @comment = Post.new(comment_params)
    # byebug
    if @comment.save
      render json: @comment.to_json
    end

  end

  def show
    # @comment = Comment.find(params[:id])
    # render json: @comment
  end

  private
  def comment_params
    self.params.require(:comment).permit(:content, :user_id, :post_id)
  end

end
