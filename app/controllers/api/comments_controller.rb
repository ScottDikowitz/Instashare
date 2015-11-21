class Api::CommentsController < ApplicationController

  def index
    # post = Post.find(params[:postId])
    # @comments = post.comments
    # render @comments.to_json
  end

  def create
    @comment = Comment.new(comment_params)
    # byebug
    # byebug
    @comment.user_id = current_user.id
    if @comment.save
      render json: @comment
    else
      render json: {}
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
